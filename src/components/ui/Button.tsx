import type { FC, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-container",
  secondary: "bg-secondary text-on-secondary hover:opacity-90",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-on-primary",
  ghost:
    "border border-white/40 text-white hover:bg-white hover:text-on-surface",
};

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  href,
}) => {
  const classes = `px-8 py-3 font-label-md text-label-md uppercase tracking-widest transition-all ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
