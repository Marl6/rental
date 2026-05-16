"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AuthBrandHeader } from "@/components/auth/AuthBrandHeader";
import { AuthCTAButton } from "@/components/auth/AuthCTAButton";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthSplitImage } from "@/components/auth/AuthSplitImage";
import {
  getPasswordStrength,
  PasswordStrengthBar,
} from "@/components/auth/PasswordStrengthBar";

export function ResetPasswordPageBody() {
  const searchParams = useSearchParams();
  const hasToken = Boolean(searchParams.get("token"));

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);

  const strength = useMemo(
    () => getPasswordStrength(newPassword),
    [newPassword],
  );

  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setRequested(true);
    }, 900);
  };

  const handleResetSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setConfirmError("Passwords do not match.");
      return;
    }

    setConfirmError(undefined);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 900);
  };

  return (
    <main className="relative min-h-screen bg-surface grid grid-cols-1 lg:grid-cols-12">
      <div className="fixed inset-0 noise-overlay pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-1/3 h-full bg-surface-container-high/30 -z-10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 -z-10 blur-3xl pointer-events-none" />
      <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 border border-outline-variant rotate-12 opacity-20" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] border border-outline-variant -rotate-12 opacity-10" />
      </div>

      <AuthSplitImage
        src="/images/weddings/hero.jpg"
        alt="Golden hour over the ranch"
        quote="Reset your access, then head back into the wild."
        subtext="We will help you secure your account and return to planning the next ranch moment."
      />

      <div className="lg:col-span-5 flex items-center justify-center px-6 py-16">
        <div className="relative z-10 w-full max-w-lg bg-surface-bright p-8 md:p-16 border border-outline-variant">
          <AuthBrandHeader subtitle="Account Access" />
          <div className="mt-6">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-widest text-primary hover:text-primary-container"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to login
            </Link>
          </div>

          {hasToken ? (
            <form onSubmit={handleResetSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <AuthInput
                  id="reset-new-password"
                  label="New Password"
                  type="password"
                  icon="lock"
                  placeholder="Create a new password"
                  showToggle
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  required
                />
                <PasswordStrengthBar strength={strength} />
              </div>
              <AuthInput
                id="reset-confirm-password"
                label="Confirm Password"
                type="password"
                icon="lock"
                placeholder="Re-enter your new password"
                showToggle
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                error={confirmError}
                required
              />
              <AuthCTAButton
                type="submit"
                label="Update Password"
                loading={loading}
                loadingLabel="Updating"
              />
            </form>
          ) : (
            <form onSubmit={handleRequestSubmit} className="mt-8 space-y-6">
              <AuthInput
                id="reset-email"
                label="Email"
                type="email"
                icon="mail"
                placeholder="you@domain.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <AuthCTAButton
                type="submit"
                label="Send Reset Link"
                loading={loading}
                loadingLabel="Sending"
              />
              {requested ? (
                <p className="font-body-md text-body-md text-on-surface-variant">
                  If that email exists in our system, a reset link is on the
                  way.
                </p>
              ) : null}
            </form>
          )}

          <div className="mt-10 flex items-center gap-4 text-on-surface-variant/60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">verified_user</span>
              <span className="font-label-md text-[11px] uppercase">
                Verified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">encrypted</span>
              <span className="font-label-md text-[11px] uppercase">
                Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
