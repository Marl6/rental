import type { FC } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { mockVenues } from "@/lib/mock/venues";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const VenuesBentoGrid: FC = () => {
  return (
    <SectionWrapper>
      {/* TODO Phase 2: Replace static images with Cloudinary fetch */}
      <SectionHeading
        eyebrow="Our Spaces"
        title="Distinctive Backdrops"
        subtitle="Four signature venues crafted for timeless celebrations."
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {mockVenues.map((venue, index) => {
          const sizeClasses =
            index === 0
              ? "md:col-span-8 h-96"
              : index === 1
                ? "md:col-span-4 h-96"
                : index === 2
                  ? "md:col-span-4 h-80"
                  : "md:col-span-8 h-80";

          return (
            <article
              key={venue.id}
              className={`group relative overflow-hidden border border-outline-variant ${sizeClasses}`}
            >
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
              <div className="absolute inset-0 cinematic-gradient" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-surface-bright">
                <h3 className="font-headline-md text-headline-md">
                  {venue.name}
                </h3>
                <p className="font-body-md text-body-md text-surface-bright/80 mt-2">
                  {venue.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
