"use client";

import type { FC } from "react";
import { Button } from "@/components/ui/Button";
import type { MembershipTier } from "@/lib/mock/memberships";

interface MembershipCardProps {
  tier: MembershipTier;
}

export const MembershipCard: FC<MembershipCardProps> = ({ tier }) => {
  const handleSelect = () => {
    // TODO Phase 2: Replace onSubmit with Stripe Checkout session
    alert("Proceeding to checkout...");
  };

  const isFeatured = Boolean(tier.featured);

  return (
    <article
      className={`relative border border-outline-variant p-10 h-full ${
        isFeatured
          ? "bg-primary text-on-primary shadow-xl"
          : "bg-surface-container-low"
      }`}
    >
      {tier.badge ? (
        <span className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 font-label-md text-label-md uppercase tracking-widest">
          {tier.badge}
        </span>
      ) : null}
      <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
        {tier.billingPeriod}
      </p>
      <h3
        className={`font-headline-sm text-headline-sm mt-4 ${
          isFeatured ? "text-on-primary" : "text-primary"
        }`}
      >
        {tier.name}
      </h3>
      <p
        className={`text-3xl font-headline-md mt-4 ${
          isFeatured ? "text-on-primary" : "text-primary"
        }`}
      >
        ${tier.price}
      </p>
      <ul
        className={`mt-6 space-y-3 text-body-md ${
          isFeatured ? "text-on-primary/90" : "text-on-surface-variant"
        }`}
      >
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2">
            <span className="material-symbols-outlined" aria-hidden="true">
              check_circle
            </span>
            {perk}
          </li>
        ))}
      </ul>
      <Button
        onClick={handleSelect}
        variant={isFeatured ? "secondary" : "outline"}
        className="mt-8 w-full"
      >
        Join the Circle
      </Button>
    </article>
  );
};
