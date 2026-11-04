import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Community from "../components/Community";

const tabernaclePhotos: { src: string; alt: string; caption?: string }[] = [
  { src: "/Tabernacle2.jpeg", alt: "The Tabernacle main hall", caption: "The Main Hall" },
  { src: "/Tabernacle1.webp", alt: "The Tabernacle exterior", caption: "The Exterior" },
];

export const metadata = {
  title: "The Kickback Atlanta · Dec 11–13 · LVRN Studios + SkateATL + The Tabernacle",
  description:
    "The Kickback rolls into Atlanta December 11–13, 2026. Three nights. Opening at LVRN Studios, Night Two at SkateATL, Night Three at The Tabernacle in downtown Atlanta. Gaming, music, and creator culture. Coming soon.",
};

export default function AtlantaPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost">
        {/* Hero — photo-led */}
        <section className="relative min-h-[92vh] overflow-hidden grain flex items-center">
          <Image
            src="/past-events/end5.jpg"
            alt="Past Kickback concert"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-20 w-full">
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="text-[#BDE0F8]">● REC</span>
              <span className="text-frost/50">/</span>
              <span className="text-frost/70">atlanta flagship · three nights</span>
              <span className="text-frost/50">/</span>
              <span className="text-[#FF3E88]">coming soon</span>
            </div>
            <h1 className="font-display text-7xl md:text-[10rem] uppercase leading-[0.85]">
              Atlanta
              <br />
              <span className="text-ice">12.11–13</span>
            </h1>

            <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl">
              <div className="rounded-2xl border border-white/15 bg-ink-soft/60 backdrop-blur-sm p-5">
                <div className="eyebrow mb-2">Opening Night</div>
                <div className="font-display text-2xl uppercase">Fri · Dec 11</div>
                <div className="text-sm text-frost/65 mt-1">LVRN Studios</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-ink-soft/60 backdrop-blur-sm p-5">
                <div className="eyebrow mb-2">Night Two</div>
                <div className="font-display text-2xl uppercase">Sat · Dec 12</div>
                <div className="text-sm text-frost/65 mt-1">SkateATL</div>
              </div>
              <div className="rounded-2xl border border-ice/40 bg-gradient-to-br from-royal-deep/30 via-royal/10 to-ink-soft/60 backdrop-blur-sm p-5">
                <div className="eyebrow mb-2">Night Three</div>
                <div className="font-display text-2xl uppercase">Sun · Dec 13</div>
                <div className="text-sm text-frost/65 mt-1">
                  The Tabernacle · Downtown Atlanta
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/tickets"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide"
              >
                See Tickets →
              </Link>
              <Link
                href="#waitlist"
                className="btn-ghost inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wide"
              >
                Get on the List
              </Link>
            </div>
          </div>
        </section>

        {/* Opening Night Venue — LVRN Studios */}
        <section className="py-24 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Opening Night Venue</p>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
                Fri · <span className="text-ice">LVRN Studios</span>.
              </h2>
              <p className="mt-6 text-frost/70 max-w-2xl mx-auto">
                Creator State of the Union at Love Renaissance&apos;s Atlanta
                studio.
              </p>
            </div>

            {/* LVRN Studios photo */}
            <div className="mb-12 max-w-4xl mx-auto">
              <figure className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-royal-deep/40 via-ink-soft to-ink">
                <Image
                  src="/LVRN Studios .webp"
                  alt="LVRN Studios Atlanta"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 896px, 100vw"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-ink via-ink/70 to-transparent z-10">
                  <div className="font-display text-base md:text-lg uppercase tracking-wide text-frost">
                    LVRN Studios · Atlanta
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* LVRN info */}
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Address</div>
                <div className="font-display text-xl uppercase">
                  229 Bradberry St SW
                </div>
                <div className="text-sm text-frost/65 mt-1">
                  Atlanta, GA 30313
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Format</div>
                <div className="font-display text-xl uppercase">
                  Creator State of the Union
                </div>
                <div className="text-sm text-frost/65 mt-1">
                  Panels · fireside · open networking
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Entry</div>
                <div className="font-display text-xl uppercase">$10</div>
                <div className="text-sm text-frost/65 mt-1">
                  Ticketed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Night Two Venue — SkateATL */}
        <section className="py-24 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Night Two Venue</p>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
                Sat · <span className="text-ice">SkateATL</span>.
              </h2>
              <p className="mt-6 text-frost/70 max-w-2xl mx-auto">
                Open-air skate park takeover. Skate jam, $1,000 best trick comp,
                DJ set all night.
              </p>
            </div>

            {/* SkateATL photo */}
            <div className="mb-12 max-w-4xl mx-auto">
              <figure className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-royal-deep/40 via-ink-soft to-ink">
                <Image
                  src="/SkateATL.avif"
                  alt="SkateATL skate park"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 896px, 100vw"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-ink via-ink/70 to-transparent z-10">
                  <div className="font-display text-base md:text-lg uppercase tracking-wide text-frost">
                    SkateATL · Atlanta
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* SkateATL info */}
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Address</div>
                <div className="font-display text-xl uppercase">
                  3200 Cumberland Dr
                </div>
                <div className="text-sm text-frost/65 mt-1">
                  Chamblee, GA 30341
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Capacity</div>
                <div className="font-display text-xl uppercase">250</div>
                <div className="text-sm text-frost/65 mt-1">
                  Intimate open-air session
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Entry</div>
                <div className="font-display text-xl uppercase">Free · RSVP</div>
                <div className="text-sm text-frost/65 mt-1">
                  First come, first in
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Night Three Venue — Tabernacle */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Night Three Venue</p>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
                Sun · <span className="text-ice">The Tabernacle</span>.
              </h2>
              <p className="mt-6 text-frost/70 max-w-2xl mx-auto">
                A former church turned iconic Atlanta music hall. Multi-tier,
                2,200 capacity, built for high-energy nights in the heart of
                downtown ATL.
              </p>
            </div>

            {/* Photo gallery — drop tabernacle-1.jpg and tabernacle-2.jpg into /public/ to replace placeholders */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {tabernaclePhotos.map((photo) => (
                <figure
                  key={photo.src}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-royal-deep/40 via-ink-soft to-ink"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {photo.caption && (
                    <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-ink via-ink/70 to-transparent z-10">
                      <div className="font-display text-base md:text-lg uppercase tracking-wide text-frost">
                        {photo.caption}
                      </div>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Address</div>
                <div className="font-display text-xl uppercase">
                  152 Luckie St NW
                </div>
                <div className="text-sm text-frost/65 mt-1">
                  Atlanta, GA 30303
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Capacity</div>
                <div className="font-display text-xl uppercase">2,200</div>
                <div className="text-sm text-frost/65 mt-1">
                  Floor + multi-tier balcony
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-soft p-5">
                <div className="eyebrow mb-2">Neighborhood</div>
                <div className="font-display text-xl uppercase">
                  Downtown Atlanta
                </div>
                <div className="text-sm text-frost/65 mt-1">
                  Steps from Centennial Park
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-ink-soft/60 p-5 text-center">
              <p className="text-sm text-frost/70">
                <span className="text-ice font-semibold">Opening Night</span> at{" "}
                <span className="text-frost font-semibold">LVRN Studios</span> ·
                Fri · Dec 11.{" "}
                <span className="text-ice font-semibold">Night Two</span> at{" "}
                <span className="text-frost font-semibold">SkateATL</span> · Sat ·
                Dec 12.{" "}
                <span className="text-ice font-semibold">Night Three</span> at{" "}
                <span className="text-frost font-semibold">The Tabernacle</span>{" "}
                · Sun · Dec 13.
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist / community */}
        <div id="waitlist">
          <Community />
        </div>
      </main>
      <Footer />
    </>
  );
}
