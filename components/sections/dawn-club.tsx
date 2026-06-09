import Link from "next/link";
import { Sunrise } from "lucide-react";
import { dawnClubPillars } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

export function DawnClub() {
  return (
    <section
      id="dawn-club"
      className="scroll-mt-16 bg-gradient-to-br from-brand-navy to-brand-green py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
            <Sunrise className="h-7 w-7 text-brand-gold" />
          </div>
        </div>

        <SectionHeading
          label="444 Dawn Club"
          title="Leadership Philosophy"
          description="Dawn symbolizes new beginnings. 444 represents intentionality, structure, and the discipline to show up every day."
          light
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {dawnClubPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <h3 className="font-heading text-xl font-bold text-brand-gold">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-xl text-white/70">
            444 Dawn Club is an invitation-only mentoring circle for founders and
            leaders committed to personal growth and business excellence. Join a
            community that rises together.
          </p>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 inline-flex bg-brand-gold text-brand-navy hover:bg-brand-gold/90 h-11 px-6 font-semibold"
            )}
          >
            Inquire About Membership
          </Link>
        </div>
      </div>
    </section>
  );
}
