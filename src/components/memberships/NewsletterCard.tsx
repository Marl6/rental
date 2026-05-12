import type { FC } from "react";
import Image from "next/image";

interface NewsletterCardProps {
  title: string;
  month: string;
  image: string;
  pdfUrl: string;
}

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const NewsletterCard: FC<NewsletterCardProps> = ({
  title,
  month,
  image,
  pdfUrl,
}) => {
  return (
    <a href={pdfUrl} className="group cursor-pointer">
      <div className="relative h-80 w-full overflow-hidden border border-outline-variant">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
      <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-4">
        {month}
      </p>
      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mt-2">
        {title}
      </h3>
    </a>
  );
};
