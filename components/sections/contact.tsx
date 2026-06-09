import { Calendar, Clock, Mail, Video } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section-heading";

const timeSlots = ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get in Touch"
          title="Let's Elevate Your Business"
          description="Book a consultation or send a message. I typically respond within 24 hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-brand-gold/30 bg-gradient-to-br from-brand-navy to-brand-green text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/20">
                    <Calendar className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl text-white">
                      Schedule a Call
                    </CardTitle>
                    <p className="text-sm text-white/60">30-minute strategy session</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Available This Week
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className="rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm transition-colors hover:border-brand-gold/50 hover:bg-brand-gold/10"
                      >
                        <Clock className="mb-1 inline h-3 w-3 text-brand-gold" /> {slot}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-white/50">
                    Calendly integration coming soon — use the contact form to book.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Video className="h-4 w-4 text-brand-gold" />
                  Video call via Google Meet or Zoom
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="flex items-center gap-4 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                  <Mail className="h-5 w-5 text-brand-green dark:text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email directly</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-brand-green hover:underline dark:text-brand-gold"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
