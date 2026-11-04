import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Community from "../components/Community";
import Image from "next/image";

export const metadata = {
  title: "The Kickback Schedule · Atlanta · Dec 11–13",
  description:
    "The Kickback Atlanta run of show for December 11, 12, and 13, 2026. Opening-night skate session, panels, esports, creator programming, and a concert experience across three nights.",
};

type Speaker = {
  role: "moderator" | "speaker";
  name: string;
  title: string;
  company: string;
};

type Kind =
  | "panel"
  | "tournament"
  | "creator"
  | "concert"
  | "logistics"
  | "mixer";

type ScheduleItem = {
  time: string;
  timeMono: string;
  title: string;
  note?: string;
  kind: Kind;
  viewers?: string;
  speakers?: Speaker[];
};

const tbaPanel: Speaker[] = [
  { role: "moderator", name: "Moderator TBA", title: "Role TBA", company: "Company TBA" },
  { role: "speaker", name: "Speaker TBA", title: "Role TBA", company: "Company TBA" },
  { role: "speaker", name: "Speaker TBA", title: "Role TBA", company: "Company TBA" },
  { role: "speaker", name: "Speaker TBA", title: "Role TBA", company: "Company TBA" },
];

type ParallelTrack = {
  code: string;
  label: string;
  location: string;
  note: string;
  items: ScheduleItem[];
};

type Day = {
  label: string;
  code: string;
  day: string;
  date: string;
  venue: string;
  allDay?: string[];
  items: ScheduleItem[];
  parallel?: ParallelTrack;
};

