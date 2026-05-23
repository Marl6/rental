"use client";

import { useSearchParams } from "next/navigation";
import { ResetPasswordPageBody } from "@/components/auth/ResetPasswordPageBody";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const hasToken = Boolean(searchParams.get("token"));

  return <ResetPasswordPageBody hasToken={hasToken} />;
}
