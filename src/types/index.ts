export type BookingType = 'atv' | 'horse' | 'venue'
export type PaymentStatus = 'pending' | 'confirmed' | 'cancelled'
export type MediaType = 'image' | 'video'
export type MembershipTier = 'monthly' | 'annual'
export type MembershipStatus = 'active' | 'cancelled' | 'expired'
export type EventStatus = 'upcoming' | 'past' | 'cancelled'

export interface Booking {
  id: string
  created_at: string
  customer_name: string
  customer_email: string
  customer_phone: string
  booking_type: BookingType
  event_date: string
  event_time: string
  duration_hours?: number
  unit_count?: number
  guest_count?: number
  special_requests?: string
  payment_status: PaymentStatus
  stripe_payment_id?: string
  total_amount: number
}

export interface Event {
  id: string
  created_at: string
  name: string
  description?: string
  event_date: string
  event_time: string
  ticket_price: number
  total_capacity: number
  tickets_sold: number
  cover_image_url?: string
  status: EventStatus
}

export interface Ticket {
  id: string
  created_at: string
  event_id: string
  customer_email: string
  customer_name: string
  quantity: number
  payment_status: PaymentStatus
  stripe_payment_id?: string
  ticket_reference: string
}

export interface Membership {
  id: string
  created_at: string
  customer_email: string
  customer_name: string
  tier: MembershipTier
  status: MembershipStatus
  stripe_subscription_id?: string
  stripe_customer_id?: string
  start_date: string
  renewal_date?: string
}

export interface GalleryItem {
  id: string
  created_at: string
  title?: string
  media_url: string
  media_type: MediaType
  event_tag?: string
  cloudinary_public_id?: string
}

export interface Newsletter {
  id: string
  created_at: string
  title: string
  pdf_url: string
  published_date: string
}