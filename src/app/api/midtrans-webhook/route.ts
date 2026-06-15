import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from '../../lib/supabase';

export async function POST(req: Request) {
  try {
    let payload: any;
    try {
      payload = await req.json();
    } catch (err) {
      console.warn('[Webhook] Received empty or invalid JSON body. Responding with 200 OK for connection test.');
      return NextResponse.json({ success: true, message: 'Connection test OK' });
    }

    // Handle Midtrans notification URL verification test
    if (payload.status_message && typeof payload.status_message === 'string' && payload.status_message.toLowerCase().includes('notification test')) {
      console.log('[Webhook] Received dummy Midtrans notification test');
      return NextResponse.json({ success: true, message: 'Notification test OK' });
    }

    const {
      order_id,
      transaction_status,
      status_code,
      gross_amount,
      signature_key,
      payment_type,
      fraud_status,
    } = payload;

    // Check for required fields for actual transaction notification
    if (!order_id || !signature_key) {
      console.warn('[Webhook] Missing order_id or signature_key in webhook payload');
      return NextResponse.json({ error: 'Payload tidak lengkap' }, { status: 400 });
    }

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

    // Check if order exists in Supabase
    const { data: existingOrder, error: fetchError } = await supabase
      .from('website_orders')
      .select('order_id')
      .eq('order_id', order_id)
      .maybeSingle();

    if (existingOrder) {
      // Update existing order status, payment type, and save the webhook payload
      const { error: updateError } = await supabase
        .from('website_orders')
        .update({
          status: status,
          payment_type: payment_type,
          webhook_payload: payload,
          updated_at: new Date().toISOString()
        })
        .eq('order_id', order_id);

      if (updateError) {
        console.error(`[Webhook] Error updating order status for ${order_id}:`, updateError);
        return NextResponse.json({ error: 'Gagal mengupdate status pesanan di database' }, { status: 500 });
      }
      
      console.log(`[Webhook] Success updating status for order: ${order_id} to ${status}`);
    } else {
      console.warn(`[Webhook] Order ID ${order_id} not found in database. Creating fallback record.`);
      // Insert a fallback order record
      const { error: insertError } = await supabase
        .from('website_orders')
        .insert({
          order_id: order_id,
          buyer_name: 'Unknown (Webhook Fallback)',
          buyer_email: '',
          buyer_wa: '',
          buyer_notes: '',
          service_id: 'unknown',
          service_name: 'Unknown Service',
          price: parseFloat(gross_amount || '0'),
          status: status,
          payment_type: payment_type,
          webhook_payload: payload,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error(`[Webhook] Error inserting fallback order ${order_id}:`, insertError);
        return NextResponse.json({ error: 'Gagal membuat record pesanan baru' }, { status: 500 });
      }
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
