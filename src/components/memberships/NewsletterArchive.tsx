import type { FC } from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { NewsletterCard } from "@/components/memberships/NewsletterCard";
import { mockNewsletterIssues } from "@/lib/mock/newsletters";

export const NewsletterArchive: FC = () => {
  return (
    <section className="bg-surface-container">
      <SectionWrapper>
        {/* TODO Phase 2: Replace static images with Cloudinary fetch */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
              The Archive
            </p>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-3">
              Field Notes and Seasonal Dispatch
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl">
              Read through our quarterly letters from the ranch and member-only
              stories.
            </p>
          </div>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-widest"
          >
            View All Archives
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {mockNewsletterIssues.map((issue) => (
            <NewsletterCard
              key={issue.id}
              title={issue.title}
              month={issue.month}
              image={issue.image}
              pdfUrl={issue.pdfUrl}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};
