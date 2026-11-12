import Link from "next/link";

/**
 * Home-page tickets block. 5 tiers rendered as cream paper cards with
 * hard red/cyan shadows. Each card links directly to its posh.vip or
 * universe.com destination (new tab). Lighter than the /tickets matrix,
 * but gives home visitors the full offer at a glance.
 */

type Tier = {
  day: string;
  dayDate: string;
  code: string;
  name: string;
  price: string;
  window: string;
  venue: string;
  accent: "ice" | "hot";
  ticketUrl?: string;
};

const tiers: Tier[] = [
  {
    day: "FRI",
    dayDate: "12.11",
    code: "T-01",
    name: "Creator State of the Union",
    price: "$10",
    window: "6p–11p",
    venue: "LVRN Studios",
    accent: "ice",
    ticketUrl: "https://posh.vip/e/the-kickback-creator-state-of-the-union",
  },
  {
    day: "SAT",
    dayDate: "12.12",
    code: "T-02",
    name: "The Kickback Skate Jam",
    price: "Free with RSVP",
    window: "6p–11p",
    venue: "SkateATL",
    accent: "hot",
    ticketUrl: "https://posh.vip/e/the-kickback-skate-jam",
  },
  {
    day: "SUN",
    dayDate: "12.13",
    code: "T-03",
    name: "The Kickback Daytime Programming",
    price: "Free with RSVP",
    window: "11a–6p",
    venue: "The Tabernacle",
    accent: "ice",
    ticketUrl: "https://www.universe.com/events/the-kickback-tickets-PC17LZ",
  },
  {
    day: "SUN",
    dayDate: "12.13",
    code: "T-04",
    name: "The Kickback Concert · GA",
    price: "$30",
    window: "7p–11p",
    venue: "The Tabernacle",
    accent: "hot",
  },
  {
    day: "SUN",
    dayDate: "12.13",
    code: "T-05",
    name: "The Kickback Concert · VIP",
    price: "$40",
    window: "7p–11p",
    venue: "The Tabernacle",
    accent: "hot",
  },
];

function tierColor(t: Tier) {
  return t.accent === "hot" ? "#D9252A" : "#4DD8F0";
}

export default function HomeTickets() {
  return (
    <section
      id="tickets-preview"
      className="relative py-20 md:py-28 border-t-4 border-red grain-subtle bg-ink"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">
              ● tickets · on sale · fri + sat live
            </div>
            <h2 className="font-chunk cyan-glow text-5xl md:text-6xl leading-[0.95] uppercase">
              Pull up to <span className="text-cyan">the kickback.</span>
            </h2>
          </div>
          <Link
            href="/tickets"
            className="btn-ghost inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide shrink-0"
          >
            See full breakdown →
          </Link>
        </div>

        {/* 5 paper tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {tiers.map((t) => {
            const color = tierColor(t);
            const isRed = t.accent === "hot";
            const isFree = t.price.includes("Free");
            return (
              <div
                key={t.code}
                className={`relative ${
                  isRed ? "paper-cyan-shadow" : "paper-red-shadow"
                } bg-cream text-ink p-4 md:p-5 flex flex-col gap-3`}
              >
                {/* Tape sticker */}
                <div
                  className={`${
                    isRed ? "tape-cyan" : "tape-red"
                  } absolute -top-3 left-4 rotate-2`}
                  aria-hidden
                />

                {/* Eyebrow */}
                <div
                  className="font-mono text-[9px] uppercase tracking-widest font-bold"
                  style={{ color }}
                >
                  ● {t.day} · {t.dayDate}
                </div>

                {/* Name */}
                <div className="font-chunk text-base md:text-lg uppercase leading-[1.1] text-ink">
                  {t.name}
                </div>

                {/* Window + venue */}
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/55 leading-snug">
                  {t.window} · {t.venue}
                </div>

                {/* Price */}
                <div
                  className={`font-chunk leading-[1.05] mt-1 ${
                    isFree ? "text-lg" : "text-3xl"
                  }`}
                  style={{ color }}
                >
                  {t.price}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-3 border-t border-ink/20">
                  {t.ticketUrl ? (
                    <a
                      href={t.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-cream"
                      style={{ background: color }}
                    >
                      {isFree ? "RSVP" : "Buy Tickets"} →
                    </a>
                  ) : (
                    <span className="font-mono text-[9px] uppercase tracking-widest text-red font-bold">
                      ● ON SALE SOON
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
