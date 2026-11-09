import Image from "next/image";

type Tentpole = {
  num: string;
  title: string;
  blurb: string;
  photo: string;
  accent: "acid" | "hot";
  rotate: string;
};

const tentpoles: Tentpole[] = [
  {
    num: "01",
    title: "Conversations & Fireside Chats",
    blurb:
      "Culture-driven panels on streaming, anime, fashion, and sports. The rooms where the next wave of creators learn to navigate the industry.",
    photo: "/PanelsFireside.JPG",
    accent: "acid",
    rotate: "-rotate-3",
  },
  {
    num: "02",
    title: "Creator Lounges & Mixers",
    blurb:
      "Intimate rooms and after-hours mixers where creators connect with the executives, brands, and peers shaping what's next.",
    photo: "/creator lounge mixer .JPG",
    accent: "hot",
    rotate: "rotate-2",
  },
  {
    num: "03",
    title: "Gaming Tournament & Lounge",
    blurb:
      "Open play stations and a ProAm tournament where creators, athletes, and the community compete side by side.",
    photo: "/past-events/cyw-kickback-293.jpg",
    accent: "acid",
    rotate: "-rotate-2",
  },
  {
    num: "04",
    title: "Concert Experience",
    blurb:
      "A-list touring artists and emerging talent on one stage. Past performers: Pusha T, JID, Baby Tate, G Herbo, NLE Choppa, Kenny Mason.",
    photo: "/past-events/gherbo.jpg",
    accent: "hot",
    rotate: "rotate-3",
  },
  {
    num: "05",
    title: "Skate Jam",
    blurb:
      "Open skate jam + $1,000 best trick competition. Open-air session with DJ sets all night. Culture outside.",
    photo: "/SkateATL.avif",
    accent: "acid",
    rotate: "rotate-2",
  },
  {
    num: "06",
    title: "DJ Sets",
    blurb:
      "DJ sets running across all three nights. Opening the weekend, closing the concert hall, powering the vibes in between.",
    photo: "/DJ Sets .JPG",
    accent: "hot",
    rotate: "-rotate-2",
  },
  {
    num: "07",
    title: "Cosplay Competition",
    blurb:
      "Cosplay meetups across the weekend and a mainstage competition at The Tabernacle. One winner, $1,000 prize pool. Full-crowd energy.",
    photo: "/CosplayCompetition.JPG",
    accent: "acid",
    rotate: "-rotate-2",
  },
  {
    num: "08",
    title: "Bae Brigade",
    blurb:
      "A Sunday mainstage moment inside The Tabernacle. Details announcing soon.",
    photo: "/BaeBrigade.jpeg",
    accent: "hot",
    rotate: "rotate-3",
  },
  {
    num: "09",
    title: "Streetwear & Vendor Market",
    blurb:
      "All-day streetwear + sneaker vendor marketplace on the Tabernacle floor. Rising brands, curated by SolePlay ATL.",
    photo: "/VendorMarketplace .JPG",
    accent: "acid",
    rotate: "-rotate-3",
  },
];

function accentClasses(a: "acid" | "hot") {
  if (a === "acid")
    return {
      text: "text-[#4DD8F0]",
      border: "border-[#4DD8F0]/40",
    };
  return {
    text: "text-[#D9252A]",
    border: "border-[#D9252A]/40",
  };
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 grain-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">
              ● pillars / 09
            </div>
            <h2 className="font-chunk cyan-glow text-5xl md:text-6xl leading-[0.95] uppercase">
              Weekend <span className="text-cyan">Programming</span>
            </h2>
          </div>
          <p className="text-frost/70 max-w-md text-base md:text-lg">
            Every Kickback runs on these pillars, designed so partners,
            creators, and fans can plug in wherever the energy is hottest.
          </p>
        </div>

        {/* Zine card collage */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pt-6 pb-8 md:px-4">
          {tentpoles.map((t, i) => {
            const isRed = t.accent === "hot";
            const shadowClass = isRed ? "paper-red-shadow" : "paper-cyan-shadow";
            const tapeClass = isRed ? "tape-cyan" : "tape-red";
            const stampColor = isRed ? "#D9252A" : "#4DD8F0";
            const stampRotate = i % 2 === 0 ? "-rotate-6" : "rotate-6";
            return (
              <article
                key={t.num}
                className={`${t.rotate} ${shadowClass} bg-cream text-ink p-3 pb-5 transition-transform duration-300 hover:rotate-0 hover:translate-y-[-4px]`}
              >
                {/* Tape sticker */}
                <div
                  className={`${tapeClass} absolute -top-3 left-1/2 -translate-x-1/2 ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
                  aria-hidden
                />
                {/* Photo with heavy grain */}
                <div className="relative aspect-square overflow-hidden border-2 border-ink/80 grain-heavy">
                  <Image
                    src={t.photo}
                    alt={t.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 50vw"
                  />
                  {/* Rotated number stamp */}
                  <div
                    className={`absolute top-2 right-2 ${stampRotate} font-chunk text-cream text-xs md:text-sm uppercase px-2 py-1 border-2 border-cream`}
                    style={{ background: stampColor }}
                  >
                    #{t.num}
                  </div>
                </div>
                {/* Caption */}
                <div className="mt-4 px-1">
                  <div className="font-chunk text-sm md:text-lg uppercase leading-[1.1] text-ink">
                    {t.title}
                  </div>
                  <div className="hidden md:block text-[10px] text-ink/65 mt-2 leading-snug line-clamp-3">
                    {t.blurb}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
