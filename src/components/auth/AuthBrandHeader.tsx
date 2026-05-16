"use client";

interface AuthBrandHeaderProps {
  title?: string;
  subtitle?: string;
}

export function AuthBrandHeader({
  title = "Lockwood's Ranch",
  subtitle = "Est. 1894",
}: AuthBrandHeaderProps) {
  return (
    <div className="space-y-2">
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
        {subtitle}
      </p>
      <h1 className="font-headline-md text-headline-md text-primary tracking-tighter">
        {title}
      </h1>
    </div>
  );
}
