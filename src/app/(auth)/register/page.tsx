import type { Metadata } from "next";
import { RegisterPageBody } from "@/components/auth/RegisterPageBody";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Create Account | Lockwood's Ranch",
    description:
      "Create your Lockwood's Ranch account to access bookings, events, and member updates.",
  };
}

export default function RegisterPage() {
  return <RegisterPageBody />;
}
