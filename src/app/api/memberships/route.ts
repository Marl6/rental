import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { stripe } from '@/lib/stripe'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const MEMBERSHIP_PRICES = {
  monthly: 3000,  // $30.00 in cents
  annual: 29900,  // $299.00 in cents
}

// POST - Create a membership subscription
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customer_email, customer_name, tier } = body

    // Create Stripe customer
    const customer = await stripe.customers.create({
      email: customer_email,
      name: customer_name,
    })

    // Create Stripe Checkout session for subscription
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer: customer.id,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Lockwood's Ranch — ${tier.charAt(0).toUpperCase() + tier.slice(1)} Membership`,
            },
            unit_amount: MEMBERSHIP_PRICES[tier as keyof typeof MEMBERSHIP_PRICES],
            recurring: {
              interval: tier === 'monthly' ? 'month' : 'year',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        customer_email,
        customer_name,
        tier,
        stripe_customer_id: customer.id,
        type: 'membership',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/memberships/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/memberships?cancelled=true`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create membership' }, { status: 500 })
  }
}