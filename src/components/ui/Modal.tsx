"use client";

import * as React from "react";

export type ModalProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function Modal({ open, children }: ModalProps) {
  if (!open) return null;
  return <div>{children}</div>;
}
