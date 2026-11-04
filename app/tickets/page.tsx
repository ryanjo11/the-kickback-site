import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Community from "../components/Community";

export const metadata = {
  title: "The Kickback Tickets · Atlanta · Dec 11–13",
  description:
    "Ticket tiers and pricing for The Kickback Atlanta, December 11–13, 2026. Free opening-night skate session, general admission, VIP, and full-experience passes.",
};

type Tier = {
  code: string;
  name: string;
  price: string;
  window: string;
  includes: string[];
  accent: "ice" | "hot" | "royal";
  best?: boolean;
};

type Day = {
  label: string;
  code: string;
  day: string;
  date: string;
  venue: string;
  status: string;
  tiers: Tier[];
};

const days: Day[] = [
  {
    label: "Opening Night",
    code: "ATL_DAY.01",
    day: "Fri",
    date: "Dec 11, 2026",
    venue: "LVRN Studios",
    status: "in progress",
    tiers: [
      {
        code: "T-01",
        name: "Opening Night · LVRN Studios",
        price: "$10",
        window: "6:00 PM – 11:00 PM",
        includes: [
          "Doors + all Opening Night programming",
          "Industry networking",
          "Three panels + networking break",
          "Open mixer 9pm – 11pm",
        ],
        accent: "ice",
      },
    ],
  },
  {
    label: "Night Two",
    code: "ATL_DAY.02",
    day: "Sat",
    date: "Dec 12, 2026",
    venue: "SkateATL",
    status: "free entry",
    tiers: [
      {
        code: "T-02",
        name: "Skate Park Session",
        price: "FREE",
        window: "6:00 PM – 11:00 PM",
        includes: [
          "Open skate session",
          "Best Trick Competition · $1,000 prize pool",
          "DJ set all night",
          "RSVP required for entry",
        ],
        accent: "royal",
      },
    ],
  },
  {
    label: "Night Three",
    code: "ATL_DAY.03",
    day: "Sun",
    date: "Dec 13, 2026",
    venue: "The Tabernacle · Downtown Atlanta",
    status: "in progress",
    tiers: [
      {
        code: "T-03",
        name: "Daytime Only",
        price: "$10",
        window: "11:00 AM – 6:00 PM",
        includes: [
          "All daytime programming",
          "Esports showcases (High School + HBCU)",
          "Creator All-Star Game",
          "Anime Wild 'N Out + Karaoke",
          "All-day gaming lounge, cosplay, vendors, headshots",
        ],
        accent: "ice",
      },
      {
        code: "T-04",
        name: "Concert · GA",
        price: "$30",
        window: "7:00 PM – 11:00 PM",
        includes: [
          "General admission concert access",
          "Headline set + emerging talent",
          "Gaming lounge access",
          "Creator headshots",
          "Streetwear + sneaker vendors",
        ],
        accent: "hot",
      },
      {
        code: "T-05",
        name: "Concert · VIP",
        price: "$40",
        window: "7:00 PM – 11:00 PM",
        includes: [
          "VIP concert access",
          "Elevated viewing area",
          "Headline set + emerging talent",
          "Gaming lounge access",
          "Creator headshots",
          "Streetwear + sneaker vendors",
        ],
        accent: "hot",
      },
      {
        code: "T-06",
        name: "Full Experience",
        price: "$37",
        window: "11:00 AM – 11:00 PM",
        includes: [
          "All daytime programming",
          "Concert · GA",
          "Save $8 vs. buying separate",
        ],
        accent: "royal",
        best: true,
      },
      {
        code: "T-07",
        name: "Full & Concert VIP",
        price: "$45",
        window: "11:00 AM – 11:00 PM",
        includes: [
          "All daytime programming",
          "Concert · VIP access",
          "Elevated viewing area",
          "Best value for the whole day",
        ],
        accent: "royal",
      },
    ],
  },
];

