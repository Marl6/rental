import type { FC } from "react";
import Image from "next/image";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%2330312e'/%3E%3C/svg%3E";

export const EventsHero: FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center">
      <Image
        src="/images/events/hero.jpg"
        alt="Outdoor event gathering under string lights"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-24">
        <p className="font-label-md text-label-md uppercase tracking-widest text-surface-bright">
          Curated Experiences
        </p>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-surface-bright mt-6">
          Unforgettable Moments Under the Big Sky.
        </h1>
        <p className="font-body-md text-body-md text-surface-bright/80 mt-4 max-w-2xl">
          From artisan intensives to weekly gatherings, every event is designed
          to feel intimate, cinematic, and rooted in ranch heritage.
        </p>
      </div>
    </section>
  );
};
