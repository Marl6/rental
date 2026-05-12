import type { FC } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { mockPastEvents } from "@/lib/mock/events";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const PastHighlightsGallery: FC = () => {
  return (
    <section className="bg-surface-container">
      <SectionWrapper>
        {/* TODO Phase 2: Replace static images with Cloudinary fetch */}
        <SectionHeading
          eyebrow="Past Highlights"
          title="The Ranch Afterglow"
          centered
        />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockPastEvents.map((event) => (
            <div
              key={event.id}
              className="relative aspect-square overflow-hidden rounded-xl border border-outline-variant"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};
