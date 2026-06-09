import {
  Target,
  Settings,
  TrendingUp,
  Shield,
  Users,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Settings,
  TrendingUp,
  Shield,
  Users,
  Rocket,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="How I Help You Grow"
          description="Tailored advisory across strategy, operations, governance, and leadership — built on real-world scaling experience."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.title}
                className="group border-border/60 bg-card transition-all hover:border-brand-gold/40 hover:shadow-lg hover:shadow-brand-green/5"
              >
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-gold/20 group-hover:text-brand-gold dark:bg-brand-gold/10 dark:text-brand-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
