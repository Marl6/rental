import type { FC } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow ? (
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-headline-lg text-headline-lg text-primary">
        {title}
      </h2>
      {subtitle ? (
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          {subtitle}
        </p>
      ) : null}
      {centered ? <div className="w-24 h-1 bg-secondary mx-auto mt-4" /> : null}
    </div>
  );
};