function accentMeta(a: Tier["accent"]) {
  if (a === "hot")
    return {
      hex: "#FF3E88",
      text: "text-[#FF3E88]",
      border: "border-[#FF3E88]/60",
      bg: "bg-[#FF3E88]/10",
    };
  if (a === "royal")
    return {
      hex: "#8FCCF5",
      text: "text-ice",
      border: "border-ice/60",
      bg: "bg-ice/10",
    };
  return {
    hex: "#BDE0F8",
    text: "text-ice",
    border: "border-ice/60",
    bg: "bg-ice/10",
  };
}

function DayPanel({ d, wide = false }: { d: Day; wide?: boolean }) {
  return (
    <div
      className="relative border-2 border-ice/70 rounded-none p-5 md:p-7 overflow-hidden bg-ink"
      style={{
        background: "linear-gradient(135deg, #050813 0%, #000 100%)",
      }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #BDE0F8 0px, #BDE0F8 1px, transparent 1px, transparent 3px)",
        }}
      />
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-ice pointer-events-none" />
      <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-ice pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-ice pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-ice pointer-events-none" />

      {/* HUD Header */}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-5 border-b border-ice/30 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-ice animate-pulse" />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ice">
              ● {d.label} · TICKET TIERS
            </div>
            <div className="font-display text-2xl md:text-3xl uppercase text-frost mt-0.5 leading-none">
              {d.day} · {d.date.split(",")[0]}
            </div>
            <div className="font-mono text-[10px] text-frost/60 uppercase tracking-[0.25em] mt-1">
              &gt; {d.venue}
            </div>
          </div>
        </div>
        <div className="text-right font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="text-frost/40">SLOT</div>
          <div className="text-ice">{d.code}</div>
          <div className="text-[#FF3E88] mt-2">● {d.status}</div>
        </div>
      </div>

      {/* Tier list */}
      <div
        className={
          wide
            ? "relative z-10 grid md:grid-cols-2 gap-3"
            : "relative z-10 space-y-3"
        }
      >
        {d.tiers.map((t) => {
          const a = accentMeta(t.accent);
          const clip =
            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))";
          return (
            <div
              key={t.code}
              className={`relative border ${a.border} ${a.bg} p-4 md:p-5 group hover:bg-white/[0.03] transition-colors ${
                wide && t.best ? "md:col-span-2" : ""
              }`}
              style={{ clipPath: clip }}
            >
              {t.best && (
                <div
                  className="absolute -top-0 right-4 font-mono text-[9px] uppercase tracking-[0.3em] px-2 py-1 bg-ice text-ink font-bold"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 6px))",
                  }}
                >
                  ★ BEST VALUE
                </div>
              )}

              <div className="grid grid-cols-12 gap-3 items-start">
                {/* Left: tier code + name + window */}
                <div className="col-span-12 md:col-span-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-mono text-[9px] uppercase tracking-[0.3em]"
                      style={{ color: a.hex }}
                    >
                      {t.code}
                    </span>
                    <span className="font-mono text-[9px] text-frost/40 uppercase tracking-[0.25em]">
                      · {t.window}
                    </span>
                  </div>
                  <div className="font-display text-2xl md:text-3xl uppercase leading-none">
                    {t.name}
                  </div>
                </div>

                {/* Right: price */}
                <div className="col-span-12 md:col-span-6 flex md:justify-end items-baseline gap-2">
                  <span
                    className="font-mono text-[9px] uppercase tracking-[0.3em]"
                    style={{ color: a.hex }}
                  >
                    price
                  </span>
                  <span
                    className="font-display text-4xl md:text-5xl leading-none"
                    style={{ color: a.hex, letterSpacing: "-0.02em" }}
                  >
                    {t.price}
                  </span>
                </div>
              </div>

              {/* Includes */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-frost/40 mb-2">
                  includes
                </div>
                <ul className="space-y-1">
                  {t.includes.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-xs md:text-sm text-frost/80 font-mono leading-snug"
                    >
                      <span style={{ color: a.hex }} className="shrink-0">
                        ▸
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer HUD */}
      <div className="relative z-10 mt-5 pt-3 border-t border-ice/30 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.3em]">
        <div className="flex items-center gap-4 text-frost/50">
          <span>
            <span className="text-ice">[▲▼]</span> compare tiers
          </span>
          <span>
            <span className="text-ice">[A]</span> select
          </span>
        </div>
        <div className="text-[#FF3E88] flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#FF3E88] animate-pulse" />
          ON SALE SOON
        </div>
      </div>
    </div>
  );
}

