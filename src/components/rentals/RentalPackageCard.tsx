import type { FC } from "react";
import Link from "next/link";

interface RentalPackageCardProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const RentalPackageCard: FC<RentalPackageCardProps> = ({
  title,
  description,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <article className="bg-surface-container-low border border-outline-variant p-8 flex flex-col justify-between h-full">
      <div>
        <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
          Private Groups
        </p>
        <h3 className="font-headline-sm text-headline-sm text-primary mt-4">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4">
          {description}
        </p>
      </div>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-widest"
      >
        {ctaLabel}
        <span className="material-symbols-outlined" aria-hidden="true">
          arrow_forward
        </span>
      </Link>
    </article>
  );
};
