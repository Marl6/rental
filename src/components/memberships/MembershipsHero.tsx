import type { FC } from "react";
import Image from "next/image";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const MembershipsHero: FC = () => {
  return (
    <section className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div>
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
            Join the Legacy
          </p>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mt-6">
            Ranch Memberships and Inner Circle
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Private access, curated experiences, and seasonal gatherings crafted
            for those who call the ranch home.
          </p>
        </div>
        <div className="relative h-80 md:h-96 border border-outline-variant">
          <Image
            src="/images/memberships/hero.jpg"
            alt="Members gathering on the ranch terrace"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </div>
      </div>
    </section>
  );
};
