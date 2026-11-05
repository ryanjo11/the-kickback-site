import Image from "next/image";
import Link from "next/link";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

export const metadata = {
  title: "Brand Preview C · Heavy Zine",
  robots: "noindex, nofollow",
};

/* --------------- Design tokens for Preview C ---------------
 * HEAVY zine treatment.
 * - Cream paper cards + torn tape edges
 * - Red spray-paint swoosh behind hero headline
 * - Halftone/grainy B&W background photography
 * - Weekend Programming tiles rebuilt as zine cards (tape + cream + red stickers)
 * - Schedule day banners as tape labels
 * - Heavy grain + noise texture
 * - Cyan glow on display type
 * - Full poster/concert-flyer vibe
 */

const RED = "#D9252A";
const CYAN = "#4DD8F0";
const CREAM = "#f5f1e3";

const weekendTiles = [
  { num: "01", title: "Conversations & Fireside Chats", photo: "/PanelsFireside.JPG", color: RED, tape: "-rotate-2" },
  { num: "02", title: "Creator Lounges & Mixers", photo: "/creator lounge mixer .JPG", color: CYAN, tape: "rotate-1" },
  { num: "03", title: "Gaming Tournament & Lounge", photo: "/past-events/cyw-kickback-293.jpg", color: RED, tape: "rotate-2" },
  { num: "04", title: "Concert Experience", photo: "/past-events/gherbo.jpg", color: CYAN, tape: "-rotate-1" },
  { num: "05", title: "Skate Jam", photo: "/SkateATL.avif", color: RED, tape: "rotate-2" },
  { num: "06", title: "DJ Sets", photo: "/DJ Sets .JPG", color: CYAN, tape: "-rotate-2" },
  { num: "07", title: "Cosplay Competition", photo: "/CosplayCompetition.JPG", color: RED, tape: "rotate-1" },
  { num: "08", title: "Bae Brigade", photo: "/BaeBrigade.jpeg", color: CYAN, tape: "-rotate-1" },
  { num: "09", title: "Streetwear & Vendor Market", photo: "/VendorMarketplace .JPG", color: RED, tape: "rotate-2" },
];

const cyanGlow: React.CSSProperties = {
  textShadow: `0 0 1px ${CYAN}, 0 0 4px ${CYAN}, 0 0 12px ${CYAN}66, 0 0 24px ${CYAN}33`,
  color: CREAM,
};

// Torn-paper mask via SVG + clip-path
const tornClip =
  "polygon(0% 4%, 2% 0%, 10% 3%, 18% 1%, 28% 4%, 40% 0%, 52% 3%, 65% 1%, 78% 4%, 88% 1%, 100% 3%, 98% 15%, 100% 28%, 97% 40%, 100% 55%, 98% 70%, 100% 85%, 98% 96%, 90% 99%, 78% 97%, 65% 100%, 52% 97%, 40% 100%, 28% 97%, 18% 100%, 8% 97%, 0% 100%, 2% 86%, 0% 72%, 3% 58%, 0% 45%, 3% 30%, 0% 18%)";

// Grain overlay (CSS SVG noise)
const grainOverlay: React.CSSProperties = {
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E")',
  mixBlendMode: "multiply",
  opacity: 0.35,
  pointerEvents: "none",
};

