import Image from "next/image";
import { getHeadshotPath } from "@/lib/headshot";
import { siteConfig } from "@/lib/constants";

export function Headshot() {
  const src = getHeadshotPath();

  return (
    <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#0F1626] shadow-2xl">
      <Image
        src={src}
        alt={`${siteConfig.founder} — Founder • Venture Ecosystem Builder`}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 384px"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
        onError={(e) => {
          // Graceful fallback if photo not yet added
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Elegant overlay caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white/90">
        <div className="text-xs tracking-[2px] text-white/60">CO-FOUNDER, PLANTSHOP.AE</div>
        <div className="mt-1 font-heading text-2xl tracking-[-0.5px]">Jimmy Manalel</div>
      </div>
    </div>
  );
}
