import Link from "next/link";
import { BookOpen, Bell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

export function BlogPlaceholder() {
  return (
    <section id="blog" className="scroll-mt-16 border-t border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand-green/20 bg-brand-green/10 dark:border-brand-gold/20 dark:bg-brand-gold/10">
            <BookOpen className="h-7 w-7 text-brand-green dark:text-brand-gold" />
          </div>
        </div>

        <SectionHeading
          label="Insights"
          title="Blog Coming Soon"
          description="Strategy notes, scaling lessons from Plantshop.me, governance frameworks, and leadership insights for founders."
        />

        <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-dashed border-border bg-card p-8 text-center">
          <Bell className="mx-auto h-8 w-8 text-muted-foreground" />
          <p className="mt-4 text-sm text-muted-foreground">
            Be the first to read new articles on business strategy, operations, and
            mentoring. Leave your details via the contact form and mention
            &ldquo;Newsletter&rdquo;.
          </p>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-6 inline-flex"
            )}
          >
            Get Notified
          </Link>
        </div>
      </div>
    </section>
  );
}
