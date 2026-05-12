import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const ServicesGrid: FC = () => {
  return (
    <section className="bg-surface-container-low">
      <div className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          eyebrow="The Experiences"
          title="Curated Adventures"
          subtitle="Tailored days, immersive retreats, and refined celebrations."
          centered
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter md:min-h-screen">
          <Link
            href="/rentals"
            className="group relative overflow-hidden border border-outline-variant md:col-span-2 md:row-span-2 min-h-80 md:min-h-full"
          >
            <Image
              src="/images/home/services-rentals.jpg"
              alt="ATV riders crossing the ranch valley"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-surface-bright">
              <span className="font-label-md text-label-md uppercase tracking-widest text-surface-bright">
                Rentals
              </span>
              <h3 className="font-headline-md text-headline-md mt-2">
                The Fleet
              </h3>
              <p className="mt-4 text-body-md text-surface-bright/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Choose from premium ATVs and guided horse sessions with custom
                trail planning.
              </p>
            </div>
          </Link>

          <Link
            href="/weddings"
            className="group relative overflow-hidden border border-outline-variant md:col-span-2 min-h-72"
          >
            <Image
              src="/images/home/services-weddings.jpg"
              alt="Wedding ceremony setting in the timber hall"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-surface-bright">
              <span className="font-label-md text-label-md uppercase tracking-widest text-surface-bright">
                Weddings
              </span>
              <h3 className="font-headline-md text-headline-md mt-2">
                The Heritage Ceremony
              </h3>
              <p className="mt-4 text-body-md text-surface-bright/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Bespoke wedding weekends with curated menus and private
                accommodations.
              </p>
            </div>
          </Link>

          <Link
            href="/events"
            className="group relative overflow-hidden border border-outline-variant md:col-span-1 min-h-64"
          >
            <Image
              src="/images/home/services-corporate.jpg"
              alt="Corporate team gathering on the ranch terrace"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-surface-bright">
              <span className="font-label-md text-label-md uppercase tracking-widest text-surface-bright">
                Corporate
              </span>
              <h3 className="font-headline-md text-headline-md mt-2">
                The Retreat
              </h3>
              <p className="mt-4 text-body-md text-surface-bright/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Strategy sessions, team bonding, and private ranch buyouts.
              </p>
            </div>
          </Link>

          <Link
            href="/memberships"
            className="group relative overflow-hidden border border-outline-variant md:col-span-1 min-h-64"
          >
            <Image
              src="/images/home/services-memberships.jpg"
              alt="Members enjoying a fireside evening"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-surface-bright">
              <span className="font-label-md text-label-md uppercase tracking-widest text-surface-bright">
                Memberships
              </span>
              <h3 className="font-headline-md text-headline-md mt-2">
                The Inner Circle
              </h3>
              <p className="mt-4 text-body-md text-surface-bright/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Year-round privileges, private events, and seasonal ranch
                offerings.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
