import type { FC } from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  badge?: string;
  badgeVariant?: "primary" | "secondary";
  title: string;
  description?: string;
  className?: string;
}

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const ImageCard: FC<ImageCardProps> = ({
  src,
  alt,
  badge,
  badgeVariant = "primary",
  title,
  description,
  className = "",
}) => {
  const badgeClasses =
    badgeVariant === "secondary"
      ? "bg-secondary text-on-secondary"
      : "bg-primary text-on-primary";

  return (
    <article
      className={`relative overflow-hidden border border-outline-variant ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <div className="absolute inset-0 cinematic-gradient" />
      </div>
      <div className="relative z-10 p-6 flex flex-col gap-3 h-full justify-end text-surface-bright">
        {badge ? (
          <span
            className={`inline-flex w-fit px-3 py-1 text-label-md font-label-md uppercase tracking-widest ${badgeClasses}`}
          >
            {badge}
          </span>
        ) : null}
        <h3 className="font-headline-md text-headline-md text-surface-bright">
          {title}
        </h3>
        {description ? (
          <p className="font-body-md text-body-md text-surface-bright/80">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
};
