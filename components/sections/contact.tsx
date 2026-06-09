"use client";

import { siteConfig } from "@/lib/constants";
import { ContactForm } from "./contact-form";

export function Connect() {
  return (
    <section id="connect" className="section bg-black px-6 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-[10px] tracking-[3px] text-white/40">NEXT STEP</div>

        <h2 className="mt-6 font-heading text-6xl tracking-[-1.5px]">
          Let’s talk.
        </h2>

        <p className="mt-6 text-xl text-white/70">
          If you’re building something real across India and the GCC, or thinking deeply about what it means to lead, I’d like to hear from you.
        </p>

        <div className="mt-10 text-sm uppercase tracking-widest">
          <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4 hover:no-underline">
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-xl">
        <ContactForm />
      </div>

      <div className="mt-24 text-center text-[10px] tracking-[2px] text-white/30">
        PLANTSHOP.AE • FOUNDER-BEING • CROSS-BORDER ECOSYSTEMS
      </div>
    </section>
  );
}