const days: Day[] = [
  {
    label: "Opening Night",
    code: "ATL_DAY.01",
    day: "Fri",
    date: "Dec 11, 2026",
    venue: "LVRN Studios",
    items: [
      { time: "6:00 PM", timeMono: "6:00 PM", title: "Creator State of the Union", kind: "logistics" },
      {
        time: "6:00 – 7:00 PM",
        timeMono: "6:00 PM",
        title: "Industry Networking",
        note: "Cross-industry networking across entertainment + gaming.",
        kind: "mixer",
        viewers: "500",
      },
      {
        time: "7:00 – 7:30 PM",
        timeMono: "7:00 PM",
        title: "Where Worlds Collide",
        note: "Speakers to be announced soon.",
        kind: "panel",
        viewers: "1.2k",
        speakers: tbaPanel,
      },
      {
        time: "7:30 – 8:00 PM",
        timeMono: "7:30 PM",
        title: "The Creator Economy Is the Culture",
        note: "Speakers to be announced soon.",
        kind: "panel",
        viewers: "1.8k",
        speakers: tbaPanel,
      },
      {
        time: "8:00 – 8:30 PM",
        timeMono: "8:00 PM",
        title: "Networking Break",
        kind: "logistics",
      },
      {
        time: "8:30 – 9:00 PM",
        timeMono: "8:30 PM",
        title: "Made in Atlanta",
        note: "Speakers to be announced soon.",
        kind: "panel",
        viewers: "2.4k",
        speakers: tbaPanel,
      },
      {
        time: "9:00 – 11:00 PM",
        timeMono: "9:00 PM",
        title: "Open Mixer + Networking",
        kind: "mixer",
        viewers: "3.5k",
      },
    ],
  },
  {
    label: "Night Two",
    code: "ATL_DAY.02",
    day: "Sat",
    date: "Dec 12, 2026",
    venue: "SkateATL",
    items: [
      {
        time: "6:00 PM",
        timeMono: "6:00 PM",
        title: "Gates Open",
        note: "Pull up to the park. Skate warm-ups, DJ booth live, vibes building.",
        kind: "logistics",
      },
      {
        time: "6:00 – 11:00 PM",
        timeMono: "6:00 PM",
        title: "DJ Set · All Night",
        note: "DJ keeping the park loud from gates to close. Lineup announcing soon.",
        kind: "concert",
        viewers: "2.1k",
      },
      {
        time: "6:00 – 8:00 PM",
        timeMono: "6:00 PM",
        title: "Skate Jam",
        note: "Open-session skate jam to open the night. All skill levels welcome. Bring your board.",
        kind: "tournament",
        viewers: "3.5k",
      },
      {
        time: "8:00 – 9:30 PM",
        timeMono: "8:00 PM",
        title: "Best Trick Competition · $1,000 Prize",
        note: "Open-format best trick throwdown. Skaters go head-to-head for the $1K prize pool. Judges TBA.",
        kind: "tournament",
        viewers: "8.5k",
      },
      {
        time: "9:30 – 11:00 PM",
        timeMono: "9:30 PM",
        title: "Skate Jam",
        note: "Winners announced. Open skating + DJ set runs until close. Pre-game for Sunday.",
        kind: "tournament",
        viewers: "4.2k",
      },
    ],
  },
  {
    label: "Night Three",
    code: "ATL_DAY.03",
    day: "Sun",
    date: "Dec 13, 2026",
    venue: "The Tabernacle · Downtown Atlanta",
    allDay: [
      "Open Gaming Lounge + Tournaments",
      "Cosplay Meetups",
      "Trading Card Games",
      "Streetwear + Sneaker Vendors",
      "Creator Lounge",
      "Creator Headshots",
    ],
    parallel: {
      code: "LVL_03",
      label: "Executive Room",
      location: "The Tabernacle · Third Floor",
      note: "Invite-only workshops running parallel to the mainstage. Executives, founders, and decision-makers only.",
      items: [
        {
          time: "12:30 – 1:30 PM",
          timeMono: "12:30 PM",
          title: "Executive Workshop 1: Scaling Your Business as a Creator & Creative Entrepreneur",
          note: "Host and panelists announcing soon.",
          kind: "panel",
          viewers: "invite",
        },
        {
          time: "2:30 – 3:30 PM",
          timeMono: "2:30 PM",
          title: "Executive Workshop 2: Navigating Brand Deals & Partnerships",
          note: "Host and panelists announcing soon.",
          kind: "panel",
          viewers: "invite",
        },
      ],
    },
    items: [
      {
        time: "11:00 AM",
        timeMono: "11:00 AM",
        title: "Doors Open",
        note: "Grab your wristband, hit the gaming lounge, and stake out your spot before the day kicks off.",
        kind: "logistics",
      },
      {
        time: "12:00 – 2:00 PM",
        timeMono: "12:00 PM",
        title: "DJ Sets",
        note: "DJ lineup announcing soon.",
        kind: "concert",
        viewers: "6.4k",
      },
      {
        time: "2:00 – 3:00 PM",
        timeMono: "2:00 PM",
        title: "Creator All-Star Game",
        note: "Your favorite creators pick sides and go to war on the main stage. Trash talk on, gloves off — no scripts, just gameplay.",
        kind: "creator",
        viewers: "12k",
      },
      {
        time: "3:30 – 3:45 PM",
        timeMono: "3:30 PM",
        title: "Spelman Game Jam Acknowledgement",
        note: "A live spotlight on the students behind the Spelman Game Jam — recognizing the developers, designers, and creators representing HBCU game dev.",
        kind: "creator",
        viewers: "2.5k",
      },
      {
        time: "4:00 – 4:45 PM",
        timeMono: "4:00 PM",
        title: "No Spoilers Podcast Presents: Anime Debates",
        note: "Hosted by Troop & Slim Jxmmi. Creators, cosplayers, and comics face off on stage — no script, all bars, all chaos.",
        kind: "creator",
        viewers: "8.5k",
      },
      {
        time: "5:00 – 5:30 PM",
        timeMono: "5:00 PM",
        title: "Cosplay Competition",
        note: "The main stage becomes a runway. Cosplayers battle for the crown — judges, prizes, and full-crowd energy.",
        kind: "creator",
        viewers: "22k",
      },
      {
        time: "5:30 – 6:00 PM",
        timeMono: "5:30 PM",
        title: "Bae Brigade",
        note: "Details announcing soon.",
        kind: "creator",
        viewers: "4.2k",
      },
      {
        time: "6:00 PM",
        timeMono: "6:00 PM",
        title: "Doors Close",
        note: "Daytime programming wraps. Head out, refuel, and get right — the concert experience is next.",
        kind: "logistics",
      },
      {
        time: "7:00 – 8:00 PM",
        timeMono: "7:00 PM",
        title: "Concert · DJ Set",
        note: "The room turns into a concert hall. Opening DJ set to warm the crowd for the night ahead.",
        kind: "concert",
        viewers: "15k",
      },
      {
        time: "8:00 – 11:00 PM",
        timeMono: "8:00 PM",
        title: "DJ Sets + Artist Performances",
        note: "The finale. Rotating DJ sets, headline artist performance, and emerging talent. Three hours of full-volume energy to close out The Kickback. Headline artist announcing soon.",
        kind: "concert",
        viewers: "45k",
      },
    ],
  },
];

