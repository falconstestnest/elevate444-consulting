import { aboutStats } from "@/lib/constants";
import { Headshot } from "@/components/headshot";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Building Businesses That Last"
          description="A decade of entrepreneurial grit, global accelerator experience, and a commitment to elevating the next generation of leaders."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Headshot />

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m <strong className="text-foreground">Jimmy Manalal James</strong>
              — entrepreneur, strategist, and mentor. Since founding{" "}
              <strong className="text-brand-green dark:text-brand-gold">Plantshop.me</strong> in
              2015, I&apos;ve navigated the full arc of building and scaling a business:
              from early traction to national operations, through COVID-era disruption,
              and into governance-ready growth.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My experience with <strong className="text-foreground">500 Global</strong> sharpened
              my approach to fundraising, investor relations, and the operational discipline
              required to scale startups globally. Today, I advise founders and leadership teams
              on strategy, operations, corporate governance, and the human side of growth.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Through <strong className="text-foreground">444 Dawn Club</strong>, I mentor
              emerging leaders who believe that clarity, accountability, and servant leadership
              are the foundations of lasting success.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-brand-green dark:text-brand-gold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
