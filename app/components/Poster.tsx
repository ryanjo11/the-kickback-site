import Image from "next/image";

/**
 * Weekend Events poster section — cream paper frame, cyan tape sticker,
 * red hard-shadow offset. Drops between Hero and Programming.
 */
export default function Poster() {
  return (
    <section className="relative py-20 md:py-28 border-t-4 border-red grain-subtle bg-ink">
      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-red">
            ● weekend events · poster
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-frost/50">
            Dec 11–13 · Atlanta
          </div>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Cream paper frame with tilt + tape */}
          <div className="paper-red-shadow relative -rotate-1 bg-cream p-4 pb-6 shadow-2xl">
            {/* Cyan tape sticker top */}
            <div
              className="tape-cyan absolute -top-4 left-1/2 -translate-x-1/2 rotate-2"
              aria-hidden
            />
            {/* Poster image */}
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-red grain-heavy">
              <Image
                src="/Kickback Save The Date .PNG"
                alt="The Kickback · Save The Date · Dec 11–13, Atlanta"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 640px, 100vw"
              />
            </div>
            {/* Caption strip */}
            <div className="mt-4 px-2 flex items-center justify-between">
              <div className="font-mono text-[10px] text-ink/60 uppercase tracking-[0.25em]">
                ▸ save the date
              </div>
              <div className="font-chunk text-lg md:text-xl uppercase leading-none text-ink">
                Dec 11–13
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] px-2 py-1 text-cream bg-red">
                Fri · Sat · Sun
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
