import type { FC } from "react";
import Image from "next/image";

interface RentalFeatureCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string | null;
  price: number;
  priceUnit: string;
}

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%2330312e'/%3E%3C/svg%3E";

export const RentalFeatureCard: FC<RentalFeatureCardProps> = ({
  title,
  description,
  image,
  badge,
  price,
  priceUnit,
}) => {
  return (
    <article className="relative overflow-hidden border border-outline-variant h-full min-h-80">
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
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-surface-bright">
        {badge ? (
          <span className="inline-flex w-fit bg-secondary text-on-secondary px-3 py-1 font-label-md text-label-md uppercase tracking-widest">
            {badge}
          </span>
        ) : null}
        <h3 className="font-headline-md text-headline-md mt-4">{title}</h3>
        <p className="font-body-md text-body-md text-surface-bright/80 mt-3">
          {description}
        </p>
        <p className="font-label-md text-label-md uppercase tracking-widest mt-6">
          ${price} / {priceUnit}
        </p>
      </div>
    </article>
  );
};
