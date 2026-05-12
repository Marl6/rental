import type { FC } from "react";
import { mockCommunityUpdates } from "@/lib/mock/newsletters";

export const CommunityUpdates: FC = () => {
  return (
    <div>
      <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
        Community Updates
      </p>
      <h2 className="font-headline-lg text-headline-lg text-primary mt-3">
        From the ranch desk
      </h2>
      <div className="mt-6 space-y-6">
        {mockCommunityUpdates.map((update) => (
          <article
            key={update.id}
            className={`border-l-4 pl-4 ${
              update.highlighted ? "border-secondary" : "border-outline"
            }`}
          >
            <h3 className="font-headline-sm text-headline-sm text-primary">
              {update.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {update.body}
            </p>
            <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mt-3">
              {update.postedAt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
