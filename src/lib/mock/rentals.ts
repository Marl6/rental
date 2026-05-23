export const ATV_TOTAL = 48;
export const HORSE_TOTAL = 6;

export const mockRentals = [
  {
    id: "rancher-400x",
    name: "Rancher 400x",
    type: "atv",
    price: 185,
    priceUnit: "hr",
    description:
      "48 units available. Perfect for individual explorers craving speed and autonomy on the lower trails.",
    image: "/images/rentals/rancher-400x.jpg",
    badge: null,
  },
  {
    id: "summit-king-850",
    name: "Summit King 850",
    type: "atv",
    price: 245,
    priceUnit: "hr",
    description:
      "High-clearance suspension for mountain access. Recommended for experienced riders only.",
    image: "/images/rentals/summit-king-850.jpg",
    badge: null,
  },
  {
    id: "equestrian-fold",
    name: "The Equestrian Fold",
    type: "horse",
    price: 250,
    priceUnit: "Session",
    description:
      "6 highly-trained majestic horses for guided scenic tours across our 180-acre estate.",
    image: "/images/rentals/equestrian-fold.jpg",
    badge: "Limited Availability",
  },
];

export const mockAddOns = [
  {
    id: "private-guide",
    name: "Private Guide Service",
    price: 120,
    priceUnit: "Day",
    perks: [
      "Photography Assistance",
      "Local History Narration",
      "Survival Essentials Kit",
    ],
  },
];
