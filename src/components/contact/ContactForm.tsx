"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { FormField } from "@/components/ui/FormField";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-bright border border-outline-variant p-8 md:p-12">
      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* TODO Phase 2: Replace onSubmit with Stripe Checkout session */}
        <FormField id="contact-name" label="Full Name" />
        <FormField id="contact-email" label="Email" type="email" />
        <FormField id="contact-topic" label="Inquiry Type" />
        <div className="relative group">
          <textarea
            id="contact-message"
            rows={4}
            placeholder=" "
            className="peer w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-2 transition-colors"
          />
          <label
            htmlFor="contact-message"
            className="absolute left-0 top-2 -translate-y-6 text-label-md font-label-md text-on-surface-variant uppercase transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-body-md peer-focus:-translate-y-6 peer-focus:text-label-md peer-focus:text-primary"
          >
            Message
          </label>
        </div>
        <button className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md uppercase tracking-widest">
          Send Message
        </button>
      </form>
      {submitted ? (
        <p className="mt-4 text-body-md text-body-md text-on-surface-variant">
          Thanks for reaching out. We will be in touch soon.
        </p>
      ) : null}
    </div>
  );
}