function kindMeta(k: Kind) {
  if (k === "concert") return { hex: "#FF3E88", label: "concert" };
  if (k === "tournament") return { hex: "#BDE0F8", label: "tournament" };
  if (k === "panel") return { hex: "#BDE0F8", label: "panel" };
  if (k === "creator") return { hex: "#BDE0F8", label: "creator" };
  if (k === "mixer") return { hex: "#FF3E88", label: "mixer" };
  return { hex: "#7CC4F5", label: "off-air" };
}

/* -------------------- STREAM DECK DAY PANEL -------------------- */

function DayStream({
  d,
  wide = false,
  compact = false,
}: {
  d: Day;
  wide?: boolean;
  compact?: boolean;
}) {
  const featured =
    d.items.find((i) => i.kind === "creator") ||
    d.items.find((i) => i.kind === "concert") ||
    d.items[0];
  const rest = d.items.filter((i) => i !== featured);
  const totalViewers = d.items.reduce((acc, i) => {
    if (!i.viewers) return acc;
    const n = parseFloat(i.viewers.replace("k", "")) * (i.viewers.includes("k") ? 1000 : 1);
    return acc + (isNaN(n) ? 0 : n);
  }, 0);

  return (
    <div className="border-4 border-ice bg-black overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b-2 border-ice/40 bg-ink-soft">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-[#FF3E88] rounded-full animate-pulse" />
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF3E88] font-bold">
            {d.day.toUpperCase()} · LIVE
          </div>
          <div className="font-display text-base md:text-lg uppercase leading-none">
            {d.day} · {d.date.split(",")[0]}
          </div>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-frost/60">
          <span>◉ REC</span>
          <span className="text-ice">{Math.round(totalViewers / 1000)}k+ watching</span>
        </div>
      </div>

      {/* Venue strip */}
      <div className="px-4 py-2 border-b border-white/10 font-mono text-[10px] uppercase tracking-widest text-frost/60">
        <span className="text-ice">▸ channel</span> · {d.venue} · {d.code}
      </div>

      {/* NOW STREAMING featured block */}
      <div className="p-4 md:p-5 border-b-2 border-white/10 bg-gradient-to-r from-[#FF3E88]/15 via-[#FF3E88]/5 to-transparent">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#FF3E88] mb-2">
          <span className="w-1.5 h-1.5 bg-[#FF3E88] animate-pulse" />
          featured stream · {featured.timeMono}
        </div>
        <div className="font-display text-2xl md:text-4xl uppercase leading-none">
          {featured.title}
        </div>
        {featured.note && (
          <p className="mt-2 text-xs md:text-sm text-frost/70 leading-snug max-w-2xl">
            {featured.note}
          </p>
        )}
        <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-frost/50">{featured.time}</span>
          {featured.viewers && (
            <>
              <span className="text-frost/30">·</span>
              <span className="text-ice">◉ {featured.viewers} viewers</span>
            </>
          )}
          <span className="text-frost/30">·</span>
          <span style={{ color: kindMeta(featured.kind).hex }}>
            ● {kindMeta(featured.kind).label}
          </span>
        </div>
      </div>

      {/* All-day chips */}
      {d.allDay && d.allDay.length > 0 && (
        <div className="px-4 py-3 border-b border-white/10 bg-ice/[0.03]">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ice mb-2">
            ◉ 24/7 channels · doors → close
          </div>
          <div className="flex flex-wrap gap-1.5">
            {d.allDay.map((a) => (
              <span
                key={a}
                className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-ice/40 text-ice/90 bg-ice/[0.04]"
              >
                #{a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* UP NEXT list */}
      <div className="px-4 py-3 border-b border-white/10 bg-ink-soft/50 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-frost/70">
          ▸ up next / schedule
        </div>
        {wide && (
          <div className="font-mono text-[10px] uppercase tracking-widest text-ice">
            {rest.length} slots
          </div>
        )}
      </div>
      <ul
        className={
          wide
            ? "grid md:grid-cols-2 md:divide-x md:divide-white/10 divide-y md:divide-y-0 border-b border-white/10"
            : "divide-y divide-white/10"
        }
      >
        {rest.map((item, i) => {
          const meta = kindMeta(item.kind);
          return (
            <li
              key={i}
              className="grid grid-cols-12 gap-3 items-start px-4 py-3 md:py-3.5 hover:bg-white/[0.02] group cursor-pointer"
            >
              {/* Time */}
              <div className="col-span-3 md:col-span-2 font-mono text-xs md:text-sm text-ice tabular-nums pt-0.5">
                {item.timeMono}
              </div>

              {/* Title + note */}
              <div className="col-span-6 md:col-span-7">
                <div className="font-display text-base md:text-lg uppercase leading-tight">
                  {item.title}
                </div>
                {item.note && !wide && (
                  <div className="hidden md:block text-[11px] text-frost/55 mt-0.5 font-mono leading-snug">
                    {item.note}
                  </div>
                )}
                {item.note && wide && (
                  <div className="hidden md:block text-[11px] text-frost/55 mt-0.5 font-mono leading-snug line-clamp-1 group-hover:line-clamp-none">
                    {item.note}
                  </div>
                )}
                {item.speakers && item.speakers.length > 0 && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.speakers.map((s, si) => (
                      <div
                        key={si}
                        className={`border p-2.5 ${
                          s.role === "moderator"
                            ? "border-ice/50 bg-ice/[0.06]"
                            : "border-white/10 bg-ink/40"
                        }`}
                      >
                        <div
                          className={`font-mono text-[9px] uppercase tracking-[0.25em] mb-1 ${
                            s.role === "moderator" ? "text-ice" : "text-frost/40"
                          }`}
                        >
                          {s.role === "moderator" ? "◉ mod" : "○ speaker"}
                        </div>
                        <div className="font-display text-xs uppercase leading-tight text-frost">
                          {s.name}
                        </div>
                        <div className="text-[10px] text-frost/60 mt-0.5 leading-tight font-mono">
                          {s.title}
                        </div>
                        <div
                          className={`text-[10px] mt-0.5 leading-tight font-mono ${
                            s.role === "moderator" ? "text-ice/70" : "text-frost/50"
                          }`}
                        >
                          {s.company}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Viewers + kind */}
              <div className="col-span-3 flex flex-col items-end gap-1 pt-0.5">
                {item.viewers && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-frost/60">
                    ◉ {item.viewers}
                  </span>
                )}
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.3em]"
                  style={{ color: meta.hex }}
                >
                  ● {meta.label}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Parallel stream (Level 3) */}
      {d.parallel && (
        <div className="border-t-2 border-[#FF3E88]/50 bg-[#FF3E88]/[0.05]">
          <div className="px-4 py-3 border-b border-[#FF3E88]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#FF3E88] rounded-full animate-pulse" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF3E88] font-bold">
                  parallel stream · {d.parallel.code}
                </div>
                <div className="font-display text-base md:text-lg uppercase leading-none mt-0.5">
                  {d.parallel.label}
                </div>
                <div className="font-mono text-[10px] text-frost/50 uppercase tracking-widest mt-0.5">
                  ▸ {d.parallel.location}
                </div>
              </div>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-[#FF3E88]">
              ◉ invite only
            </div>
          </div>
          <ul className="divide-y divide-white/10">
            {d.parallel.items.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-3 items-center px-4 py-2.5 hover:bg-[#FF3E88]/10"
              >
                <div className="col-span-3 md:col-span-2 font-mono text-xs text-[#FF3E88] tabular-nums">
                  {item.timeMono}
                </div>
                <div className="col-span-6 md:col-span-7">
                  <div className="font-display text-sm md:text-base uppercase leading-tight">
                    {item.title}
                  </div>
                  {item.note && (
                    <div className="hidden md:block text-[10px] text-frost/50 mt-0.5 font-mono leading-snug">
                      {item.note}
                    </div>
                  )}
                </div>
                <div className="col-span-3 text-right">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF3E88]">
                    ◉ private
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer / subscribe bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ice/40 bg-ink-soft px-4 py-3">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-frost/60">
          <span>◉ subscribers 10.2k</span>
          <span className="text-ice">◉ live 75.8k</span>
        </div>
        <Link
          href="#waitlist"
          className="bg-[#FF3E88] text-frost px-4 py-2 font-display uppercase text-xs tracking-widest hover:bg-ice hover:text-ink transition-colors"
        >
          + FOLLOW / GET ON THE LIST
        </Link>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost">
        {/* Page intro — photo-led */}
        <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden grain min-h-[65vh] flex items-center">
          <Image
            src="/past-events/cyw-kickback-293.jpg"
            alt="Past Kickback stage"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full">
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="w-2 h-2 bg-[#FF3E88] rounded-full animate-pulse" />
              <span className="text-[#FF3E88]">LIVE</span>
              <span className="text-frost/50">/</span>
              <span className="text-frost/70">atlanta · dec 11–13</span>
              <span className="text-frost/50">/</span>
              <span className="text-ice">the kickback</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              The <span className="text-ice">schedule.</span>
            </h1>
            <p className="mt-6 max-w-xl text-frost/70 leading-relaxed">
              Three nights. Opening at the skate park. Closing at the Tabernacle. Panel
              titles, speakers, and the headline artist announcing soon.
            </p>
          </div>
        </section>

        {/* Agenda feed — single column, sticky day headers */}
        <section className="py-16 md:py-24" id="waitlist-anchor">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="border-2 border-ice/40 bg-black">
              {days.map((d) => {
                const isFlagship = d.day === "Sun";
                const accent = isFlagship ? "#FF3E88" : "#BDE0F8";
                return (
                  <div key={d.date}>
                    {/* Sticky day banner */}
                    <div
                      className="sticky top-0 z-20 px-5 py-4 border-y-2 flex items-center justify-between gap-3 backdrop-blur-md"
                      style={{
                        borderColor: accent,
                        background:
                          "linear-gradient(90deg, " +
                          accent +
                          "25 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.9) 100%)",
                      }}
                    >
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: accent }}
                          />
                          <span
                            className="font-mono text-[10px] uppercase tracking-widest font-bold"
                            style={{ color: accent }}
                          >
                            {d.day.toUpperCase()} · LIVE
                          </span>
                        </div>
                        <div
                          className="font-display text-2xl md:text-4xl uppercase leading-none"
                          style={{ color: accent }}
                        >
                          {d.day} · {d.date.split(",")[0]}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-frost/70 hidden md:block">
                          ▸ {d.venue}
                        </div>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-frost/60 text-right">
                        <div>{d.items.length} slots</div>
                        <div style={{ color: accent }}>● {d.code}</div>
                      </div>
                    </div>

                    {/* Venue strip (mobile) */}
                    <div className="md:hidden px-5 py-2 border-b border-white/10 font-mono text-[10px] uppercase tracking-widest text-frost/60">
                      ▸ {d.venue}
                    </div>

                    {/* All-day chips (Sunday) */}
                    {d.allDay && d.allDay.length > 0 && (
                      <div className="px-5 py-4 border-b border-white/10 bg-ice/[0.02]">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-ice mb-2">
                          ◉ 24/7 channels · doors → close
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {d.allDay.map((a) => (
                            <span
                              key={a}
                              className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-ice/40 text-ice/90 bg-ice/[0.04]"
                            >
                              #
                              {a
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-")
                                .replace(/^-|-$/g, "")}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Items */}
                    <ul className="divide-y divide-white/10">
                      {d.items.map((item, i) => {
                        return (
                          <li
                            key={i}
                            className="grid grid-cols-12 gap-3 items-start px-5 py-4 md:py-5 hover:bg-white/[0.03] group"
                          >
                            {/* Time */}
                            <div className="col-span-3 md:col-span-2 font-mono text-xs md:text-sm text-ice tabular-nums pt-0.5">
                              {item.timeMono}
                            </div>

                            {/* Title + note + speakers */}
                            <div className="col-span-9 md:col-span-10">
                              <div className="font-display text-base md:text-xl uppercase leading-tight">
                                {item.title}
                              </div>
                              {item.note && (
                                <div className="text-[11px] md:text-xs text-frost/55 mt-1 font-mono leading-snug">
                                  {item.note}
                                </div>
                              )}

                              {/* Speaker cards */}
                              {item.speakers && item.speakers.length > 0 && (
                                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {item.speakers.map((s, si) => (
                                    <div
                                      key={si}
                                      className={`border p-2.5 ${
                                        s.role === "moderator"
                                          ? "border-ice/50 bg-ice/[0.06]"
                                          : "border-white/10 bg-ink/40"
                                      }`}
                                    >
                                      <div
                                        className={`font-mono text-[9px] uppercase tracking-[0.25em] mb-1 ${
                                          s.role === "moderator"
                                            ? "text-ice"
                                            : "text-frost/40"
                                        }`}
                                      >
                                        {s.role === "moderator"
                                          ? "◉ mod"
                                          : "○ speaker"}
                                      </div>
                                      <div className="font-display text-xs uppercase leading-tight text-frost">
                                        {s.name}
                                      </div>
                                      <div className="text-[10px] text-frost/60 mt-0.5 leading-tight font-mono">
                                        {s.title}
                                      </div>
                                      <div
                                        className={`text-[10px] mt-0.5 leading-tight font-mono ${
                                          s.role === "moderator"
                                            ? "text-ice/70"
                                            : "text-frost/50"
                                        }`}
                                      >
                                        {s.company}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Parallel track — Sunday Level 3 */}
                    {d.parallel && (
                      <div className="border-t-2 border-[#FF3E88]/50 bg-[#FF3E88]/[0.05]">
                        <div className="px-5 py-4 border-b border-[#FF3E88]/30 flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#FF3E88] rounded-full animate-pulse mt-1" />
                            <div>
                              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF3E88] font-bold">
                                parallel stream · {d.parallel.code}
                              </div>
                              <div className="font-display text-lg md:text-xl uppercase leading-none mt-0.5">
                                {d.parallel.label}
                              </div>
                              <div className="font-mono text-[10px] text-frost/60 uppercase tracking-widest mt-0.5">
                                ▸ {d.parallel.location}
                              </div>
                            </div>
                          </div>
                          <div className="font-mono text-[9px] uppercase tracking-widest text-[#FF3E88] shrink-0">
                            ◉ invite only
                          </div>
                        </div>
                        <ul className="divide-y divide-white/10">
                          {d.parallel.items.map((item, i) => (
                            <li
                              key={i}
                              className="grid grid-cols-12 gap-3 items-start px-5 py-3 hover:bg-[#FF3E88]/10"
                            >
                              <div className="col-span-3 md:col-span-2 font-mono text-xs text-[#FF3E88] tabular-nums pt-0.5">
                                {item.timeMono}
                              </div>
                              <div className="col-span-9 md:col-span-10">
                                <div className="font-display text-sm md:text-base uppercase leading-tight">
                                  {item.title}
                                </div>
                                {item.note && (
                                  <div className="text-[10px] text-frost/50 mt-0.5 font-mono leading-snug">
                                    {item.note}
                                  </div>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 border-2 border-[#FF3E88]/40 bg-[#FF3E88]/[0.05] p-5 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3E88] mb-2 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF3E88] rounded-full animate-pulse" />
                incoming signal
              </div>
              <p className="font-mono text-xs text-frost/70 max-w-xl mx-auto leading-relaxed">
                Panel titles, speakers, and the headline artist for the concert
                experience are announcing soon. Follow to catch the drop live.
              </p>
            </div>

            <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/tickets"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide"
              >
                See Tickets →
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

        <div id="waitlist">
          <Community />
        </div>
      </main>
      <Footer />
    </>
  );
}
