import type { Metadata } from "next";
import { ResetPasswordPageBody } from "@/components/auth/ResetPasswordPageBody";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Reset Password | Lockwood's Ranch",
    description: "Request a password reset or set a new password.",
  };
}

export default function ResetPasswordPage() {
  return <ResetPasswordPageBody />;
}
