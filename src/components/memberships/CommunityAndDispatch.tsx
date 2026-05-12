import type { FC } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CommunityUpdates } from "@/components/memberships/CommunityUpdates";
import { DispatchSignup } from "@/components/memberships/DispatchSignup";

export const CommunityAndDispatch: FC = () => {
  return (
    <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
      <CommunityUpdates />
      <DispatchSignup />
    </SectionWrapper>
  );
};
