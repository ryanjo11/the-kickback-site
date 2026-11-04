import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Sparkle from "../components/Sparkle";
import Community from "../components/Community";

export const metadata = {
  title: "Partner With The Kickback · Cxmmunity Media",
  description:
    "Plug your brand into The Kickback. Gaming, music, and creator culture across multiple cities. Request the 2025/26 partnership deck.",
};

const integrations = [
  {
    title: "Presenting Sponsor",
    blurb:
      "Lock in across all tour stops. Title naming on tournaments, stages, and broadcast extensions.",
  },
  {
    title: "Gaming Lounge & Tournament",
    blurb:
      "Anchor the consumer-facing gaming experience. Playstations, ProAm tournament, branded jerseys, free-play activations.",
  },
  {
    title: "Concert Experience",
    blurb:
      "Stage-adjacent presence at the headline moment of the night. A-list talent against your brand.",
  },
  {
    title: "Panels & Fireside Chats",
    blurb:
      "Center your brand in the cultural conversations. LED panels, logo integration, and panelist seats.",
  },
  {
    title: "Branded Experiential",
    blurb:
      "Custom on-site activations purpose-built to live inside The Kickback world.",
  },
  {
    title: "Creator Content Series",
    blurb:
      "Pre and post event content edited with your brand integrated authentically into the storyline.",
  },
];

const pastBrands = [
  "XFINITY",
  "MICROSOFT",
  "LIVE NATION URBAN",
  "ROOTS PICNIC",
  "BROCCOLI CITY",
  "ONE MUSIC FEST",
  "CXMMUNITY MEDIA",
];

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost">
        {/* Hero */}
        <section className="relative min-h-[80vh] overflow-hidden grain flex items-center">
          <span className="absolute top-[18%] right-[15%] text-ice twinkle">
            <Sparkle size={22} />
          </span>

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20 w-full">
            <p className="eyebrow mb-4">2025 / 26 Partnership</p>
            <h1 className="font-display text-6xl md:text-[8rem] uppercase leading-[0.85]">
              The room that
              <br />
              <span className="text-ice">already shows up.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-frost/80 max-w-2xl leading-relaxed">
              1M+ annual live attendees. 70M+ monthly ad impressions. 75K+
              weekly newsletter. 10K+ Discord. 85% African American audience.
              The Kickback is where alternative Black culture, gaming, and music
              converge. Brands plug into authentic moments, not interruptions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:partnerships@cxmmunitymedia.co?subject=The%20Kickback%20Partnership"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide"
              >
                Request The Deck ✦
              </a>
              <Link
                href="/"
                className="btn-ghost inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wide"
              >
                ← Back
              </Link>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="eyebrow mb-4">Integration Opportunities</p>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mb-14">
              Plug in <span className="text-ice">anywhere.</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {integrations.map((i, idx) => (
                <article
                  key={i.title}
                  className="lift rounded-3xl border border-white/12 bg-ink-soft p-8 min-h-[240px] flex flex-col justify-between"
                >
                  <div className="font-display text-3xl text-ice/80">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl uppercase leading-tight">
                      {i.title}
                    </h3>
                    <p className="mt-3 text-frost/75 text-sm leading-relaxed">
                      {i.blurb}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Brands that show up */}
        <section className="py-24 md:py-28 bg-ink-soft border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">Past + Present Partners</p>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
                Brands that <span className="text-ice">show up</span>.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {pastBrands.map((p) => (
                <div
                  key={p}
                  className="bg-ink hover:bg-royal-deep/30 transition-colors aspect-[3/2] flex items-center justify-center p-4 text-center"
                >
                  <span className="font-display text-sm md:text-base uppercase tracking-wider text-frost/75">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner With Us CTA */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="relative rounded-3xl overflow-hidden border border-ice/30 bg-gradient-to-br from-royal-deep/40 via-ink-soft to-ink p-8 md:p-14">
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="eyebrow mb-4">Partner With Us</p>
                  <h3 className="font-display text-4xl md:text-5xl uppercase leading-[0.95]">
                    Plug your brand into the rooms that{" "}
                    <span className="text-ice">already show up.</span>
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-frost/80 text-lg leading-relaxed">
                    The Kickback partnership deck breaks down our tentpole
                    programming, integration opportunities, and audience by
                    city. We'll send it over.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:partnerships@cxmmunitymedia.co?subject=The%20Kickback%20Partnership"
                      className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide"
                    >
                      Request the Deck
                    </a>
                    <a
                      href="mailto:partnerships@cxmmunitymedia.co?subject=The%20Kickback%20Partnership"
                      className="btn-ghost inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide"
                    >
                      Email the Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Community />
      </main>
      <Footer />
    </>
  );
}
