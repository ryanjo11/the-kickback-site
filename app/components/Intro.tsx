export default function Intro() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">What is The Kickback</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] uppercase">
              A place for creators to{" "}
              <span className="text-ice">call home</span>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg md:text-xl leading-relaxed text-frost/85">
            <p>
              The Kickback is a multi-city tour mashing the culture of gaming,
              music, and creator culture. It turns the spaces where Black
              creators already live online into shared, in-person moments.
            </p>
            <p>
              Through a series of live events, we turn gaming culture into an
              immersive experience and a launchpad for rising creators. Built
              for connection, collaboration, and unlocking new levels for the
              next generation of multicultural talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
