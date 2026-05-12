import type { Metadata } from "next";
import { InquiryForm } from "@/components/weddings/InquiryForm";
import { VenuesBentoGrid } from "@/components/weddings/VenuesBentoGrid";
import { WeddingPackagesSection } from "@/components/weddings/WeddingPackagesSection";
import { WeddingsHero } from "@/components/weddings/WeddingsHero";
import { WeddingsSocialFeed } from "@/components/weddings/WeddingsSocialFeed";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Weddings and Events | Lockwood's Ranch",
    description:
      "Celebrate your story at Lockwood's Ranch with curated venues, bespoke packages, and a dedicated events team.",
  };
}

export default function WeddingsPage() {
  return (
    <div className="flex flex-col">
      <WeddingsHero />
      <VenuesBentoGrid />
      <WeddingPackagesSection />
      <InquiryForm />
      <WeddingsSocialFeed />
    </div>
  );
}
