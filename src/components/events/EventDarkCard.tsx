import type { FC } from "react";

interface EventDarkCardProps {
  title: string;
  description: string;
  date: string;
}

export const EventDarkCard: FC<EventDarkCardProps> = ({
  title,
  description,
  date,
}) => {
  return (
    <article className="bg-primary text-on-primary p-8 border border-primary-container">
      <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary/80">
        {date}
      </p>
      <h3 className="font-headline-sm text-headline-sm mt-4">{title}</h3>
      <p className="font-body-md text-body-md text-on-primary/80 mt-3">
        {description}
      </p>
      <button className="mt-6 border border-on-primary/40 px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-on-primary hover:bg-on-primary hover:text-on-surface transition-colors">
        Join the Gathering
      </button>
    </article>
  );
};
