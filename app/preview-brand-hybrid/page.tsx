import Image from "next/image";
import Link from "next/link";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

export const metadata = {
  title: "Brand Preview Hybrid · Medium Hero + Heavy Zine Programming + Grain",
  robots: "noindex, nofollow",
};

/* --------------- Hybrid preview ---------------
 * Combines Preview B's hero (medium, legible) with
 * Preview C's heavy-zine Weekend Programming tiles.
 * Schedule stays legible (medium) but gets grain + cream day banner.
 * Grain overlay applied across every section.
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

// Reusable grain overlays
// Subtle (hero + schedule) — mix-blend overlay, low opacity
const grainSubtle: React.CSSProperties = {
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E")',
  mixBlendMode: "overlay",
  opacity: 0.22,
  pointerEvents: "none",
};

// Heavy (zine card overlays, paper feel)
const grainHeavy: React.CSSProperties = {
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E")',
  mixBlendMode: "multiply",
  opacity: 0.4,
  pointerEvents: "none",
};

export default function PreviewBrandHybrid() {
  return (
    <main className={`${bungee.variable} bg-ink text-frost min-h-screen`}>
      {/* Preview banner */}
      <div className="sticky top-0 z-50 bg-ink border-b-2 border-white/15 px-6 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: RED }} />
          <span style={{ color: RED }}>preview · hybrid</span>
          <span className="text-frost/40 hidden md:inline">
            // medium hero + heavy zine tiles + grain everywhere
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            href="/preview-brand-b"
            className="text-frost/60 hover:text-frost border border-white/20 px-3 py-1.5"
          >
            Preview B
          </Link>
          <Link
            href="/preview-brand-c"
            className="text-frost/60 hover:text-frost border border-white/20 px-3 py-1.5"
          >
            Preview C
          </Link>
        </div>
      </div>

      {/* HERO — Medium (from Preview B) + grain */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center">
        <video
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />
        {/* Grain over hero */}
        <div className="absolute inset-0" style={grainSubtle} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center text-center w-full">
          <p
            className="font-mono text-[11px] md:text-xs uppercase tracking-[0.4em] mb-6"
            style={{ color: CYAN }}
          >
            Cxmmunity Media Presents
          </p>

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

          <p
            className="mt-10 max-w-3xl uppercase text-3xl md:text-5xl leading-none"
            style={{
              ...cyanGlow,
              fontFamily: "var(--font-bungee)",
              letterSpacing: "-0.02em",
            }}
          >
            Gaming · Music · Creator Culture
          </p>

          <p className="mt-6 text-lg md:text-xl text-ice-soft/85 max-w-2xl leading-relaxed">
            The tour built for the next generation of creators, streamers,
            gamers, and culture shifters.
          </p>

          <div
            className="mt-10 inline-flex flex-col sm:flex-row items-center gap-3 border-2 px-5 py-3"
            style={{ borderColor: RED, background: `${RED}15` }}
          >
            <span
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: RED }}
            >
              ● Next Stop
            </span>
            <span className="h-4 w-px bg-white/20 hidden sm:block" />
            <span
              className="text-xl md:text-2xl tracking-wide"
              style={{ fontFamily: "var(--font-bungee)", color: CREAM }}
            >
              Atlanta · 12.11–12.13
            </span>
            <span
              className="font-mono text-[10px] uppercase tracking-[0.25em] px-2 py-1"
              style={{ color: "#fff", background: RED }}
            >
              Tickets Soon
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/atlanta"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide text-ink"
              style={{ background: CREAM, boxShadow: `0 0 0 2px ${RED}` }}
            >
              See Atlanta →
            </Link>
            <Link
              href="/tickets"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wide border-2"
              style={{ borderColor: CYAN, color: CYAN, ...cyanGlow }}
            >
              See Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* POSTER FEATURE — hero → programming bridge */}
      <section className="relative py-20 md:py-28 border-t-4" style={{ borderColor: RED }}>
        <div className="absolute inset-0" style={grainSubtle} />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: RED }}
            >
              ● weekend events · poster
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-frost/50">
              Dec 11–13 · Atlanta
            </div>
          </div>

          <div className="relative mx-auto max-w-2xl">
            {/* Hard shadow offset like the zine cards */}
            <div
              className="absolute inset-0 translate-x-2 translate-y-2"
              style={{ background: RED }}
              aria-hidden
            />
            {/* Cream paper frame with tilt + tape */}
            <div
              className="relative -rotate-1 bg-[#f5f1e3] p-4 pb-6 shadow-2xl"
            >
              {/* Tape sticker top */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 rotate-2 shadow-md"
                style={{
                  background: `repeating-linear-gradient(45deg, ${CYAN} 0 6px, ${CYAN}cc 6px 12px)`,
                  opacity: 0.9,
                }}
                aria-hidden
              />
              {/* Poster image */}
              <div className="relative aspect-[3/4] overflow-hidden border-2" style={{ borderColor: RED }}>
                <Image
                  src="/preview-poster.png.PNG"
                  alt="The Kickback · Weekend Events poster"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 640px, 100vw"
                  priority
                />
                {/* Heavy grain inside photo for texture match */}
                <div className="absolute inset-0" style={grainHeavy} />
              </div>
              {/* Caption strip */}
              <div className="mt-4 px-2 flex items-center justify-between">
                <div className="font-mono text-[10px] text-ink/60 uppercase tracking-[0.25em]">
                  ▸ save the date
                </div>
                <div
                  className="text-lg md:text-xl uppercase leading-none text-ink"
                  style={{ fontFamily: "var(--font-bungee)" }}
                >
                  Dec 11–13
                </div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.25em] px-2 py-1"
                  style={{ color: "#fff", background: RED }}
                >
                  Fri · Sat · Sun
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKEND PROGRAMMING — Heavy zine cards (from Preview C) + grain */}
      <section
        className="relative py-24 md:py-32 border-t-4"
        style={{ borderColor: RED }}
      >
        {/* Grain across whole section */}
        <div className="absolute inset-0" style={grainHeavy} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-center mb-16">
            <div
              className="inline-block px-6 py-4 -rotate-2 relative"
              style={{
                background: CREAM,
                color: "#000",
                boxShadow: `6px 6px 0 ${RED}`,
              }}
            >
              <div className="absolute inset-0" style={grainHeavy} />
              <div className="relative">
                <div
                  className="font-mono text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: RED }}
                >
                  ● pillars / 09
                </div>
                <h2
                  className="uppercase leading-none text-4xl md:text-6xl"
                  style={{
                    fontFamily: "var(--font-bungee)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Weekend Programming
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {weekendTiles.map((t) => (
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
                  {/* Paper grain */}
                  <div className="absolute inset-0" style={grainHeavy} />

                  {/* Tape sticker at top */}
                  <div
                    className="absolute -top-3 left-6 right-6 h-6 opacity-80 z-10"
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
                    <div className="absolute inset-0" style={grainHeavy} />
                    <div
                      className="absolute top-2 right-2 px-2 py-1 text-[10px] font-bold uppercase tracking-widest -rotate-6 z-10"
                      style={{
                        background: t.color,
                        color: t.color === CYAN ? "#000" : "#fff",
                        fontFamily: "var(--font-bungee)",
                      }}
                    >
                      #{t.num}
                    </div>
                  </div>

                  <div className="relative mt-3 px-1 text-black">
                    <div
                      className="uppercase leading-tight text-lg md:text-xl"
                      style={{
                        fontFamily: "var(--font-bungee)",
                        letterSpacing: "-0.01em",
                      }}
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

      {/* SCHEDULE — Medium day banners (legible) with grain */}
      <section className="relative py-24 md:py-32 border-t-4" style={{ borderColor: RED }}>
        <div className="absolute inset-0" style={grainSubtle} />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-10 text-center"
            style={{ color: RED }}
          >
            ● schedule preview · day banners
          </div>

          <div className="space-y-6">
            {[
              { day: "FRI", date: "Dec 11", venue: "LVRN Studios", color: RED, tag: "Creator State of the Union" },
              { day: "SAT", date: "Dec 12", venue: "SkateATL", color: CYAN, tag: "Skate Jam · Best Trick · DJ Set" },
              { day: "SUN", date: "Dec 13", venue: "The Tabernacle · Downtown Atlanta", color: RED, tag: "The Kickback + Concert" },
            ].map((d) => (
              <div
                key={d.day}
                className="relative border-2 p-6 flex flex-wrap items-center justify-between gap-4"
                style={{
                  borderColor: d.color,
                  background: `linear-gradient(90deg, ${d.color}22 0%, transparent 60%)`,
                }}
              >
                <div className="absolute inset-0" style={grainSubtle} />
                <div className="relative flex items-center gap-4 flex-wrap">
                  <span
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: d.color }}
                  />
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest font-bold"
                    style={{ color: d.color }}
                  >
                    {d.day} · LIVE
                  </span>
                  <div
                    className="text-3xl md:text-5xl uppercase leading-none"
                    style={{
                      ...cyanGlow,
                      fontFamily: "var(--font-bungee)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {d.day} · {d.date}
                  </div>
                  <span className="hidden md:block font-mono text-[11px] uppercase tracking-widest text-frost/70">
                    · {d.tag}
                  </span>
                </div>
                <div className="relative font-mono text-[11px] uppercase tracking-widest text-frost/70">
                  ▸ {d.venue}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-xs font-mono text-frost/50 uppercase tracking-widest text-center">
            ▸ real schedule items (times, titles, speakers) would render below each banner, unchanged from current layout
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 border-t border-white/10 relative">
        <div className="absolute inset-0" style={grainSubtle} />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4"
            style={{ color: RED }}
          >
            ● what the hybrid changes
          </div>
          <ul className="space-y-3 text-sm text-frost/80 leading-relaxed">
            <li>▸ Hero stays legible: current video backdrop, Bungee-cyan-glow tagline, red tape &quot;Next Stop&quot; sticker. Added grain overlay.</li>
            <li>▸ Weekend Programming goes full zine: cream paper, hard red/cyan shadow offsets, tape stickers at top, red/cyan number stamps rotated. Grain on every card.</li>
            <li>▸ Schedule day banners stay in their legible format but get a grain overlay and Bungee cyan-glow display type.</li>
            <li>▸ Grain layered across every major section at two intensities — subtle (overlay mode) on hero + schedule, heavy (multiply mode) on zine cards.</li>
            <li>▸ Bungee font used for all display headlines, programming tile titles, day banners, and CTA chips.</li>
            <li>▸ Keeps the clean hero for first impressions + readability. Delivers full poster/collage energy where the eye lingers (programming tiles).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
