"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex flex-col leading-tight transition-opacity hover:opacity-80"
        >
          <span className="font-heading text-lg font-bold tracking-tight text-brand-green dark:text-brand-gold">
            Elevate444
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Consulting
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#contact"
            className={cn(
              buttonVariants(),
              "hidden bg-brand-green text-white hover:bg-brand-green/90 sm:inline-flex"
            )}
          >
            Book a Call
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "mt-4 bg-brand-green text-white hover:bg-brand-green/90"
                  )}
                >
                  Book a Call
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
