import type { FC } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { MembershipCard } from "@/components/memberships/MembershipCard";
import { mockMembershipTiers } from "@/lib/mock/memberships";

export const MembershipTiersGrid: FC = () => {
  return (
    <SectionWrapper>
      <SectionHeading title="Membership Tiers" centered />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {mockMembershipTiers.map((tier) => (
          <MembershipCard key={tier.id} tier={tier} />
        ))}
      </div>
    </SectionWrapper>
  );
};
