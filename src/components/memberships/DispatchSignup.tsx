"use client";

import type { FC, FormEvent } from "react";
import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

export const DispatchSignup: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-container-low p-12 border border-outline-variant">
      <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
        The Dispatch
      </p>
      <h3 className="font-headline-sm text-headline-sm text-primary mt-4">
        Join the circle
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-3">
        Member announcements, seasonal itineraries, and priority invitations.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
        {/* TODO Phase 2: Replace onSubmit with Stripe Checkout session */}
        <FormField id="dispatch-name" label="Name" />
        <FormField id="dispatch-email" label="Email" type="email" />
        <Button type="submit" variant="primary" className="w-full">
          Join the Circle
        </Button>
      </form>
      {submitted ? (
        <p className="mt-4 text-body-md text-body-md text-on-surface-variant">
          Welcome to the circle. Expect your first dispatch soon.
        </p>
      ) : null}
    </div>
  );
};
