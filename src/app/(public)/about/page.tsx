import type { Metadata } from "next";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About | Lockwood's Ranch",
    description:
      "Learn about Lockwood's Ranch, our heritage, and the refined frontier experiences we host year-round.",
  };
}

export default function AboutPage() {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="The Story"
        title="Rooted in Heritage"
        subtitle="A century of ranch traditions, reimagined for modern retreats."
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Lockwood&apos;s Ranch spans 180 acres of high desert terrain, built
            on a legacy of craftsmanship, hospitality, and open-sky adventure.
            From sunrise trail rides to candlelit celebrations, every detail is
            curated to feel personal and enduring.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Our team pairs rugged frontier energy with refined service so guests
            can explore, gather, and recharge in a setting unlike anywhere else.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-on-surface-variant">
            <div className="border border-outline-variant p-4">
              <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                Established
              </p>
              <p className="font-headline-sm text-headline-sm text-primary mt-2">
                1860<span className="small">s</span>
              </p>
            </div>
            <div className="border border-outline-variant p-4">
              <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                Acreage
              </p>
              <p className="font-headline-sm text-headline-sm text-primary mt-2">
                180 Acres
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-96 border border-outline-variant">
          <Image
            src="/images/about/heritage.jpg"
            alt="Historic ranch homestead at golden hour"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
