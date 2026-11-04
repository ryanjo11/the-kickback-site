const partners2026 = [
  "Care For the Culture",
  "McDonald's",
  "Zynga",
  "Live Nation Urban",
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">2026 Partners</p>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
            This year's <span className="text-ice">collaborators</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {partners2026.map((p) => (
            <div
              key={p}
              className="bg-ink-soft hover:bg-royal-deep/30 transition-colors aspect-[3/2] flex items-center justify-center p-4 text-center"
            >
              <span className="font-display text-base md:text-lg uppercase tracking-wider text-frost/85">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
