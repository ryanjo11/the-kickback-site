import Link from "next/link";
import Image from "next/image";

type Stop = {
  city: string;
  state: string;
  venue: string;
  date: string;
  dateMono: string;
  time?: string;
  status: "live" | "soon" | "tbd";
  href?: string;
  photo: string;
  accent: "acid" | "hot" | "ice";
};

const stops: Stop[] = [
  {
    city: "Atlanta",
    state: "GA",
    venue: "The Carlyle · Buckhead",
    date: "Sat · Dec 12",
    dateMono: "12.12.26",
    status: "soon",
    href: "/atlanta",
    photo: "/past-events/end5.jpg",
    accent: "acid",
  },
  {
    city: "Atlanta",
    state: "GA",
    venue: "The Tabernacle",
    date: "Sun · Dec 13",
    dateMono: "12.13.26",
    status: "soon",
    href: "/atlanta",
    photo: "/Tabernacle2.jpeg",
    accent: "hot",
  },
  {
    city: "Arlington",
    state: "VA",
    venue: "BlerdCon",
    date: "Mar 3–5, 2027",
    dateMono: "03.03–05.27",
    status: "soon",
    photo: "/past-events/cyw-kickback-293.jpg",
    accent: "acid",
  },
  {
    city: "Atlanta",
    state: "GA",
    venue: "MomoCon",
    date: "May 27–30, 2027",
    dateMono: "05.27–30.27",
    status: "soon",
    photo: "/past-events/7.jpg",
    accent: "acid",
  },
  {
    city: "Houston",
    state: "TX",
    venue: "DreamCon",
    date: "Jun 17–20, 2027",
    dateMono: "06.17–20.27",
    status: "soon",
    photo: "/past-events/2.jpg",
    accent: "ice",
  },
  {
    city: "San Diego",
    state: "CA",
    venue: "San Diego Comic-Con",
    date: "Jul 22–25, 2027",
    dateMono: "07.22–25.27",
    status: "soon",
    photo: "/past-events/cyw-kickback-411.jpg",
    accent: "hot",
  },
];

function accentClasses(a: "acid" | "hot" | "ice") {
  if (a === "acid")
    return { text: "text-[#BDE0F8]", border: "border-[#BDE0F8]/50" };
  if (a === "hot")
    return { text: "text-[#FF3E88]", border: "border-[#FF3E88]/50" };
  return { text: "text-ice", border: "border-ice/50" };
}

function statusLabel(s: Stop["status"]) {
  if (s === "live") return "on sale";
  if (s === "soon") return "coming soon";
  return "tba";
}

export default function Tour() {
  return (
    <section id="tour" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BDE0F8] mb-3">
            ● tour / 2026 → 2027
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            The <span className="text-[#BDE0F8]">tour</span> dates.
          </h2>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {stops.map((stop, i) => {
            const a = accentClasses(stop.accent);
            const Row = (
              <article className="grid grid-cols-12 gap-3 md:gap-4 items-center py-4 md:py-6 px-2 md:px-3 hover:bg-white/[0.03] group transition-colors">
                <div className="col-span-2 md:col-span-1 font-mono text-[10px] md:text-xs text-frost/40 tracking-[0.3em] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-4 md:col-span-2 font-mono text-[10px] md:text-xs text-frost/60 tracking-[0.2em] uppercase">
                  {stop.dateMono}
                </div>
                <div className="col-span-6 md:col-span-6">
                  <div className="font-display text-2xl md:text-5xl uppercase leading-none">
                    {stop.city}
                    <span className={`ml-1 ${a.text}`}>.</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-frost/50 mt-1">
                    {stop.venue} · {stop.state}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 flex items-center justify-start md:justify-end gap-3 mt-1 md:mt-0">
                  <span
                    className={`text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono ${a.text}`}
                  >
                    ● {statusLabel(stop.status)}
                  </span>
                  <div
                    className={`w-14 h-14 md:w-20 md:h-20 relative overflow-hidden border ${a.border} rounded transition-transform group-hover:scale-110 shrink-0`}
                  >
                    <Image
                      src={stop.photo}
                      alt={`${stop.city} · ${stop.venue}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                </div>
              </article>
            );
            return (
              <li key={`${stop.city}-${i}`}>
                {stop.href ? (
                  <Link href={stop.href} className="block">
                    {Row}
                  </Link>
                ) : (
                  Row
                )}
              </li>
            );
          })}
        </ul>

        <div className="text-center mt-12">
          <Link
            href="/atlanta"
            className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide"
          >
            See Atlanta →
          </Link>
        </div>
      </div>
    </section>
  );
}
