"use client";

export type PasswordStrength = "none" | "weak" | "fair" | "strong";

export function getPasswordStrength(password: string): PasswordStrength {
  if (!password) {
    return "none";
  }

  const lengthScore = password.length >= 10 ? 2 : password.length >= 8 ? 1 : 0;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const classScore = [hasLower, hasUpper, hasNumber, hasSymbol].filter(
    Boolean,
  ).length;
  const totalScore = lengthScore + classScore;

  if (totalScore <= 2) {
    return "weak";
  }

  if (totalScore <= 4) {
    return "fair";
  }

  return "strong";
}

interface PasswordStrengthBarProps {
  strength: PasswordStrength;
}

const strengthStyles: Record<
  PasswordStrength,
  { color: string; label: string }
> = {
  none: { color: "text-on-surface-variant", label: "None" },
  weak: { color: "text-error", label: "Weak" },
  fair: { color: "text-secondary", label: "Fair" },
  strong: { color: "text-primary", label: "Strong" },
};

export function PasswordStrengthBar({ strength }: PasswordStrengthBarProps) {
  const activeCount =
    strength === "weak"
      ? 1
      : strength === "fair"
        ? 2
        : strength === "strong"
          ? 3
          : 0;
  const labelStyle = strengthStyles[strength];

  return (
    <div>
      <div className="flex items-center gap-2">
        {Array.from({ length: 4 }).map((_, index) => {
          const isActive = index < activeCount;
          const segmentColor =
            strength === "weak"
              ? "bg-error"
              : strength === "fair"
                ? "bg-secondary"
                : strength === "strong"
                  ? "bg-primary"
                  : "bg-outline-variant";

          return (
            <div
              key={`segment-${index}`}
              className={`h-1 flex-1 rounded-full ${
                isActive ? segmentColor : "bg-outline-variant"
              }`}
            />
          );
        })}
      </div>
      <div
        className={`mt-2 font-label-md text-[11px] uppercase ${labelStyle.color}`}
      >
        {labelStyle.label} strength
      </div>
    </div>
  );
}
