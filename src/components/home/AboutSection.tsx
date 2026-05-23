import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23f0eee9'/%3E%3C/svg%3E";

export const AboutSection: FC = () => {
  return (
    <SectionWrapper className="relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="relative md:col-span-5">
          <div className="relative w-full h-96 border border-outline bg-surface-container-low p-2">
            <div className="relative w-full h-full">
              <Image
                src="/images/home/about-main.jpg"
                alt="Ranch hands preparing horses near the timber barn"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-secondary bg-surface-container-low">
            <div className="relative w-full h-full">
              <Image
                src="/images/home/about-accent.jpg"
                alt="Detail of saddle leather and ranch tools"
                fill
                sizes="(max-width: 768px) 40vw, 20vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            The Ranch Legacy
          </p>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-4">
            A century of frontier hospitality, reimagined.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Lockwood&apos;s Ranch pairs rugged landscapes with curated comfort.
            Our 4,000-acre estate blends open-range adventure with tailored
            service, from sunrise trail rides to evening celebrations under the
            stars.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-widest mt-6 group"
          >
            Learn our story
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};
