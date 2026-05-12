export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  billingPeriod: "annually" | "monthly";
  perks: string[];
  featured?: boolean;
  badge?: string;
}

export const mockMembershipTiers: MembershipTier[] = [
  {
    id: "scout",
    name: "The Scout",
    price: 150,
    billingPeriod: "annually",
    perks: [
      "Quarterly print newsletter",
      "Early access to event booking",
      "Annual members' picnic invite",
    ],
  },
  {
    id: "rancher",
    name: "The Rancher",
    price: 450,
    billingPeriod: "annually",
    featured: true,
    badge: "Most Coveted",
    perks: [
      "All Scout benefits included",
      "Personal ranch concierge service",
      "10% discount on all rentals",
      "Private seasonal trail access",
    ],
  },
  {
    id: "guardian",
    name: "The Guardian",
    price: 1200,
    billingPeriod: "annually",
    perks: [
      "All Rancher benefits included",
      "Dedicated plot naming rights",
      "Unlimited curated ranch tours",
      "Bespoke seasonal leather gift set",
    ],
  },
];
