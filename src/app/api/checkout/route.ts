import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, wa, serviceId, serviceName, price, notes } = body;

    // Validation
    if (!name || (!email && !wa) || !serviceId || !price) {
      return NextResponse.json(
        { error: 'Nama dan salah satu dari Email atau nomor WhatsApp wajib diisi.' },
        { status: 400 }
      );
    }

    // Generate unique order ID
    const timestamp = Date.now();
    const rand = Math.floor(Math.random() * 1000);
    const orderId = `ORDER-${timestamp}-${rand}`;

    // Midtrans API Credentials
    const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
    const authHeader = `Basic ${Buffer.from(serverKey + ':').toString('base64')}`;

    // Prepare payload for Midtrans Sandbox Snap API
    const midtransPayload = {
      transaction_details: {
        order_id: orderId,
        gross_amount: price,
      },
      item_details: [
        {
          id: serviceId,
          price: price,
          quantity: 1,
          name: serviceName,
        },
      ],
      customer_details: {
        first_name: name,
        email: email || '',
        phone: wa || '',
      },
      custom_field1: notes || '',
    };

    // Make request to Midtrans sandbox snap transaction endpoint
    const midtransResponse = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(midtransPayload),
    });

    const midtransData = await midtransResponse.json();

    if (!midtransResponse.ok) {
      return NextResponse.json(
        { error: midtransData.error_messages || 'Gagal membuat transaksi dengan Midtrans' },
        { status: 500 }
      );
    }

    // Save order data to orders.json in the project root
    const ordersFilePath = path.join(process.cwd(), 'orders.json');
    let ordersList = [];

    if (fs.existsSync(ordersFilePath)) {
      try {
        const fileContent = fs.readFileSync(ordersFilePath, 'utf-8');
        ordersList = JSON.parse(fileContent);
      } catch (err) {
        ordersList = [];
      }
    }

    const newOrder = {
      order_id: orderId,
      buyer_details: {
        name,
        email: email || '',
        wa: wa || '',
        notes: notes || '',
      },
      item_details: {
        id: serviceId,
        name: serviceName,
        price: price,
      },
      transaction_details: {
        token: midtransData.token,
        redirect_url: midtransData.redirect_url,
        status: 'pending',
        created_at: new Date().toISOString(),
      },
      webhook_payload: null,
    };

    ordersList.push(newOrder);
    fs.writeFileSync(ordersFilePath, JSON.stringify(ordersList, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      token: midtransData.token,
      redirect_url: midtransData.redirect_url,
      order_id: orderId,
    });
  } catch (error: any) {
    console.error('Checkout API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Terjadi kesalahan server internal' },
      { status: 500 }
    );
  }
}
