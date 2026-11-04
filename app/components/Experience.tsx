import Image from "next/image";

type Tentpole = {
  num: string;
  title: string;
  blurb: string;
  photo: string;
  tag: string;
  accent: "acid" | "hot";
  rotate: string;
};

const tentpoles: Tentpole[] = [
  {
    num: "01",
    title: "Conversations & Fireside Chats",
    blurb:
      "Culture-driven panels on streaming, anime, fashion, and sports. The rooms where the next wave of creators learn to navigate the industry.",
    photo: "/past-events/7.jpg",
    tag: "panels",
    accent: "acid",
    rotate: "-rotate-3",
  },
  {
    num: "02",
    title: "Creator Lounges & Mixers",
    blurb:
      "Intimate rooms and after-hours mixers where creators connect with the executives, brands, and peers shaping what's next.",
    photo: "/past-events/end5.jpg",
    tag: "networking",
    accent: "hot",
    rotate: "rotate-2",
  },
  {
    num: "03",
    title: "Gaming Tournament & Lounge",
    blurb:
      "Open play stations and a ProAm tournament where creators, athletes, and the community compete side by side.",
    photo: "/past-events/cyw-kickback-293.jpg",
    tag: "tournament",
    accent: "acid",
    rotate: "-rotate-2",
  },
  {
    num: "04",
    title: "Concert Experience",
    blurb:
      "A-list touring artists and emerging talent on one stage. Past performers: Pusha T, JID, Baby Tate, G Herbo, NLE Choppa, Kenny Mason.",
    photo: "/past-events/cyw-kickback-411.jpg",
    tag: "concert",
    accent: "hot",
    rotate: "rotate-3",
  },
];

function accentClasses(a: "acid" | "hot") {
  if (a === "acid")
    return {
      text: "text-[#BDE0F8]",
      border: "border-[#BDE0F8]/40",
      bg: "bg-[#BDE0F8]/10",
    };
  return {
    text: "text-[#FF3E88]",
    border: "border-[#FF3E88]/40",
    bg: "bg-[#FF3E88]/10",
  };
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BDE0F8] mb-3">
              ● pillars / 4
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] uppercase">
              Event <span className="text-[#BDE0F8]">Programming</span>
            </h2>
          </div>
          <p className="text-frost/70 max-w-md text-base md:text-lg">
            Every Kickback runs on these four pillars, designed so partners,
            creators, and fans can plug in wherever the energy is hottest.
          </p>
        </div>

        {/* Polaroid collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-4 pb-8">
          {tentpoles.map((t) => {
            const a = accentClasses(t.accent);
            return (
              <article
                key={t.num}
                className={`${t.rotate} hover:rotate-0 hover:scale-105 transition-transform duration-300`}
              >
                <div className="bg-frost text-ink p-3 pb-5 shadow-2xl">
                  <div
                    className={`relative aspect-square overflow-hidden border-2 ${a.border}`}
                  >
                    <Image
                      src={t.photo}
                      alt={t.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                    <div
                      className={`absolute top-2 left-2 font-mono text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 rounded ${a.bg} ${a.text} border ${a.border}`}
                    >
                      ● {t.tag}
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <div className="font-mono text-[9px] text-ink/50 uppercase tracking-[0.25em]">
                      {t.num} / 04
                    </div>
                    <div className="font-display text-base md:text-lg uppercase leading-tight text-ink mt-0.5">
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

        {/* Featured programming cards */}
        <div className="mt-16 md:mt-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3E88] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3E88] rounded-full animate-pulse" />
            featured activations · atl 12.11–12.13
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Skate Jam",
                tag: "Sat · SkateATL",
                photo: "/SkateATL.avif",
                accent: "#BDE0F8",
              },
              {
                title: "DJ Sets",
                tag: "Fri → Sun",
                photo: "/past-events/end5.jpg",
                accent: "#FF3E88",
              },
              {
                title: "Bae Brigade",
                tag: "Sun · The Tabernacle",
                photo: "/past-events/cyw-kickback-411.jpg",
                accent: "#FF3E88",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="group relative aspect-[4/5] overflow-hidden border-2 border-white/15 hover:border-ice transition-colors"
              >
                <Image
                  src={c.photo}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div
                  className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.25em] px-2 py-1 border bg-black/60"
                  style={{ color: c.accent, borderColor: `${c.accent}80` }}
                >
                  ● {c.tag}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div
                    className="font-display text-3xl md:text-4xl uppercase leading-none"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {c.title}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