/* -------------------- TICKET MATRIX -------------------- */

type MatrixTier = {
  code: string;
  day: "FRI" | "SAT" | "SUN";
  dayDate: string;
  name: string;
  price: string;
  window: string;
  accent: "ice" | "hot" | "royal";
  best?: boolean;
  features: Record<string, boolean>;
};

const matrixTiers: MatrixTier[] = [
  {
    code: "T-01", day: "FRI", dayDate: "12.11", name: "Opening Night", price: "$10",
    window: "6p–11p", accent: "ice",
    features: { lvrn: true },
  },
  {
    code: "T-02", day: "SAT", dayDate: "12.12", name: "Skate Park", price: "FREE",
    window: "6p–11p", accent: "royal",
    features: { skate: true },
  },
  {
    code: "T-03", day: "SUN", dayDate: "12.13", name: "Daytime", price: "$10",
    window: "11a–6p", accent: "ice",
    features: { daytime: true, gamingLounge: true, headshots: true, vendors: true },
  },
  {
    code: "T-04", day: "SUN", dayDate: "12.13", name: "Concert · GA", price: "$30",
    window: "7p–11p", accent: "hot",
    features: { gamingLounge: true, headshots: true, vendors: true, concertGA: true },
  },
  {
    code: "T-05", day: "SUN", dayDate: "12.13", name: "Concert · VIP", price: "$40",
    window: "7p–11p", accent: "hot",
    features: { gamingLounge: true, headshots: true, vendors: true, concertVIP: true },
  },
  {
    code: "T-06", day: "SUN", dayDate: "12.13", name: "Full Experience", price: "$37",
    window: "11a–11p", accent: "royal", best: true,
    features: { daytime: true, gamingLounge: true, headshots: true, vendors: true, concertGA: true },
  },
  {
    code: "T-07", day: "SUN", dayDate: "12.13", name: "Full & Concert VIP", price: "$45",
    window: "11a–11p", accent: "hot",
    features: { daytime: true, gamingLounge: true, headshots: true, vendors: true, concertVIP: true },
  },
];

const matrixFeatures: { key: string; label: string; note?: string }[] = [
  { key: "lvrn", label: "Opening Night · LVRN Studios", note: "Fri · Panels + Industry Mixer" },
  { key: "skate", label: "Skate Park Session · SkateATL", note: "Sat · Best Trick $1K + DJ" },
  { key: "daytime", label: "Sun Daytime Programming", note: "DJ sets · Creator All-Star · Anime Debates · Cosplay · Bae Brigade" },
  { key: "gamingLounge", label: "Gaming Lounge Access", note: "All-day open play" },
  { key: "headshots", label: "Creator Headshots" },
  { key: "vendors", label: "Streetwear + Sneaker Vendors" },
  { key: "concertGA", label: "Concert · GA Floor", note: "Sun · Headline + emerging talent" },
  { key: "concertVIP", label: "Concert · VIP + Elevated View", note: "Sun · headline access" },
];

function tierColor(t: MatrixTier) {
  if (t.accent === "hot") return "#FF3E88";
  return "#BDE0F8";
}

