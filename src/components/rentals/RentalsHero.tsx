import type { FC } from "react";
import Image from "next/image";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%2330312e'/%3E%3C/svg%3E";

export const RentalsHero: FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center">
      <Image
        src="/images/rentals/hero.jpg"
        alt="ATV riders moving across the open ridge at sunrise"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-24">
        <p className="font-label-md text-label-md text-surface-bright uppercase tracking-widest">
          The Fleet and The Fold
        </p>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-surface-bright mt-6">
          Unbridled Exploration.
        </h1>
        <p className="font-body-md text-body-md text-surface-bright/80 mt-4 max-w-2xl">
          Choose from a full fleet of premium ATVs and guided horse sessions
          crafted for explorers, families, and private groups.
        </p>
      </div>
    </section>
  );
};
