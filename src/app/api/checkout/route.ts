import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

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

    // Save order data to Supabase website_orders table
    const { error: dbError } = await supabase
      .from('website_orders')
      .insert({
        order_id: orderId,
        buyer_name: name,
        buyer_email: email || '',
        buyer_wa: wa || '',
        buyer_notes: notes || '',
        service_id: serviceId,
        service_name: serviceName,
        price: price,
        snap_token: midtransData.token,
        snap_redirect_url: midtransData.redirect_url,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });

    if (dbError) {
      console.error('[Checkout DB Error] Failed to save order to Supabase:', dbError);
      return NextResponse.json(
        { error: `Database Error: ${dbError.message}. Pastikan tabel 'website_orders' sudah dibuat di Supabase.` },
        { status: 500 }
      );
    }

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
