import type { FC } from "react";
import Image from "next/image";

interface FeaturedEventCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%2330312e'/%3E%3C/svg%3E";

export const FeaturedEventCard: FC<FeaturedEventCardProps> = ({
  title,
  date,
  category,
  description,
  image,
}) => {
  return (
    <article className="relative border border-outline-variant overflow-hidden h-96">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
      <div className="absolute inset-0 cinematic-gradient" />
      <div className="absolute top-6 left-6 bg-surface px-4 py-2 rounded-lg shadow-sm">
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
          {date}
        </p>
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-surface-bright">
        <p className="font-label-md text-label-md uppercase tracking-widest text-surface-bright/80">
          {category}
        </p>
        <h3 className="font-headline-md text-headline-md mt-2">{title}</h3>
        <p className="font-body-md text-body-md text-surface-bright/80 mt-3">
          {description}
        </p>
        <button className="mt-6 w-fit border border-surface-bright px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-surface-bright hover:bg-surface-bright hover:text-on-surface transition-colors">
          Reserve Tickets
        </button>
      </div>
    </article>
  );
};
