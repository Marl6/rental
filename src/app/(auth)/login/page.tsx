import type { Metadata } from "next";
import { LoginPageBody } from "@/components/auth/LoginPageBody";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Login | Lockwood's Ranch",
    description: "Sign in to manage bookings, memberships, and ranch events.",
  };
}

export default function LoginPage() {
  return <LoginPageBody />;
}
