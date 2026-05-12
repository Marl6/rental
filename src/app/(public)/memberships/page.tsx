import type { Metadata } from "next";
import { CommunityAndDispatch } from "@/components/memberships/CommunityAndDispatch";
import { MembershipsHero } from "@/components/memberships/MembershipsHero";
import { MembershipTiersGrid } from "@/components/memberships/MembershipTiersGrid";
import { NewsletterArchive } from "@/components/memberships/NewsletterArchive";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Memberships | Lockwood's Ranch",
    description:
      "Discover Lockwood's Ranch membership tiers, perks, and seasonal dispatches for our inner circle.",
  };
}

export default function MembershipsPage() {
  return (
    <div className="flex flex-col">
      <MembershipsHero />
      <MembershipTiersGrid />
      <NewsletterArchive />
      <CommunityAndDispatch />
    </div>
  );
}
