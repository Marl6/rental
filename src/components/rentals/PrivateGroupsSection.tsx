"use client";

import type { FC, FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import { FormField } from "@/components/ui/FormField";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const PrivateGroupsSection: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-surface-container-highest">
      <div className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="relative">
            <div className="relative h-96 w-full border border-outline-variant">
              <Image
                src="/images/rentals/private-groups.jpg"
                alt="Private group enjoying a guided ATV experience"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-surface p-8 border border-outline-variant max-w-xs">
              <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                Group Testimonial
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                "The Lockwood team built a full-day itinerary that felt private,
                polished, and unforgettable."
              </p>
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mt-4">
                - Northwind Collective
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Private group adventures
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">
              Plan a curated itinerary for corporate groups, celebrations, and
              off-site retreats. We will coordinate the fleet, guides, and
              catering so your team can focus on the experience.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
              {/* TODO Phase 2: Replace onSubmit with Stripe Checkout session */}
              <FormField id="company-name" label="Company Name" />
              <FormField
                id="attendee-count"
                label="Attendee Count"
                type="number"
              />
              <button className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md uppercase tracking-widest">
                Request Details
              </button>
            </form>
            {submitted ? (
              <p className="mt-4 text-body-md text-body-md text-on-surface-variant">
                Thanks for reaching out. Our team will respond within 24 hours.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
