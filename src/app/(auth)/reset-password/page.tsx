import type { Metadata } from "next";
import { Suspense } from "react";
import ResetPasswordClient from "./ResetPasswordClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Reset Password | Lockwood's Ranch",
    description: "Request a password reset or set a new password.",
  };
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center text-on-surface-variant">
          Loading...
        </div>
      }
    >
      <ResetPasswordClient />
    </Suspense>
  );
}
