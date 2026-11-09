import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroVideo from "../components/HeroVideo";

export const metadata = {
  title: "Get Involved · The Kickback Atlanta · Dec 11–13",
  description:
    "Apply to pull up to The Kickback Atlanta. Creators, special guests, panelists, skaters for the Best Trick Comp, and vendors. Four ways in. Applications close Dec 2, 2026.",
};

type Card = {
  eyebrow: string;
  title: string;
  blurb: string;
  photo: string;
  cta: string;
  href: string;
  accent: "ice" | "hot";
};

const cards: Card[] = [
  {
    eyebrow: "Creator · Special Guest · Panelist",
    title: "Pull up to the main stage",
    blurb:
      "Comped entry in exchange for a social post + collab with @cxmmunitymedia. Reviewed in batches. Applications close Dec 2.",
    photo: "/creatorrsvp.jpg",
    cta: "Apply as a Creator →",
    href: "#", // TODO: Form 1 Typeform URL
    accent: "ice",
  },
  {
    eyebrow: "Creator All-Star Game · Sun 12/13",
    title: "Compete in 2K, Tekken, or SF",
    blurb:
      "Pick your game, pick your console, go to war on the main stage. Rosters finalized Dec 2. Expect an email from the team by Dec 4.",
    photo: "/creaatorallstargame.JPG",
    cta: "Register to Play →",
    href: "https://form.typeform.com/to/bsQvy8Yj",
    accent: "hot",
  },
  {
    eyebrow: "Skate · Best Trick Comp",
    title: "Compete for the $1K bag",
    blurb:
      "Open to all ages and all skill levels. Sat Dec 12 at SkateATL. Register to lock your spot. Waivers signed on-site.",
    photo: "/besttrickpicture.jpeg",
    cta: "Register to Compete →",
    href: "https://form.typeform.com/to/bsQvy8Yj",
    accent: "ice",
  },
  {
    eyebrow: "Vendor Village",
    title: "Set up. Sell out.",
    blurb:
      "Free table space on Sun Dec 13 at The Tabernacle · 11am to 11pm. Bring streetwear, sneakers, art, jewelry, or zines.",
    photo: "/VendorMarketplace .JPG",
    cta: "Apply as a Vendor →",
    href: "#", // TODO: Form 3 Typeform URL
    accent: "hot",
  },
  {
    eyebrow: "Media & Press · All 3 Days",
    title: "Covering The Kickback?",
    blurb:
      "Apply for a press pass. Access to all three nights for general event coverage. Reviewed in batches, confirmed by email.",
    photo: "/mediapartner .jpg",
    cta: "Apply for Press →",
    href: "https://form.typeform.com/to/uHwhrECb",
    accent: "ice",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost">
        {/* Hero */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <HeroVideo />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="text-ice">● rolling applications</span>
              <span className="text-frost/50">/</span>
              <span className="text-frost/70">close dec 2 · 2026</span>
            </div>
            <h1 className="font-chunk cyan-glow text-6xl md:text-8xl uppercase leading-[0.9]">
              Get <span className="text-ice">involved.</span>
            </h1>
          </div>
        </section>

        {/* 5 cards — 3 on top row, 2 on bottom row centered (desktop) */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
              {cards.map((c, i) => {
                const hex = c.accent === "hot" ? "#D9252A" : "#4DD8F0";
                const isExternal = c.href.startsWith("http");
                // Desktop (lg): first 3 cards each span 2 of 6 cols (full top row)
                // 4th card starts at col 2 (span 2), 5th at col 4 (span 2) = centered bottom row
                const lgSpan =
                  i < 3
                    ? "lg:col-span-2"
                    : i === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : "lg:col-span-2 lg:col-start-4";
                return (
                  <Link
                    key={c.title}
                    href={c.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`${lgSpan} group relative border-2 border-white/10 hover:border-white/40 bg-ink overflow-hidden flex flex-col transition-colors`}
                  >
                    {/* Photo */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={c.photo}
                        alt={c.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <div
                        className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.3em] px-2 py-1 border bg-ink/80 backdrop-blur-sm"
                        style={{ color: hex, borderColor: `${hex}80` }}
                      >
                        ● {c.eyebrow}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <h3
                          className="font-display text-2xl md:text-3xl uppercase leading-[0.95]"
                          style={{ color: hex }}
                        >
                          {c.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-base text-frost/75 leading-relaxed">
                          {c.blurb}
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center justify-center px-5 py-3 font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-ink self-start"
                        style={{ background: hex }}
                      >
                        {c.cta}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="mt-12 border border-ice/30 bg-ice/[0.03] p-5 max-w-3xl mx-auto text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ice mb-2">
                ● questions?
              </div>
              <p className="font-mono text-xs text-frost/70 leading-relaxed">
                Reach the team at{" "}
                <a
                  href="mailto:partner@cxmmunitymedia.co"
                  className="text-ice underline"
                >
                  partner@cxmmunitymedia.co
                </a>
                . All applications reviewed in batches. Don&rsquo;t worry if
                you don&rsquo;t hear back right away.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
