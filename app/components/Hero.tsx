import Link from "next/link";
import Image from "next/image";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden grain"
    >
      <HeroVideo />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink" />

      {/* REC tag top-left */}
      <div className="absolute top-40 left-6 md:left-10 z-10 font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
        <span className="text-[#BDE0F8]">● REC</span>
        <span className="text-frost/40">/</span>
        <span className="text-frost/60">cxmmunity media presents</span>
      </div>

      {/* Timestamp tag top-right */}
      <div className="absolute top-40 right-6 md:right-10 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-frost/60">
        atl.next → 12.11.26
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-52 md:pt-56 pb-24 flex flex-col items-center text-center">
        <h1 className="w-full max-w-4xl">
          <Image
            src="/kickback-logo.png"
            alt="The Kickback"
            width={2000}
            height={1000}
            priority
            className="w-full h-auto"
          />
        </h1>

        <p className="font-display text-2xl md:text-4xl mt-10 max-w-3xl uppercase">
          Gaming · Music · Creator Culture
        </p>

        <p className="mt-6 text-lg md:text-xl text-ice-soft/85 max-w-2xl leading-relaxed">
          The tour built for the next generation of creators, players, and
          culture shifters.
        </p>

        {/* Next-event chip */}
        <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-3 rounded-full border border-[#BDE0F8]/40 bg-ink/70 backdrop-blur-sm px-5 py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BDE0F8]">
            ● next stop
          </span>
          <span className="h-4 w-px bg-white/20 hidden sm:block" />
          <span className="font-display text-xl md:text-2xl tracking-wide">
            Atlanta · 12.11–12.13
          </span>
          <span className="font-mono text-[10px] text-[#FF3E88] uppercase tracking-[0.25em]">
            tickets soon
          </span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/atlanta"
            className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide"
          >
            See Atlanta →
          </Link>
          <Link
            href="/tickets"
            className="btn-ghost inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wide"
          >
            See Tickets
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-frost/50 text-[10px] font-mono uppercase tracking-[0.3em] flex flex-col items-center gap-2"
      >
        <span>scroll ↓</span>
        <span className="h-8 w-px bg-gradient-to-b from-frost/50 to-transparent" />
      </div>
    </section>
  );
}
