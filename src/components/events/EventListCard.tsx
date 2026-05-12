import type { FC } from "react";

interface EventListCardProps {
  title: string;
  date: string;
  description: string;
  price: number;
}

export const EventListCard: FC<EventListCardProps> = ({
  title,
  date,
  description,
  price,
}) => {
  return (
    <article className="bg-surface-container-low p-8 border border-outline-variant">
      <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
        {date}
      </p>
      <h3 className="font-headline-sm text-headline-sm text-primary mt-4">
        {title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-3">
        {description}
      </p>
      <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mt-4">
        {price === 0 ? "Complimentary" : `$${price} per ticket`}
      </p>
      <button className="mt-6 text-secondary font-label-md text-label-md uppercase tracking-widest">
        View Details
      </button>
    </article>
  );
};
