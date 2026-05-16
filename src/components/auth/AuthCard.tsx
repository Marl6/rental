"use client";

import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <div
      className={`relative overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-sm p-10 md:p-12 ${className}`}
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-primary/10" />
      {children}
    </div>
  );
}
