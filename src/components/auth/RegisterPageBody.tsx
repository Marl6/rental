"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthBrandHeader } from "@/components/auth/AuthBrandHeader";
import { AuthCTAButton } from "@/components/auth/AuthCTAButton";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthSplitImage } from "@/components/auth/AuthSplitImage";
import {
  getPasswordStrength,
  PasswordStrengthBar,
} from "@/components/auth/PasswordStrengthBar";

export function RegisterPageBody() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [confirmError, setConfirmError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setConfirmError("Passwords do not match.");
      return;
    }

    setConfirmError(undefined);
    setLoading(true);
    setSuccess(true);

    window.setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 1200);
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
        alt="Couple celebrating under the ranch skies"
        quote="Welcome to the ranch. Your next chapter starts here."
        subtext="Create an account to unlock tailored itineraries, member perks, and priority event access."
      />

      <div className="lg:col-span-5 flex items-center justify-center px-6 py-16">
        <div className="relative z-10 w-full max-w-lg bg-surface-bright p-8 md:p-16 border border-outline-variant">
          <AuthBrandHeader subtitle="Join the Circle" />
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <AuthInput
              id="register-name"
              label="Full Name"
              icon="person"
              placeholder="Your full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
            <AuthInput
              id="register-email"
              label="Email"
              type="email"
              icon="mail"
              placeholder="you@domain.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <div className="space-y-4">
              <AuthInput
                id="register-password"
                label="Password"
                type="password"
                icon="lock"
                placeholder="Create a password"
                showToggle
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <PasswordStrengthBar strength={strength} />
            </div>
            <AuthInput
              id="register-confirm"
              label="Confirm Password"
              type="password"
              icon="lock"
              placeholder="Re-enter your password"
              showToggle
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              error={confirmError}
              required
            />
            <label className="flex items-center gap-2 text-body-md text-on-surface-variant">
              <input
                type="checkbox"
                className="custom-checkbox h-4 w-4 border border-outline rounded-none accent-primary"
                checked={acceptTerms}
                onChange={(event) => setAcceptTerms(event.target.checked)}
                required
              />
              <span className="font-body-md text-body-md">
                I agree to the ranch terms and privacy policy.
              </span>
            </label>
            <AuthCTAButton
              type="submit"
              label="Create Account"
              loading={loading}
              loadingLabel="Creating account"
              disabled={loading || !acceptTerms}
            />
          </form>
          <p className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-primary-container"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {success ? (
        <div className="fixed top-6 right-6 z-20 bg-surface-container-lowest border border-outline-variant px-6 py-4 text-on-surface shadow-sm">
          <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
            Account created
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Redirecting you to sign in.
          </p>
        </div>
      ) : null}
    </main>
  );
}
