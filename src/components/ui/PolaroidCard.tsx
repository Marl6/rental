import type { FC } from "react";
import Image from "next/image";

interface PolaroidCardProps {
  src: string;
  alt: string;
  caption: string;
  rotation?: string;
}

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23f5f3ee'/%3E%3C/svg%3E";

export const PolaroidCard: FC<PolaroidCardProps> = ({
  src,
  alt,
  caption,
  rotation = "",
}) => {
  return (
    <article
      className={`bg-surface border border-outline-variant p-3 shadow-sm ${rotation}`}
    >
      <div className="relative w-full aspect-square mb-4">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
      <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-tighter">
        {caption}
      </p>
    </article>
  );
};
