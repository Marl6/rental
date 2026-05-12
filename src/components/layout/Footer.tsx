import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];

const iconLinks = [
  { label: "Share", href: "#", icon: "share" },
  { label: "Email", href: "mailto:events@lockwoodsranch.com", icon: "mail" },
  { label: "Location", href: "#", icon: "pin_drop" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="text-on-surface-variant font-body-md">
          <p className="font-headline-sm text-headline-sm text-primary">
            Lockwood's Ranch
          </p>
          <p className="mt-2 text-body-md text-on-surface-variant">
            © 2026 Lockwood's Ranch. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-body-md text-on-surface-variant">
          {footerLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-secondary transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {iconLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="border border-outline-variant rounded-full p-2 text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors duration-300"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
