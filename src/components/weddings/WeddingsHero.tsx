import type { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%2330312e'/%3E%3C/svg%3E";

export const WeddingsHero: FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <Image
        src="/images/weddings/hero.jpg"
        alt="Wedding ceremony setting at sunset on the ranch"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
      <div className="absolute inset-0 bg-primary/20" />
      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-24">
        <p className="font-label-md text-label-md text-surface-bright uppercase tracking-widest">
          Weddings and Events
        </p>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-surface-bright mt-6">
          A Legacy of Love
        </h1>
        <p className="font-body-md text-body-md text-surface-bright/80 mt-4 max-w-2xl mx-auto">
          Celebrate with open skies, golden light, and curated ranch hospitality
          designed for unforgettable gatherings.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary">Start Planning</Button>
          <Button
            variant="ghost"
            className="border-surface-bright text-surface-bright"
          >
            The Gallery
          </Button>
        </div>
      </div>
      <button
        type="button"
        aria-label="Open planning calendar"
        className="md:hidden fixed bottom-8 right-8 bg-secondary text-on-secondary rounded-full p-4 shadow-lg"
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          calendar_month
        </span>
      </button>
    </section>
  );
};
