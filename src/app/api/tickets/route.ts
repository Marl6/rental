import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { stripe } from '@/lib/stripe'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// POST - Purchase tickets for an event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event_id, customer_email, customer_name, quantity } = body

    // Fetch event details
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('*')
      .eq('id', event_id)
      .single()

    if (eventError || !event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    // Check availability
    const available = event.total_capacity - event.tickets_sold
    if (quantity > available) {
      return NextResponse.json({ error: 'Not enough tickets available' }, { status: 400 })
    }

    // Insert ticket record
    const { data: ticket, error: ticketError } = await supabase
      .from('tickets')
      .insert({
        event_id,
        customer_email,
        customer_name,
        quantity,
        payment_status: 'pending',
      })
      .select()
      .single()

    if (ticketError) throw ticketError

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
              name: `Ticket — ${event.name}`,
              description: `Date: ${event.event_date} at ${event.event_time}`,
            },
            unit_amount: Math.round(event.ticket_price * 100),
          },
          quantity,
        },
      ],
      metadata: {
        ticket_id: ticket.id,
        event_id,
        type: 'ticket',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/events/success?ticket_id=${ticket.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/events?cancelled=true`,
    })

    return NextResponse.json({ url: session.url, ticket_id: ticket.id })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to purchase ticket' }, { status: 500 })
  }
}