export default function PreviewBrandC() {
  return (
    <main className={`${bungee.variable} bg-ink text-frost min-h-screen`}>
      {/* Preview banner */}
      <div className="sticky top-0 z-50 bg-ink border-b-2 border-white/15 px-6 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: RED }} />
          <span style={{ color: RED }}>preview · brand C · heavy zine</span>
          <span className="text-frost/40 hidden md:inline">
            // full poster/concert-flyer energy
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            href="/preview-brand-b"
            className="text-frost/60 hover:text-frost border border-white/20 px-3 py-1.5"
          >
            ← Preview B
          </Link>
        </div>
      </div>

      {/* HERO — poster-inspired */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center">
        {/* Halftone-style photo backdrop */}
        <Image
          src="/past-events/cyw-kickback-411.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ filter: "grayscale(1) contrast(1.4) brightness(0.55)" }}
        />
        {/* Grain overlay */}
        <div className="absolute inset-0" style={grainOverlay} />
        {/* Darkening wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        {/* Red spray-paint swoosh */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          aria-hidden
        >
          <ellipse
            cx="500"
            cy="500"
            rx="420"
            ry="150"
            fill="none"
            stroke={RED}
            strokeWidth="38"
            opacity="0.65"
            transform="rotate(-8 500 500)"
            strokeLinecap="round"
            strokeDasharray="2400 80"
          />
          <ellipse
            cx="500"
            cy="520"
            rx="380"
            ry="120"
            fill="none"
            stroke={RED}
            strokeWidth="22"
            opacity="0.4"
            transform="rotate(-12 500 500)"
            strokeLinecap="round"
            strokeDasharray="1800 100"
          />
        </svg>

        {/* Side gutter watermarks */}
        <div
          className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.4em] hidden md:block"
          style={{ color: CYAN, writingMode: "vertical-rl", transform: "rotate(180deg) translateY(50%)" }}
        >
          The Kickback · The Kickback · The Kickback
        </div>
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.4em] hidden md:block"
          style={{ color: CYAN, writingMode: "vertical-rl" }}
        >
          The Kickback · The Kickback · The Kickback
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center text-center w-full">
          {/* Top logo */}
          <div className="w-40 md:w-56 mb-8">
            <Image
              src="/kickback-logo.png"
              alt="The Kickback"
              width={800}
              height={400}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* MASSIVE poster-style headline */}
          <h1
            className="uppercase leading-[0.85] max-w-5xl"
            style={{
              ...cyanGlow,
              fontFamily: "var(--font-bungee)",
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Save the<br />Date.
          </h1>

          {/* Big red date */}
          <div
            className="mt-6 uppercase leading-none"
            style={{
              fontFamily: "var(--font-bungee)",
              color: RED,
              fontSize: "clamp(3rem, 9vw, 7rem)",
              textShadow: `0 0 2px ${CYAN}, 0 0 8px ${CYAN}66`,
              letterSpacing: "-0.03em",
            }}
          >
            12/11 — 12/13
          </div>

          <div
            className="mt-6 uppercase"
            style={{
              ...cyanGlow,
              fontFamily: "var(--font-bungee)",
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Atlanta, GA
          </div>

          {/* CTA tape */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/tickets"
              className="relative px-8 py-4 uppercase text-sm font-bold tracking-widest"
              style={{
                background: CREAM,
                color: "#000",
                fontFamily: "var(--font-bungee)",
                boxShadow: `4px 4px 0 ${RED}`,
              }}
            >
              Tickets On Sale Now →
            </Link>
            <Link
              href="/schedule"
              className="relative px-8 py-4 uppercase text-sm font-bold tracking-widest border-2"
              style={{
                borderColor: CYAN,
                color: CYAN,
                ...cyanGlow,
                fontFamily: "var(--font-bungee)",
              }}
            >
              See the Weekend
            </Link>
          </div>
        </div>
      </section>

      {/* WEEKEND PROGRAMMING — zine card layout */}
      <section className="relative py-24 md:py-32 border-t-4" style={{ borderColor: RED }}>
        <div className="absolute inset-0" style={grainOverlay} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          {/* Title block — cream paper tag */}
          <div className="flex items-center justify-center mb-16">
            <div
              className="inline-block px-6 py-4 -rotate-2"
              style={{
                background: CREAM,
                color: "#000",
                boxShadow: `6px 6px 0 ${RED}`,
              }}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: RED }}>
                ● pillars / 09
              </div>
              <h2
                className="uppercase leading-none text-4xl md:text-6xl"
                style={{ fontFamily: "var(--font-bungee)", letterSpacing: "-0.02em" }}
              >
                Weekend Programming
              </h2>
            </div>
          </div>

          {/* Zine card collage */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {weekendTiles.map((t, i) => (
              <article
                key={t.num}
                className={`${t.tape} hover:rotate-0 hover:scale-105 transition-transform duration-300`}
              >
                <div
                  className="relative p-4 pb-5"
                  style={{
                    background: CREAM,
                    boxShadow: `6px 6px 0 ${t.color}, 0 0 0 1px rgba(0,0,0,0.15)`,
                  }}
                >
                  {/* Tape sticker at top */}
                  <div
                    className="absolute -top-3 left-6 right-6 h-6 opacity-80"
                    style={{
                      background: `repeating-linear-gradient(45deg, ${t.color} 0 6px, ${t.color}cc 6px 12px)`,
                      transform: "rotate(-2deg)",
                    }}
                  />

                  <div
                    className="relative aspect-square overflow-hidden border-2 border-black"
                    style={{ filter: "contrast(1.1) saturate(0.85)" }}
                  >
                    <Image
                      src={t.photo}
                      alt={t.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 50vw"
                    />
                    {/* Halftone/grain overlay on photo */}
                    <div className="absolute inset-0" style={grainOverlay} />
                    {/* Red stamp badge */}
                    <div
                      className="absolute top-2 right-2 px-2 py-1 text-[10px] font-bold uppercase tracking-widest -rotate-6"
                      style={{
                        background: t.color,
                        color: t.color === CYAN ? "#000" : "#fff",
                        fontFamily: "var(--font-bungee)",
                      }}
                    >
                      #{t.num}
                    </div>
                  </div>

                  <div className="mt-3 px-1 text-black">
                    <div
                      className="uppercase leading-tight text-lg md:text-xl"
                      style={{ fontFamily: "var(--font-bungee)", letterSpacing: "-0.01em" }}
                    >
                      {t.title}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE DAY BANNERS — tape label style */}
      <section className="py-24 md:py-32 border-t-4" style={{ borderColor: RED }}>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-10 text-center"
            style={{ color: RED }}
          >
            ● schedule preview · tape label day banners
          </div>

          <div className="space-y-10">
            {[
              { day: "FRI", date: "Dec 11", window: "6PM — 11PM", venue: "LVRN Studios", color: RED, tag: "Creator State of the Union" },
              { day: "SAT", date: "Dec 12", window: "6PM — 11PM", venue: "SkateATL", color: CYAN, tag: "Skate Jam · Best Trick · DJ Set" },
              { day: "SUN", date: "Dec 13", window: "11AM — 11:30PM", venue: "The Tabernacle", color: RED, tag: "The Kickback + Concert" },
            ].map((d, i) => (
              <div
                key={d.day}
                className={`relative p-6 md:p-8 ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                style={{
                  background: CREAM,
                  clipPath: tornClip,
                  boxShadow: `8px 8px 0 ${d.color}`,
                }}
              >
                <div className="absolute inset-0" style={grainOverlay} />

                <div className="relative grid md:grid-cols-12 gap-4 items-center text-black">
                  {/* Day tag — vertical tape */}
                  <div className="md:col-span-2">
                    <div
                      className="inline-block px-4 py-2 uppercase font-bold tracking-widest text-xs md:text-sm -rotate-3"
                      style={{
                        background: d.color,
                        color: d.color === CYAN ? "#000" : "#fff",
                        fontFamily: "var(--font-bungee)",
                      }}
                    >
                      {d.day}
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <div
                      className="uppercase leading-none text-3xl md:text-5xl"
                      style={{
                        fontFamily: "var(--font-bungee)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {d.tag}
                    </div>
                    <div className="mt-2 font-mono text-xs md:text-sm uppercase tracking-widest text-black/70">
                      ▸ {d.date} · {d.window} · {d.venue}
                    </div>
                  </div>

                  <div className="md:col-span-3 flex md:justify-end">
                    <div
                      className="font-mono text-[10px] uppercase tracking-widest px-2 py-1"
                      style={{ background: "#000", color: d.color }}
                    >
                      Full Lineup ↓
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-xs font-mono text-frost/50 uppercase tracking-widest text-center">
            ▸ actual schedule items would still render below each banner — same data, same ordering, just repackaged in this style
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4"
            style={{ color: RED }}
          >
            ● what preview C changes
          </div>
          <ul className="space-y-3 text-sm text-frost/80 leading-relaxed">
            <li>▸ Hero rebuilt as a concert poster — red spray-paint swoosh, giant Bungee headline with cyan glow, cream tape CTAs with hard red shadow, side-gutter watermarks, halftone B&W photo wallpaper, grain overlay</li>
            <li>▸ Weekend Programming tiles rebuilt as zine cards — cream paper, hard red/cyan shadow offsets, tape stickers at the top, red badge stamps, halftone-tinted photos, Bungee titles in black ink</li>
            <li>▸ Schedule day banners rebuilt as torn tape labels — cream paper with torn edges, drop-shadow in day accent color, tilt angles alternating, hard black number tape</li>
            <li>▸ Heavy grain overlay running across multiple sections</li>
            <li>▸ Bungee font imported for all display type</li>
            <li>▸ Real poster/concert-flyer energy. More visual commitment, bigger emotional swing — but also more fatigue over scroll. Recommend using sparingly — hero + drop pages — rather than every section site-wide</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
