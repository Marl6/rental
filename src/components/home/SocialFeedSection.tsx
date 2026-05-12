import type { FC } from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PolaroidCard } from "@/components/ui/PolaroidCard";
import { mockSocialPosts } from "@/lib/mock/home";

export const SocialFeedSection: FC = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            Field Journal
          </p>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-3">
            Moments from the Ranch
          </h2>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center border border-outline-variant px-6 py-3 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors duration-300"
        >
          View Journal
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* TODO Phase 2: Replace static images with Cloudinary fetch */}
        {mockSocialPosts.map((post) => (
          <PolaroidCard
            key={post.id}
            src={post.src}
            alt={`Social post: ${post.caption}`}
            caption={post.caption}
            rotation={post.rotation}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
