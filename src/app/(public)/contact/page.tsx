import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ContactForm } from "@/components/contact/ContactForm";
import { RANCH_EMAIL, RANCH_PHONE } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact | Lockwood's Ranch",
    description:
      "Reach the Lockwood's Ranch team to plan rentals, private events, and bespoke gatherings.",
  };
}

export default function ContactPage() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div>
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
            Contact
          </p>
          <h1 className="font-headline-lg text-headline-lg text-primary mt-4">
            Let us plan your next visit
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Reach out for rentals, weddings, or private gatherings. Our team
            will respond within one business day.
          </p>
          <div className="mt-6 space-y-4 text-on-surface-variant">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">call</span>
              <span className="font-body-md text-body-md">{RANCH_PHONE}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">mail</span>
              <span className="font-body-md text-body-md">{RANCH_EMAIL}</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
