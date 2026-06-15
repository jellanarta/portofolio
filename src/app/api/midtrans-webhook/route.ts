import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const {
      order_id,
      transaction_status,
      status_code,
      gross_amount,
      signature_key,
      payment_type,
      fraud_status,
    } = payload;

    const serverKey = process.env.MIDTRANS_SERVER_KEY || '';

    // Verify signature key: SHA512(order_id + status_code + gross_amount + ServerKey)
    const signatureSource = `${order_id}${status_code}${gross_amount}${serverKey}`;
    const hash = crypto.createHash('sha512').update(signatureSource).digest('hex');

    if (hash !== signature_key) {
      console.warn(`[Webhook] Invalid signature key for order: ${order_id}`);
      return NextResponse.json({ error: 'Signature Key tidak valid' }, { status: 400 });
    }

    // Determine final status
    let status = 'pending';
    if (
      transaction_status === 'capture' &&
      (fraud_status === 'accept' || !fraud_status)
    ) {
      status = 'settlement';
    } else if (transaction_status === 'settlement') {
      status = 'settlement';
    } else if (
      transaction_status === 'deny' ||
      transaction_status === 'cancel' ||
      transaction_status === 'expire'
    ) {
      status = 'failure';
    } else if (transaction_status === 'pending') {
      status = 'pending';
    } else {
      status = transaction_status;
    }

    // Load and update orders.json
    const ordersFilePath = path.join(process.cwd(), 'orders.json');
    let ordersList: any[] = [];

    if (fs.existsSync(ordersFilePath)) {
      try {
        const fileContent = fs.readFileSync(ordersFilePath, 'utf-8');
        ordersList = JSON.parse(fileContent);
      } catch (err) {
        ordersList = [];
      }
    }

    const orderIndex = ordersList.findIndex((order) => order.order_id === order_id);

    if (orderIndex !== -1) {
      // Merge new data and update status
      ordersList[orderIndex] = {
        ...ordersList[orderIndex],
        transaction_details: {
          ...ordersList[orderIndex].transaction_details,
          status: status,
          payment_type: payment_type,
          updated_at: new Date().toISOString(),
        },
        webhook_payload: payload,
      };

      fs.writeFileSync(ordersFilePath, JSON.stringify(ordersList, null, 2), 'utf-8');
      console.log(`[Webhook] Success updating status for order: ${order_id} to ${status}`);
    } else {
      console.warn(`[Webhook] Order ID ${order_id} not found in orders.json`);
      // If the webhook comes for an order not created in checkout (unlikely in sandbox if we test properly, but possible if database is cleared)
      // Save it anyway as a new record to avoid losing data
      const fallbackOrder = {
        order_id: order_id,
        buyer_details: {
          name: 'Unknown (Webhook Fallback)',
          email: '',
          wa: '',
          notes: '',
        },
        item_details: {
          id: 'unknown',
          name: 'Unknown Service',
          price: gross_amount,
        },
        transaction_details: {
          token: '',
          redirect_url: '',
          status: status,
          payment_type: payment_type,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        webhook_payload: payload,
      };
      ordersList.push(fallbackOrder);
      fs.writeFileSync(ordersFilePath, JSON.stringify(ordersList, null, 2), 'utf-8');
    }

    return NextResponse.json({ success: true, message: 'Webhook processed successfully' });
  } catch (error: any) {
    console.error('Webhook API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Terjadi kesalahan server internal' },
      { status: 500 }
    );
  }
}
