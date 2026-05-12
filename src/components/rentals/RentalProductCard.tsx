import type { FC } from "react";
import Image from "next/image";

interface RentalProductCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  priceUnit: string;
}

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const RentalProductCard: FC<RentalProductCardProps> = ({
  title,
  description,
  image,
  price,
  priceUnit,
}) => {
  return (
    <article className="border border-outline-variant bg-surface-container-low p-6 flex flex-col gap-4 h-full">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
      <div>
        <h3 className="font-headline-sm text-headline-sm text-primary">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-3">
          {description}
        </p>
        <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mt-4">
          ${price} / {priceUnit}
        </p>
      </div>
    </article>
  );
};
