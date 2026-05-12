import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin | Lockwood's Ranch",
    description: "Owner dashboard and admin tools (coming soon).",
  };
}

export default function AdminDashboardPage() {
  return (
    <SectionWrapper>
      <div className="border border-outline-variant bg-surface-container-low p-12 text-center">
        <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
          Admin Dashboard
        </p>
        <h1 className="font-headline-lg text-headline-lg text-primary mt-4">
          Coming soon
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4">
          Admin tools will be available in Phase 2 once bookings, events, and
          memberships are connected.
        </p>
      </div>
    </SectionWrapper>
  );
}
