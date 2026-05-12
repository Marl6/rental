"use client";

import type { FC } from "react";
import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { mockEvents } from "@/lib/mock/events";
import { FeaturedEventCard } from "@/components/events/FeaturedEventCard";
import { EventListCard } from "@/components/events/EventListCard";
import { EventDarkCard } from "@/components/events/EventDarkCard";

export const EventsListSection: FC = () => {
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const featured = mockEvents.find((event) => event.featured) ?? mockEvents[0];
  const sideEvents = mockEvents.filter((event) => event.id !== featured?.id);

  return (
    <SectionWrapper>
      {/* TODO Phase 2: Replace mockEvents with Supabase query */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Upcoming Events
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Limited tickets available for each curated experience.
          </p>
        </div>
        <div className="border border-outline-variant p-1 rounded-xl flex items-center gap-2 w-fit">
          <button
            type="button"
            onClick={() => setView("calendar")}
            className={`px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-widest ${
              view === "calendar"
                ? "bg-surface-container-high text-on-surface"
                : "text-on-surface-variant"
            }`}
          >
            Calendar
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={`px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-widest ${
              view === "list"
                ? "bg-surface-container-high text-on-surface"
                : "text-on-surface-variant"
            }`}
          >
            List
          </button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {featured ? (
          <div className="md:col-span-8">
            <FeaturedEventCard
              title={featured.title}
              date={featured.date}
              category={featured.category}
              description={featured.description}
              image={featured.image}
            />
          </div>
        ) : null}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          {sideEvents[0] ? (
            <EventListCard
              title={sideEvents[0].title}
              date={sideEvents[0].date}
              description={sideEvents[0].description}
              price={sideEvents[0].price}
            />
          ) : null}
          {sideEvents[1] ? (
            <EventDarkCard
              title={sideEvents[1].title}
              date={sideEvents[1].date}
              description={sideEvents[1].description}
            />
          ) : null}
        </div>
      </div>
    </SectionWrapper>
  );
};
