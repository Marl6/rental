"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Rentals", href: "/rentals" },
  { label: "Weddings", href: "/weddings" },
  { label: "Events", href: "/events" },
  { label: "Memberships", href: "/memberships" },
  { label: "Archive", href: "/archive" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-40">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary tracking-tighter"
        >
          Lockwood's Ranch
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "text-primary border-b-2 border-primary pb-1 font-body-md"
                  : "text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300"
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <Link href="/rentals">
          <button className="bg-primary text-on-primary px-6 py-2 font-label-md text-label-md scale-95 active:opacity-80 transition-transform hover:bg-primary-container transition-colors duration-300">
            Book Now
          </button>
        </Link>
      </nav>
    </header>
  );
}
