import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-bold text-brand-gold">
              Elevate444
            </p>
            <p className="mt-1 text-sm text-white/60">Consulting</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Strategic advisory and mentoring for founders and leaders ready to
              scale with purpose.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{siteConfig.founder}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>Plantshop.me · Since 2015</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Also known as {siteConfig.alternateName}</p>
        </div>
      </div>
    </footer>
  );
}
