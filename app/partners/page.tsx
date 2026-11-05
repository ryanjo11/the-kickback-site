import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Community from "../components/Community";

export const metadata = {
  title: "Partner With The Kickback · Cxmmunity Media",
  description:
    "Plug your brand into The Kickback. Gaming, music, and creator culture across multiple cities. Request the 2025/26 partnership deck.",
};

type Brand = {
  name: string;
  logo?: string;
};

const pastBrands: Brand[] = [
  { name: "Care For The Culture", logo: "/Care fir the Culture.png" },
  { name: "Zynga", logo: "/zynga-logo.png" },
  { name: "Live Nation Urban", logo: "/LNU Logo__Stacked-Wht (1).png" },
];

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost pt-20">
        {/* Brands that show up */}
        <section className="py-24 md:py-28 bg-ink-soft border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14">
              <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
                2026 <span className="text-ice">Partners</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden max-w-6xl mx-auto">
              {pastBrands.map((p) => (
                <div
                  key={p.name}
                  className="bg-ink hover:bg-royal-deep/30 transition-colors aspect-[4/3] flex items-center justify-center p-8 md:p-10 text-center"
                >
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={480}
                      height={240}
                      className="max-h-32 md:max-h-40 w-auto object-contain"
                    />
                  ) : (
                    <span className="font-display text-sm md:text-base uppercase tracking-wider text-frost/75">
                      {p.name}
                    </span>
                  )}
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
