import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { stripe } from '@/lib/stripe'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// GET - Fetch all bookings (admin) or by email (customer)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  try {
    const query = supabase.from('bookings').select('*').order('created_at', { ascending: false })

    if (email) query.eq('customer_email', email)

    const { data, error } = await query
    if (error) throw error

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}

// POST - Create a new booking and start Stripe checkout
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      customer_name,
      customer_email,
      customer_phone,
      booking_type,
      event_date,
      event_time,
      duration_hours,
      unit_count,
      guest_count,
      special_requests,
      total_amount,
    } = body

    // Insert booking into Supabase with pending status
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        customer_name,
        customer_email,
        customer_phone,
        booking_type,
        event_date,
        event_time,
        duration_hours,
        unit_count,
        guest_count,
        special_requests,
        total_amount,
        payment_status: 'pending',
      })
      .select()
      .single()

    if (error) throw error

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Lockwood's Ranch — ${booking_type.toUpperCase()} Booking`,
              description: `Date: ${event_date} at ${event_time}`,
            },
            unit_amount: Math.round(total_amount * 100), // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        booking_id: booking.id,
        type: 'booking',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/bookings/success?booking_id=${booking.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/bookings?cancelled=true`,
    })

    return NextResponse.json({ url: session.url, booking_id: booking.id })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}