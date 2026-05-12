import type { FC } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { mockWeddingPackages } from "@/lib/mock/venues";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23f0eee9'/%3E%3C/svg%3E";

export const WeddingPackagesSection: FC = () => {
  return (
    <section className="bg-surface-container">
      <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div>
          <SectionHeading
            eyebrow="Signature Packages"
            title="Designed for the moment"
            subtitle="From weekend buyouts to intimate gatherings, each package is tailored to your story."
          />
          <div className="mt-8 space-y-6">
            {mockWeddingPackages.map((pkg) => (
              <div key={pkg.title} className="flex gap-4">
                <span className="material-symbols-outlined text-secondary">
                  {pkg.icon}
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {pkg.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {pkg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 border border-secondary/20 h-80 w-80" />
          <div className="relative h-96 w-full border border-outline-variant">
            <Image
              src="/images/weddings/packages.jpg"
              alt="Wedding table setting with candlelight"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
