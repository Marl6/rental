"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { AuthBrandHeader } from "@/components/auth/AuthBrandHeader";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthInput } from "@/components/auth/AuthInput";
import { AuthCTAButton } from "@/components/auth/AuthCTAButton";

export function LoginPageBody() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!password.trim()) {
      setPasswordError("Password is required.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }

    setPasswordError(undefined);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 900);
  };

  return (
    <main className="relative min-h-screen bg-surface flex items-center justify-center px-6 py-16">
      <div className="fixed inset-0 noise-overlay pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-1/3 h-full bg-surface-container-high/30 -z-10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 -z-10 blur-3xl pointer-events-none" />
      <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 border border-outline-variant rotate-12 opacity-20" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] border border-outline-variant -rotate-12 opacity-10" />
      </div>

      <div className="relative z-10 w-full max-w-[440px] space-y-6">
        <AuthBrandHeader />
        <AuthCard>
          <form onSubmit={handleSubmit} className="space-y-6">
            <AuthBrandHeader title="" subtitle="Login" />
            <AuthInput
              id="login-email"
              label="Email"
              type="email"
              icon="mail"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <AuthInput
              id="login-password"
              label="Password"
              type="password"
              icon="lock"
              placeholder="Enter your password"
              showToggle
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error={passwordError}
              required
            />
            <div className="flex flex-wrap items-center justify-between gap-4 text-body-md text-on-surface-variant">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="custom-checkbox h-4 w-4 border border-outline rounded-none accent-primary"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span className="font-body-md text-body-md">Remember me</span>
              </label>
              <Link
                href="/reset-password"
                className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-primary-container"
              >
                Forgot password?
              </Link>
            </div>
            <AuthCTAButton
              type="submit"
              label="Sign In"
              loading={loading}
              loadingLabel="Signing in"
            />
          </form>
        </AuthCard>
        <p className="text-center font-body-md text-body-md text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-primary-container"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
