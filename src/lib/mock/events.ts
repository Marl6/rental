export type EventStatus = "upcoming" | "past";

export interface MockEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  dateRange?: string;
  category: string;
  price: number;
  description: string;
  image: string;
  status: EventStatus;
  ticketsLeft?: number;
  featured?: boolean;
}

export const mockEvents: MockEvent[] = [
  {
    id: "1",
    slug: "artisan-spirits-leatherworking",
    title: "The Artisan Spirits and Leatherworking Intensive",
    date: "Oct 14-16, 2024",
    category: "Weekend Retreat",
    price: 450,
    description: "A curated weekend of craft spirits and artisanal leatherworking.",
    image: "/images/events/artisan-spirits.jpg",
    status: "upcoming",
    featured: true,
    ticketsLeft: 12,
  },
  {
    id: "2",
    slug: "harvest-moon-gala",
    title: "Harvest Moon Gala",
    date: "Nov 02, 2024",
    category: "Dinner",
    price: 185,
    description:
      "An evening of sustainable dining featuring ingredients sourced exclusively from the ranch.",
    image: "/images/events/harvest-moon-gala.jpg",
    status: "upcoming",
  },
  {
    id: "3",
    slug: "sunset-bluegrass-sessions",
    title: "Sunset Bluegrass Sessions",
    date: "Every Friday",
    category: "Weekly",
    price: 0,
    description:
      "Join us every Friday at the South Barn for local music, cider, and bonfire storytelling.",
    image: "/images/events/sunset-bluegrass.jpg",
    status: "upcoming",
  },
];

export const mockPastEvents: MockEvent[] = [
  {
    id: "4",
    slug: "winter-lantern-walk",
    title: "Winter Lantern Walk",
    date: "Jan 12, 2024",
    category: "Evening Walk",
    price: 35,
    description: "A candlelit stroll through the pine trail with mulled cider.",
    image: "/images/events/winter-lantern-walk.jpg",
    status: "past",
  },
  {
    id: "5",
    slug: "barrel-house-dinner",
    title: "Barrel House Dinner",
    date: "Feb 22, 2024",
    category: "Dinner",
    price: 220,
    description: "A five-course ranch-to-table tasting in the barrel house.",
    image: "/images/events/barrel-house-dinner.jpg",
    status: "past",
  },
  {
    id: "6",
    slug: "spring-stargaze",
    title: "Spring Stargaze",
    date: "Mar 30, 2024",
    category: "Night Sky",
    price: 45,
    description: "Telescopes, fireside cocoa, and a guided tour of the skies.",
    image: "/images/events/spring-stargaze.jpg",
    status: "past",
  },
  {
    id: "7",
    slug: "summer-rodeo-night",
    title: "Summer Rodeo Night",
    date: "Jul 18, 2024",
    category: "Arena",
    price: 65,
    description: "Rodeo showcases with live music and ranch concessions.",
    image: "/images/events/summer-rodeo-night.jpg",
    status: "past",
  },
];
