import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const { type, booking_id, ticket_id, event_id } = session.metadata ?? {}

    const paymentIntentId =
      typeof session.payment_intent === 'string'
        ? session.payment_intent
        : session.payment_intent?.id

    // Handle booking payment
    if (type === 'booking' && booking_id) {
      await supabase
        .from('bookings')
        .update({
          payment_status: 'confirmed',
          stripe_payment_id: paymentIntentId,
        })
        .eq('id', booking_id)
    }

    // Handle ticket payment
    if (type === 'ticket' && ticket_id) {
      const { data: ticket } = await supabase
        .from('tickets')
        .update({
          payment_status: 'confirmed',
          stripe_payment_id: paymentIntentId,
        })
        .eq('id', ticket_id)
        .select()
        .single()

      // Update tickets_sold count on the event
      if (ticket) {
        await supabase.rpc('increment_tickets_sold', {
          event_id_input: event_id,
          quantity_input: ticket.quantity,
        })
      }
    }

    // Handle membership payment
    if (type === 'membership') {
      const { customer_email, customer_name, tier, stripe_customer_id } = session.metadata ?? {}
      const subscriptionId =
        typeof session.subscription === 'string'
          ? session.subscription
          : session.subscription?.id

      if (!subscriptionId) {
        return NextResponse.json(
          { error: 'Missing subscription id on checkout session' },
          { status: 400 }
        )
      }

      await supabase.from('memberships').insert({
        customer_email,
        customer_name,
        tier,
        stripe_subscription_id: subscriptionId,
        stripe_customer_id,
        status: 'active',
        start_date: new Date().toISOString().split('T')[0],
      })
    }
  }

  // Handle subscription cancellation
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object as Stripe.Subscription
    await supabase
      .from('memberships')
      .update({ status: 'cancelled' })
      .eq('stripe_subscription_id', subscription.id)
  }

  return NextResponse.json({ received: true })
}