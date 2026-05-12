"use client";

import type { FC, FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";

const blurDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e4e2dd'/%3E%3C/svg%3E";

export const CheckoutPreviewSection: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="bg-surface-bright rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="bg-surface-container-low border-b md:border-b-0 md:border-r border-outline-variant p-12 flex-1">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Secure Your Spot
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 border border-outline-variant">
                <Image
                  src="/images/events/checkout-thumb.jpg"
                  alt="Event preview"
                  fill
                  sizes="64px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  The Artisan Spirits Intensive
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Oct 14-16, 2024
                </p>
              </div>
              <p className="ml-auto font-label-md text-label-md uppercase tracking-widest text-secondary">
                $450
              </p>
            </div>
            <div className="mt-8 space-y-3 text-body-md text-body-md text-on-surface-variant">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$450.00</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>$12.50</span>
              </div>
              <div className="flex justify-between font-headline-sm text-headline-sm text-primary">
                <span>Total</span>
                <span>$462.50</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* TODO Phase 2: Replace with real Stripe Checkout redirect */}
              <div>
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="mt-3 w-full border-b border-outline bg-transparent px-0 py-2 focus:ring-0 focus:border-primary"
                />
              </div>
              <div>
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="mt-3 w-full border-b border-outline bg-transparent px-0 py-2 focus:ring-0 focus:border-primary"
                />
              </div>
              <button className="w-full bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md uppercase tracking-widest">
                Pay $462.50
              </button>
              <p className="text-body-md text-body-md text-on-surface-variant text-center">
                Payments secured by Stripe
              </p>
            </form>
            {submitted ? (
              <p className="mt-4 text-body-md text-body-md text-on-surface-variant">
                Payment preview complete. We will redirect to Stripe in Phase 2.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
