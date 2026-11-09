type Artist = {
  name: string;
  handle: string;
  moment: string;
  hits: string;
  city: string;
  accent: "ice" | "hot";
};

const talent: Artist[] = [
  { name: "Pusha T", handle: "@kingpush", moment: "Kickback ATL · 2024", hits: "Grammy · Def Jam", city: "VA", accent: "ice" },
  { name: "JID", handle: "@jidsv", moment: "Kickback ATL · 2024", hits: "Dreamville · Grammy nom", city: "ATL", accent: "hot" },
  { name: "Baby Tate", handle: "@babytate", moment: "Kickback ATL · 2023", hits: "RIAA Gold", city: "ATL", accent: "ice" },
  { name: "G Herbo", handle: "@gherbo", moment: "Kickback ATL · 2023", hits: "Platinum", city: "CHI", accent: "hot" },
  { name: "NLE Choppa", handle: "@nlechoppamusic", moment: "Kickback ATL · 2023", hits: "3× Platinum", city: "MEM", accent: "ice" },
  { name: "Kenny Mason", handle: "@kenny_mason1", moment: "Kickback ATL · 2022", hits: "RCA · rising", city: "ATL", accent: "ice" },
];

function accent(a: Artist["accent"]) {
  if (a === "hot")
    return { text: "text-[#D9252A]", border: "border-[#D9252A]/50" };
  return { text: "text-ice", border: "border-ice/50" };
}

export default function Talent() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ice mb-3">
              ● past performers / 06
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
              Past Performing <span className="text-ice">Talent</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4">
          {talent.map((a, i) => {
            const c = accent(a.accent);
            return (
              <div key={a.name} className="relative pt-3">
                {/* Lanyard tab */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-8 h-3 bg-frost/90 rounded-b-sm z-10" />
                <div
                  className={`border-2 ${c.border} bg-ink-soft/80 backdrop-blur-sm p-5 pt-8 relative -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-transform shadow-2xl`}
                >
                  {/* Punch hole */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-ink border border-white/25" />

                  {/* Top strip */}
                  <div className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em] pb-3 border-b border-white/10">
                    <span className={c.text}>● artist pass</span>
                    <span className="text-frost/40">
                      #{String(i + 1).padStart(3, "0")}
                    </span>
                  </div>

                  {/* Name block */}
                  <div className="mt-5">
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-frost/40 mb-1">
                      performer
                    </div>
                    <div className="font-display text-3xl md:text-4xl uppercase leading-none">
                      {a.name}
                    </div>
                    <div className="font-mono text-[10px] text-frost/55 uppercase tracking-[0.2em] mt-2">
                      {a.handle} · {a.city}
                    </div>
                  </div>

                  {/* Bottom strip */}
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em]">
                    <span className="text-frost/50">{a.moment}</span>
                    <span className={c.text}>{a.hits}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-center mt-14 font-mono text-[10px] uppercase tracking-[0.3em] text-ice">
        ● 2026 lineup drops soon
      </p>
    </section>
  );
}
