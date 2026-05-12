"use client";

import type { FC, FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export const NewsletterSignup: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative bg-primary text-on-primary">
      <div className="absolute inset-4 border border-on-primary/20" />
      <div className="relative py-12 md:py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary/80">
              The Dispatch
            </p>
            <h2 className="font-headline-lg text-headline-lg mt-3">
              Stay close to the ranch.
            </h2>
            <p className="font-body-md text-body-md text-on-primary/80 mt-3 max-w-xl">
              Receive seasonal updates, early access to events, and private
              member offers.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:items-end gap-4 w-full md:w-auto"
          >
            {/* TODO Phase 2: Replace onSubmit with Stripe Checkout session */}
            <div className="flex flex-col gap-2 w-full sm:w-80">
              <label
                htmlFor="newsletter-email"
                className="font-label-md text-label-md uppercase tracking-widest text-on-primary/80"
              >
                Email Address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@domain.com"
                className="h-10 w-full bg-transparent border-b border-on-primary/40 focus:ring-0 focus:border-on-primary px-0 py-2 text-on-primary placeholder:text-on-primary/60"
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              className="h-10 bg-on-primary text-primary hover:bg-on-primary/90"
            >
              Subscribe
            </Button>
          </form>
        </div>
        {submitted ? (
          <p className="mt-6 text-body-md text-body-md text-on-primary/80">
            Thanks for joining. We will be in touch soon.
          </p>
        ) : null}
      </div>
    </section>
  );
};
