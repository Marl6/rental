"use client";

import type { ButtonHTMLAttributes } from "react";

interface AuthCTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
  loadingLabel?: string;
}

export function AuthCTAButton({
  label,
  loading = false,
  loadingLabel = "Loading",
  type = "button",
  className = "",
  ...props
}: AuthCTAButtonProps) {
  return (
    <button
      type={type}
      className={`w-full bg-primary text-on-primary font-label-md text-label-md uppercase py-5 px-8 flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-[0.98] ${className}`}
      {...props}
    >
      {loading ? (
        <span className="material-symbols-outlined animate-spin text-[18px]">
          progress_activity
        </span>
      ) : null}
      {loading ? loadingLabel : label}
    </button>
  );
}
