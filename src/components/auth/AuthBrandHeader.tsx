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
    <div className="text-center space-y-1">
      <h1 className="font-headline-md text-headline-md text-primary tracking-tighter">
        {title}
      </h1>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
        {subtitle}
      </p>
    </div>
  );
}
