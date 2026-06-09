import { Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Trusted by founders, executives, and leadership teams across industries."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/60 bg-card">
              <CardContent className="pt-6">
                <Quote className="mb-4 h-8 w-8 text-brand-gold/60" />
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
