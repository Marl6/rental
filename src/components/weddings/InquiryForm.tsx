"use client";

import type { FC, FormEvent } from "react";
import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { RANCH_EMAIL, RANCH_PHONE } from "@/lib/constants";

export const InquiryForm: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        <div>
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
            Plan Your Celebration
          </p>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-4">
            Tell us about your day
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Our events team will craft a tailored proposal with venue options,
            itineraries, and guest services to match your vision.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined">call</span>
              <span className="font-body-md text-body-md">{RANCH_PHONE}</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined">mail</span>
              <span className="font-body-md text-body-md">{RANCH_EMAIL}</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-bright p-8 md:p-12 border border-outline-variant">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {/* TODO Phase 2: Replace onSubmit with Stripe Checkout session */}
            <FormField id="full-name" label="Full Name" />
            <FormField id="email" label="Email" type="email" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                id="preferred-date"
                label="Preferred Date"
                type="date"
              />
              <FormField id="event-type" label="Event Type" />
            </div>
            <div className="relative group">
              <textarea
                id="message"
                rows={4}
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-2 transition-colors"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-2 -translate-y-6 text-label-md font-label-md text-on-surface-variant uppercase transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-body-md peer-focus:-translate-y-6 peer-focus:text-label-md peer-focus:text-primary"
              >
                Message
              </label>
            </div>
            <button className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md uppercase tracking-widest">
              Submit Inquiry
            </button>
          </form>
          {submitted ? (
            <p className="mt-4 text-body-md text-body-md text-on-surface-variant">
              Thanks for sharing your details. We will respond within one
              business day.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};
