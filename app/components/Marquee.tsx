export default function Marquee() {
  const items = [
    "Atlanta 12.11–12.13",
    "LVRN Studios · SkateATL · The Tabernacle",
    "Tickets On Sale · Fri + Sat",
    "The Kickback Tour",
    "2027 Dates Dropping",
  ];
  const secondary = [
    "● BlerdCon 3.3.27",
    "● MomoCon 5.27.27",
    "● SDCC 7.22.27",
    "● DreamCon HOU TBD",
  ];

  return (
    <>
      <div className="relative z-20 overflow-hidden border-y-2 border-[#BDE0F8] py-2.5 bg-[#BDE0F8]/5">
        <div className="flex whitespace-nowrap animate-marquee gap-8 font-display text-lg md:text-xl uppercase tracking-wide">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              {items.map((t, j) => (
                <span key={j} className="flex items-center gap-8">
                  <span className="text-[#BDE0F8]">●</span>
                  <span>{t}</span>
                  <span className="text-frost/40">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-20 overflow-hidden border-b border-white/10 py-1.5 bg-ink">
        <div className="flex whitespace-nowrap animate-marquee-slow gap-6 font-mono text-[11px] uppercase tracking-wider text-frost/60">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              {secondary.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
