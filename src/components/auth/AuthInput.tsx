"use client";

import type { InputHTMLAttributes } from "react";
import { useId, useState } from "react";

interface AuthInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id"
> {
  id: string;
  label: string;
  icon: string;
  error?: string;
  showToggle?: boolean;
}

export function AuthInput({
  id,
  label,
  type = "text",
  placeholder = " ",
  icon,
  error,
  showToggle,
  ...props
}: AuthInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const inputId = useId();
  const resolvedId = id || inputId;
  const isPasswordToggle = Boolean(showToggle);
  const inputType = isPasswordToggle && !isVisible ? "password" : type;

  return (
    <div className="relative">
      <div
        className={`relative border-b transition-colors ${
          error ? "border-error" : "border-outline focus-within:border-primary"
        }`}
      >
        <span
          className={`material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 ${
            error ? "text-error" : "text-on-surface-variant"
          }`}
        >
          {icon}
        </span>
        <input
          id={resolvedId}
          type={inputType}
          placeholder={placeholder}
          className={`peer w-full bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface py-3 pl-9 placeholder:text-transparent ${
            isPasswordToggle ? "pr-10" : "pr-2"
          }`}
          aria-invalid={Boolean(error)}
          {...props}
        />
        <label
          htmlFor={resolvedId}
          className="absolute left-9 top-3 -translate-y-6 text-label-md font-label-md text-on-surface-variant uppercase transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-body-md peer-focus:-translate-y-6 peer-focus:text-label-md peer-focus:text-primary"
        >
          {label}
        </label>
        {isPasswordToggle ? (
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
            aria-label={isVisible ? "Hide password" : "Show password"}
          >
            <span className="material-symbols-outlined">
              {isVisible ? "visibility_off" : "visibility"}
            </span>
          </button>
        ) : null}
      </div>
      {error ? (
        <div className="mt-2 flex items-center gap-1.5 text-error">
          <span className="material-symbols-outlined text-[14px]">error</span>
          <span className="text-[12px] font-label-md">{error}</span>
        </div>
      ) : null}
    </div>
  );
}
