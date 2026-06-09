import Image from "next/image";
import { getHeadshotPath } from "@/lib/headshot";
import { siteConfig } from "@/lib/constants";

export function Headshot() {
  const src = getHeadshotPath();

  if (src) {
    return (
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border-2 border-brand-gold shadow-2xl shadow-brand-green/20">
        <Image
          src={src}
          alt={`${siteConfig.founder} — Founder, ${siteConfig.name}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl border-2 border-brand-gold bg-gradient-to-br from-brand-green to-brand-navy shadow-2xl">
      <span className="font-heading text-7xl font-bold text-brand-gold">JJ</span>
      <p className="absolute bottom-6 text-sm text-white/60">Upload headshot to public/images/</p>
    </div>
  );
}
