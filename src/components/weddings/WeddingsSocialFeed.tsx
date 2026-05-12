import type { FC } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PolaroidCard } from "@/components/ui/PolaroidCard";
import { mockWeddingPolaroids } from "@/lib/mock/home";

export const WeddingsSocialFeed: FC = () => {
  return (
    <SectionWrapper>
      {/* TODO Phase 2: Replace static images with Cloudinary fetch */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
            The Journal
          </p>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-3">
            Celebrations in bloom
          </h2>
        </div>
      </div>
      <div className="mt-10 flex gap-gutter overflow-x-auto no-scrollbar pb-8">
        {mockWeddingPolaroids.map((post) => (
          <div key={post.id} className="min-w-56">
            <PolaroidCard
              src={post.src}
              alt={`Wedding moment: ${post.caption}`}
              caption={post.caption}
              rotation={post.rotation}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
