import { caseStudies } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Success Stories"
          title="Case Studies"
          description="Real ventures. Real challenges. Measurable outcomes."
        />

        <div className="mx-auto mt-16 grid max-w-xl gap-8">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="flex flex-col border-brand-gold/40 border-border/60"
            >
              <CardHeader>
                <Badge
                  variant="secondary"
                  className="mb-3 w-fit bg-brand-green/10 text-brand-green dark:bg-brand-gold/10 dark:text-brand-gold"
                >
                  {study.tag}
                </Badge>
                <CardTitle className="font-heading text-xl">{study.title}</CardTitle>
                <p className="text-sm font-medium text-brand-green dark:text-brand-gold">
                  {study.subtitle}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {study.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
