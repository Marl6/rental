import type { Metadata } from "next";
import { BookingFilterBar } from "@/components/rentals/BookingFilterBar";
import { PrivateGroupsSection } from "@/components/rentals/PrivateGroupsSection";
import { RentalsCatalog } from "@/components/rentals/RentalsCatalog";
import { RentalsHero } from "@/components/rentals/RentalsHero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ATV and Horse Rentals | Lockwood's Ranch",
    description:
      "Explore premium ATV rentals and guided horse sessions at Lockwood's Ranch. Reserve your adventure today.",
  };
}

export default function RentalsPage() {
  return (
    <div className="flex flex-col">
      <RentalsHero />
      <BookingFilterBar />
      <RentalsCatalog />
      <PrivateGroupsSection />
    </div>
  );
}
