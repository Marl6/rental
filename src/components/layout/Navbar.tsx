"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";

const navLinks = [
  { label: "Rentals", href: "/rentals" },
  { label: "Weddings", href: "/weddings" },
  { label: "Events", href: "/events" },
  { label: "Memberships", href: "/memberships" },
  { label: "Archive", href: "/archive" },
];

interface IndicatorStyle {
  left: number;
  width: number;
  opacity: number;
}

export function Navbar() {
  const pathname = usePathname();
  const [indicator, setIndicator] = useState<IndicatorStyle>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const activeIndex = navLinks.findIndex(({ href }) => pathname === href);

  const moveTo = useCallback((index: number) => {
    const link = linkRefs.current[index];
    const nav = navRef.current;
    if (!link || !nav) return;
    const linkRect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, []);

  const resetToActive = useCallback(() => {
    if (activeIndex >= 0) {
      moveTo(activeIndex);
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeIndex, moveTo]);

  // Snap to active link on mount and route change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeIndex >= 0) moveTo(activeIndex);
      else setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname, activeIndex, moveTo]);

  // Re-snap on window resize
  useEffect(() => {
    window.addEventListener("resize", resetToActive);
    return () => window.removeEventListener("resize", resetToActive);
  }, [resetToActive]);

  return (
    <header className="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-40">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary tracking-tighter"
        >
          Lockwood&apos;s Ranch
        </Link>

        {/* Link bar — the magic line is positioned relative to this div */}
        <div
          ref={navRef}
          className="hidden md:flex items-center gap-8 relative pb-1"
          onMouseLeave={resetToActive}
        >
          {/* The sliding underline */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 h-0.5 bg-primary pointer-events-none"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
              transition:
                "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
            }}
          />

          {navLinks.map(({ label, href }, index) => (
            <Link
              key={href}
              href={href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              onMouseEnter={() => moveTo(index)}
              className={
                pathname === href
                  ? "text-primary font-body-md transition-colors duration-300"
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
