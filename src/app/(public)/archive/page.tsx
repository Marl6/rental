import type { Metadata } from "next";
import { NewsletterArchive } from "@/components/memberships/NewsletterArchive";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Archive | Lockwood's Ranch",
    description:
      "Browse Lockwood's Ranch newsletters and seasonal dispatches from the archive.",
  };
}

export default function ArchivePage() {
  return (
    <div className="flex flex-col">
      <SectionWrapper>
        <SectionHeading
          eyebrow="Archive"
          title="Seasonal Dispatches"
          subtitle="Field notes, ranch updates, and member stories from every season."
        />
      </SectionWrapper>
      <NewsletterArchive />
    </div>
  );
}
