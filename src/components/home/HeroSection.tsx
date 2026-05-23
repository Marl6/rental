import type { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%2330312e'/%3E%3C/svg%3E";

export const HeroSection: FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <Image
        src="https://res.cloudinary.com/dhivjpqct/image/upload/home/hero.jpg?v=2"
        alt="Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
      <div className="absolute inset-0 cinematic-gradient" />
      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-24">
        <span className="text-surface-bright font-label-md text-body-lg uppercase tracking-widest">
          Est. 1860<span className="small">s</span>
        </span>
        <h1 className="text-surface-bright font-display-lg text-headline-lg md:text-display-lg mt-2">
          Lockwood&apos;s Ranch
        </h1>
        <h4 className="text-surface-bright font-headline-md text-headline-md mt-4 md:mt-3">
          Your Frontier, Refined.
        </h4>
        <p className="text-surface-bright/80 font-body-md text-body-md max-w-2xl mx-auto mt-4">
          ATV rentals, horse rides, and event weekends woven into a modern ranch
          experience built for the bold and the refined.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="secondary" href="/rentals">
            Explore Rentals
          </Button>
          <Button
            variant="ghost"
            href="/events"
            className="border-surface-bright text-surface-bright"
          >
            View Events
          </Button>
        </div>
      </div>
    </section>
  );
};
