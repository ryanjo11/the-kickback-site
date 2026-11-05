import Image from "next/image";
import Link from "next/link";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

export const metadata = {
  title: "Brand Preview B · Medium",
  robots: "noindex, nofollow",
};

/* --------------- Design tokens for Preview B ---------------
 * MEDIUM treatment.
 * - Swap hot pink (#FF3E88) → poster red (#D9252A)
 * - Add cyan outer glow on display headlines
 * - Red tape/sticker treatment on key status labels
 * - Keep existing site layout, keep video hero
 * - No layout rebuild, no torn-tape zine cards
 */

const RED = "#D9252A";
const CYAN = "#4DD8F0";

const weekendTiles = [
  { num: "01", title: "Conversations & Fireside Chats", photo: "/PanelsFireside.JPG", blurb: "Culture-driven panels on streaming, anime, fashion, and sports." },
  { num: "02", title: "Creator Lounges & Mixers", photo: "/creator lounge mixer .JPG", blurb: "Intimate rooms and after-hours mixers." },
  { num: "03", title: "Gaming Tournament & Lounge", photo: "/past-events/cyw-kickback-293.jpg", blurb: "Open play stations and a ProAm tournament." },
  { num: "04", title: "Concert Experience", photo: "/past-events/gherbo.jpg", blurb: "A-list touring artists and emerging talent." },
  { num: "05", title: "Skate Jam", photo: "/SkateATL.avif", blurb: "Open skate jam + $1,000 best trick competition." },
  { num: "06", title: "DJ Sets", photo: "/DJ Sets .JPG", blurb: "DJ sets running across all three nights." },
  { num: "07", title: "Cosplay Competition", photo: "/CosplayCompetition.JPG", blurb: "Mainstage cosplay competition at The Tabernacle." },
  { num: "08", title: "Bae Brigade", photo: "/BaeBrigade.jpeg", blurb: "A Sunday mainstage moment." },
  { num: "09", title: "Streetwear & Vendor Market", photo: "/VendorMarketplace .JPG", blurb: "All-day streetwear + sneaker vendor marketplace." },
];

// Cyan-glow display headline style
const cyanGlow: React.CSSProperties = {
  textShadow: `0 0 1px ${CYAN}, 0 0 4px ${CYAN}, 0 0 12px ${CYAN}66, 0 0 24px ${CYAN}33`,
  color: "#f5f1e3",
};

export default function PreviewBrandB() {
  return (
    <main className={`${bungee.variable} bg-ink text-frost min-h-screen`}>
      {/* Preview banner */}
      <div className="sticky top-0 z-50 bg-ink border-b-2 border-white/15 px-6 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: RED }} />
          <span style={{ color: RED }}>preview · brand B · medium</span>
          <span className="text-frost/40 hidden md:inline">
            // red swap + cyan glow · keeps current layout
          </span>
        </div>
        <Link
          href="/preview-brand-c"
          className="text-frost/60 hover:text-frost border border-white/20 px-3 py-1.5"
        >
          See preview C →
        </Link>
      </div>

      {/* HERO */}
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

          {/* NEXT STOP chip — red tape style */}
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
              style={{ fontFamily: "var(--font-bungee)", color: "#f5f1e3" }}
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
              style={{ background: "#f5f1e3", boxShadow: `0 0 0 2px ${RED}` }}
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

      {/* WEEKEND PROGRAMMING */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div
                className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3"
                style={{ color: RED }}
              >
                ● pillars / 09
              </div>
              <h2
                className="text-5xl md:text-7xl leading-[0.95] uppercase"
                style={{
                  ...cyanGlow,
                  fontFamily: "var(--font-bungee)",
                  letterSpacing: "-0.02em",
                }}
              >
                Weekend Programming
              </h2>
            </div>
            <p className="text-frost/70 max-w-md text-base md:text-lg">
              Every Kickback runs on these pillars, designed so partners,
              creators, and fans can plug in wherever the energy is hottest.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-4 pb-8 md:px-4">
            {weekendTiles.map((t, i) => {
              const rotate = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "rotate-2", "-rotate-2", "-rotate-2", "rotate-3", "-rotate-3"][i];
              return (
                <article
                  key={t.num}
                  className={`${rotate} hover:rotate-0 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="bg-[#f5f1e3] text-ink p-3 pb-5 shadow-2xl">
                    <div
                      className="relative aspect-square overflow-hidden border-2"
                      style={{ borderColor: i % 2 === 0 ? RED : CYAN }}
                    >
                      <Image
                        src={t.photo}
                        alt={t.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 50vw"
                      />
                    </div>
                    <div className="mt-3 px-1">
                      <div className="font-mono text-[9px] text-ink/50 uppercase tracking-[0.25em]">
                        {t.num} / 09
                      </div>
                      <div
                        className="text-base md:text-lg uppercase leading-tight text-ink mt-0.5"
                        style={{ fontFamily: "var(--font-bungee)" }}
                      >
                        {t.title}
                      </div>
                      <div className="hidden md:block text-[10px] text-ink/60 mt-1 leading-snug line-clamp-3">
                        {t.blurb}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCHEDULE DAY BANNER PREVIEW */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6"
            style={{ color: RED }}
          >
            ● schedule preview · day banners
          </div>

          <div className="space-y-6">
            {[
              { day: "FRI", date: "Dec 11", venue: "LVRN Studios", color: RED },
              { day: "SAT", date: "Dec 12", venue: "SkateATL", color: CYAN },
              { day: "SUN", date: "Dec 13", venue: "The Tabernacle · Downtown Atlanta", color: RED },
            ].map((d) => (
              <div
                key={d.day}
                className="border-2 p-6 flex flex-wrap items-center justify-between gap-4"
                style={{
                  borderColor: d.color,
                  background: `linear-gradient(90deg, ${d.color}25 0%, transparent 60%)`,
                }}
              >
                <div className="flex items-center gap-4">
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
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-frost/70">
                  ▸ {d.venue}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-xs font-mono text-frost/50 uppercase tracking-widest">
            ▸ real schedule items (times, titles, speakers) would render below each banner — unchanged from current layout
          </div>
        </div>
      </section>

      {/* NOTES / what this preview changes */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4"
            style={{ color: RED }}
          >
            ● what preview B changes
          </div>
          <ul className="space-y-3 text-sm text-frost/80 leading-relaxed">
            <li>▸ Hot pink (#FF3E88) replaced with poster red (#D9252A) everywhere it accented</li>
            <li>▸ Display headlines now use Bungee font + cyan outer glow — same chunky stencil feel as your posters</li>
            <li>▸ &quot;Next Stop&quot; chip restyled as a red tape sticker with pure red &quot;Tickets Soon&quot; badge</li>
            <li>▸ Weekend Programming polaroids now use cream paper (#f5f1e3) matching poster card color, alternating red/cyan photo borders</li>
            <li>▸ Schedule day banners use red + cyan accents with the same cyan glow display type</li>
            <li>▸ Layout, spacing, structure — all unchanged. Mobile-safe. Minimal risk.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
