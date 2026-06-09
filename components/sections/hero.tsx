import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center scroll-mt-16 overflow-hidden bg-gradient-to-br from-brand-navy via-brand-green to-brand-navy"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-medium text-brand-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Jimmy Manalal James · Elevate444 Consulting
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elevate Your Business.{" "}
            <span className="text-brand-gold">Lead with Purpose.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Strategy, governance, and mentoring for founders scaling through
            uncertainty — from Plantshop.me to 500 Global-backed ventures.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-gold text-brand-navy hover:bg-brand-gold/90 h-11 px-6 text-base font-semibold"
              )}
            >
              Book a Consultation
              <ArrowRight className="ml-1" />
            </Link>
            <Link
              href="#services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Explore Services
            </Link>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 transition-colors hover:text-brand-gold"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
