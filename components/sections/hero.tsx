"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center justify-center bg-black pt-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-8 text-[11px] tracking-[4px] text-white/50">INDIA &nbsp;•&nbsp; GCC &nbsp;•&nbsp; ECOSYSTEMS</div>

        <h1 className="font-heading text-[92px] leading-[0.88] tracking-[-4.5px] text-white sm:text-[120px] lg:text-[140px]">
          Jimmy<br />Manalel
        </h1>

        <p className="mx-auto mt-10 max-w-[38ch] text-2xl text-white/80 sm:text-3xl">
          I build bridges between founders, capital, and the ecosystems that make both stronger.
        </p>

        <div className="mt-16">
          <Link
            href="#connect"
            className="minimal-cta inline-flex items-center justify-center rounded-full px-10 py-4 text-sm uppercase tracking-[2.5px] text-white"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[3px] text-white/40">
        SCROLL
      </div>
    </section>
  );
}
