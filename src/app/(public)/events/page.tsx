import type { Metadata } from "next";
import { CheckoutPreviewSection } from "@/components/events/CheckoutPreviewSection";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsListSection } from "@/components/events/EventsListSection";
import { PastHighlightsGallery } from "@/components/events/PastHighlightsGallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Events | Lockwood's Ranch",
    description:
      "Explore upcoming events and past highlights at Lockwood's Ranch. Reserve tickets for curated gatherings and retreats.",
  };
}

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      <EventsHero />
      <EventsListSection />
      <PastHighlightsGallery />
      <CheckoutPreviewSection />
    </div>
  );
}