function TicketMatrixMobile() {
  return (
    <div className="md:hidden space-y-4">
      {matrixTiers.map((t) => {
        const color = tierColor(t);
        const includedFeatures = matrixFeatures.filter((f) => t.features[f.key]);
        return (
          <div
            key={t.code}
            className={`border-2 bg-black p-4 ${
              t.best ? "border-ice bg-ice/[0.04]" : "border-ice/30"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
              <div>
                <div
                  className="font-mono text-[9px] uppercase tracking-widest mb-1"
                  style={{ color }}
                >
                  ● {t.day} · {t.dayDate} · {t.code}
                </div>
                <div className="font-display text-xl uppercase leading-none">
                  {t.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-frost/50 mt-1">
                  {t.window}
                </div>
              </div>
              <div
                className="font-display text-3xl leading-none shrink-0"
                style={{ color, letterSpacing: "-0.02em" }}
              >
                {t.price}
              </div>
            </div>

            {/* Best value tag */}
            {t.best && (
              <div className="pt-3 font-mono text-[9px] uppercase tracking-widest text-ice font-bold">
                ★ BEST VALUE
              </div>
            )}

            {/* Includes */}
            <div className="pt-3">
              <div className="font-mono text-[9px] uppercase tracking-widest text-frost/40 mb-2">
                includes
              </div>
              <ul className="space-y-1.5">
                {includedFeatures.map((f) => (
                  <li
                    key={f.key}
                    className="flex items-start gap-2 text-xs text-frost/80 font-mono leading-snug"
                  >
                    <span style={{ color }} className="shrink-0">
                      ✓
                    </span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status */}
            <div className="pt-3 mt-3 border-t border-white/10">
              {t.price === "FREE" ? (
                <span className="font-mono text-[9px] uppercase tracking-widest text-ice">
                  ● RSVP SOON
                </span>
              ) : (
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF3E88]">
                  ● ON SALE SOON
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TicketMatrix() {
  return (
    <div className="hidden md:block border-2 border-ice/40 overflow-x-auto bg-black">
      <table className="w-full border-collapse" style={{ minWidth: "860px" }}>
        <thead>
          {/* Day row (grouping header) */}
          <tr className="bg-ink-soft">
            <th className="p-3 border-r border-ice/40 sticky left-0 bg-ink-soft text-left align-bottom min-w-[220px]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-frost/50">
                feature / tier
              </div>
            </th>
            {matrixTiers.map((t) => {
              const color = tierColor(t);
              return (
                <th
                  key={t.code}
                  className={`p-3 border-r border-white/10 align-top text-center ${
                    t.best ? "bg-ice/[0.07]" : ""
                  }`}
                  style={{ minWidth: "110px" }}
                >
                  {/* Day tag */}
                  <div
                    className="font-mono text-[9px] uppercase tracking-widest mb-2"
                    style={{ color }}
                  >
                    ● {t.day} · {t.dayDate}
                  </div>
                  {/* Tier code */}
                  <div className="font-mono text-[9px] uppercase tracking-widest text-frost/40">
                    {t.code}
                  </div>
                  {/* Name */}
                  <div className="font-display text-sm uppercase mt-1 leading-tight text-frost">
                    {t.name}
                  </div>
                  {/* Window */}
                  <div className="font-mono text-[9px] uppercase tracking-widest text-frost/50 mt-1">
                    {t.window}
                  </div>
                  {/* Price */}
                  <div
                    className="font-display text-3xl md:text-4xl leading-none mt-2"
                    style={{ color, letterSpacing: "-0.02em" }}
                  >
                    {t.price}
                  </div>
                  {t.best && (
                    <div className="font-mono text-[9px] uppercase tracking-widest text-ice mt-2 font-bold">
                      ★ BEST VALUE
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {matrixFeatures.map((f, i) => (
            <tr key={f.key} className="border-t border-white/5">
              <td className="p-3 border-r border-ice/40 sticky left-0 bg-black align-top">
                <div className="font-display text-sm uppercase leading-tight text-frost">
                  {f.label}
                </div>
                {f.note && (
                  <div className="font-mono text-[10px] uppercase tracking-wider text-frost/40 mt-0.5">
                    ▸ {f.note}
                  </div>
                )}
              </td>
              {matrixTiers.map((t) => {
                const color = tierColor(t);
                const has = t.features[f.key];
                return (
                  <td
                    key={t.code}
                    className={`p-3 border-r border-white/10 text-center ${
                      t.best ? "bg-ice/[0.03]" : ""
                    }`}
                  >
                    {has ? (
                      <span
                        className="font-mono text-base"
                        style={{ color }}
                      >
                        ✓
                      </span>
                    ) : (
                      <span className="font-mono text-sm text-frost/15">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          {/* Bottom row — RSVP / On Sale status */}
          <tr className="border-t-2 border-ice/30 bg-ink-soft">
            <td className="p-3 border-r border-ice/40 sticky left-0 bg-ink-soft">
              <div className="font-mono text-[10px] uppercase tracking-widest text-frost/60">
                status
              </div>
            </td>
            {matrixTiers.map((t) => (
              <td
                key={t.code}
                className={`p-3 border-r border-white/10 text-center ${
                  t.best ? "bg-ice/[0.07]" : ""
                }`}
              >
                {t.price === "FREE" ? (
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ice">
                    ● RSVP SOON
                  </span>
                ) : (
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF3E88]">
                    ● ON SALE SOON
                  </span>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function TicketsPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost">
        {/* Page intro — photo-led */}
        <section className="relative pt-32 pb-16 md:pt-52 md:pb-28 overflow-hidden grain min-h-[55vh] md:min-h-[65vh] flex items-center">
          <Image
            src="/past-events/cyw-kickback-411.jpg"
            alt="Past Kickback crowd"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full">
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="text-ice">● REC</span>
              <span className="text-frost/50">/</span>
              <span className="text-frost/70">atlanta · dec 11–13</span>
              <span className="text-frost/50">/</span>
              <span className="text-[#FF3E88]">on sale soon</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              The <span className="text-ice">tickets.</span>
            </h1>
            <p className="mt-6 max-w-xl text-frost/70 leading-relaxed">
              Three nights. Seven ways to pull up. Pricing is in progress —
              subscribe for the presale drop.
            </p>
          </div>
        </section>

        {/* Comparison matrix */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="w-1.5 h-1.5 bg-ice rounded-full animate-pulse" />
              <span className="text-ice">compare all tiers</span>
              <span className="text-frost/40">·</span>
              <span className="text-frost/60">7 ways in · 3 nights</span>
            </div>

            <TicketMatrixMobile />
            <TicketMatrix />

            {/* Value note */}
            <div className="mt-10 border border-ice/30 bg-ice/[0.03] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ice mb-2">
                ● how it stacks
              </div>
              <ul className="font-mono text-xs text-frost/70 space-y-1 leading-relaxed">
                <li>
                  <span className="text-ice">▸</span> Daytime + Concert GA
                  bought separately: <span className="text-frost/50">$40</span>{" "}
                  → Full Experience is{" "}
                  <span className="text-ice">$37 · save $3</span>
                </li>
                <li>
                  <span className="text-ice">▸</span> Daytime + Concert VIP
                  bought separately: <span className="text-frost/50">$50</span>{" "}
                  → Full & Concert VIP is{" "}
                  <span className="text-ice">$45 · save $5</span>
                </li>
              </ul>
            </div>

            {/* CTA row */}
            <div className="text-center mt-12 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/schedule"
                className="btn-ghost inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wide"
              >
                See the schedule
              </Link>
              <Link
                href="/atlanta"
                className="btn-ghost inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wide"
              >
                ← Back to Atlanta
              </Link>
            </div>
          </div>
        </section>

        {/* Waitlist / community */}
        <Community />
      </main>
      <Footer />
    </>
  );
}
