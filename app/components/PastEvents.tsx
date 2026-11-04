import Image from "next/image";

/**
 * Past event photo gallery — collaged, tilted, "shot not designed" feel.
 */

type Shot = {
  src: string;
  caption: string;
  location: string;
  tag?: string;
  rotate?: string; // tailwind rotate class
  accent?: "acid" | "hot" | "ice";
  objectPosition?: string;
};

const heroShot: Shot = {
  src: "/past-events/cyw-kickback-293.jpg",
  caption: "Main stage. Lights up.",
  location: "ATL · 24",
  tag: "REC ●",
  accent: "acid",
};

const collageShots: Shot[] = [
  {
    src: "/past-events/2.jpg",
    caption: "On the floor",
    location: "ATL",
    tag: "24.03",
    rotate: "-rotate-3",
    accent: "ice",
  },
  {
    src: "/past-events/cyw-kickback-411.jpg",
    caption: "Headliner",
    location: "ATL · JID",
    tag: "▶ set",
    rotate: "rotate-2",
    accent: "hot",
  },
  {
    src: "/past-events/cyw-kickback-578.jpg",
    caption: "Sold out",
    location: "ATL",
    tag: "cap 1200",
    rotate: "-rotate-2",
    accent: "acid",
  },
  {
    src: "/past-events/7.jpg",
    caption: "Up close",
    location: "ATL",
    tag: "front row",
    rotate: "rotate-3",
    accent: "ice",
    objectPosition: "center 35%",
  },
  {
    src: "/past-events/end5.jpg",
    caption: "After-hours",
    location: "ATL",
    tag: "encore",
    rotate: "-rotate-1",
    accent: "hot",
  },
];

function accentClasses(a?: "acid" | "hot" | "ice") {
  if (a === "acid") return { border: "border-[#BDE0F8]/50", text: "text-[#BDE0F8]", bg: "bg-[#BDE0F8]/10" };
  if (a === "hot") return { border: "border-[#FF3E88]/50", text: "text-[#FF3E88]", bg: "bg-[#FF3E88]/10" };
  return { border: "border-ice/40", text: "text-ice", bg: "bg-ice/10" };
}

function PhotoCard({ shot }: { shot: Shot }) {
  const a = accentClasses(shot.accent);
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border-2 ${a.border} bg-ink shadow-2xl w-full h-full`}
    >
      <Image
        src={shot.src}
        alt={`${shot.caption} — ${shot.location}`}
        fill
        className="object-cover"
        style={{ objectPosition: shot.objectPosition || "center" }}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      {/* Timestamp tag top-left */}
      {shot.tag && (
        <div
          className={`absolute top-2 left-2 font-mono text-[9px] uppercase tracking-[0.25em] px-2 py-1 rounded ${a.bg} ${a.text} border ${a.border}`}
        >
          {shot.tag}
        </div>
      )}
      {/* Caption bar bottom */}
      <figcaption className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-ink via-ink/80 to-transparent">
        <div className="flex items-center justify-between gap-2">
          <span className="font-display text-xs md:text-sm uppercase tracking-wide text-frost">
            {shot.caption}
          </span>
          <span className={`font-mono text-[9px] uppercase tracking-widest ${a.text}`}>
            {shot.location}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function PastEvents() {
  return (
    <section id="past-events" className="relative py-24 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BDE0F8] mb-3">
              ● archive / 2024 → 2025
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
              The <span className="text-[#BDE0F8]">moments</span>
              <br />
              so far.
            </h2>
          </div>
          <p className="text-frost/70 max-w-md text-base md:text-lg">
            ATL. DC. Sold out rooms. Real stages. Real people. The receipts on
            what The Kickback actually feels like.
          </p>
        </div>
      </div>

      {/* Hero shot — full width, no rounded edges */}
      <div className="relative h-[55vh] md:h-[70vh] mb-8 overflow-hidden">
        <Image
          src={heroShot.src}
          alt={heroShot.caption}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="absolute top-6 left-6 md:left-10 font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
          <span className="text-[#BDE0F8]">● REC</span>
          <span className="text-frost/50">/</span>
          <span className="text-frost/80">atl · 2024</span>
        </div>
        <div className="absolute bottom-8 left-6 md:left-10 max-w-xl">
          <div className="font-display text-3xl md:text-5xl uppercase leading-none">
            Main stage. <span className="text-[#BDE0F8]">Lights up.</span>
          </div>
        </div>
      </div>

      {/* Tilted collage */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {collageShots.map((shot, i) => (
            <div
              key={i}
              className={`relative aspect-[3/4] ${shot.rotate || ""} hover:rotate-0 hover:scale-105 transition-transform duration-300`}
            >
              <PhotoCard shot={shot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
