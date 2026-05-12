import type { FC } from "react";

interface RentalAddOnCardProps {
  title: string;
  price: number;
  priceUnit: string;
  perks: string[];
}

export const RentalAddOnCard: FC<RentalAddOnCardProps> = ({
  title,
  price,
  priceUnit,
  perks,
}) => {
  return (
    <article className="bg-primary text-on-primary p-8 border border-primary-container flex flex-col justify-between h-full">
      <div>
        <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary/80">
          Add-On Service
        </p>
        <h3 className="font-headline-sm text-headline-sm mt-4">{title}</h3>
        <p className="font-label-md text-label-md uppercase tracking-widest mt-3">
          ${price} / {priceUnit}
        </p>
      </div>
      <ul className="mt-6 space-y-3 text-body-md text-body-md text-on-primary/90">
        {perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2">
            <span className="material-symbols-outlined" aria-hidden="true">
              check_circle
            </span>
            {perk}
          </li>
        ))}
      </ul>
    </article>
  );
};
