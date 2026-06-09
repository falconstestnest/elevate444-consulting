"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#home" className="font-heading text-xl tracking-[-1.5px] text-white">
          JIMMY MANALEL
        </Link>

        <div className="flex items-center gap-8 text-sm uppercase tracking-[2px]">
          <Link href="#belief" className="nav-link text-white/80 hover:text-white">Belief</Link>
          <Link href="#work" className="nav-link text-white/80 hover:text-white">Work</Link>
          <Link href="#connect" className="nav-link text-white/80 hover:text-white">Connect</Link>
        </div>
      </nav>
    </header>
  );
}
