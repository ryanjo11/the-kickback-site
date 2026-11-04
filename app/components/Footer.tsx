import Link from "next/link";
import Image from "next/image";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/cxmmunity.co/" },
  { label: "Discord", href: "https://discord.gg/7KnGTz4W" },
];

const linksRows = [
  {
    head: "Explore",
    items: [
      { label: "Home", href: "/" },
      { label: "Atlanta", href: "/atlanta" },
      { label: "Schedule", href: "/schedule" },
      { label: "Tickets", href: "/tickets" },
    ],
  },
  {
    head: "Business",
    items: [
      { label: "Partner With Us", href: "/partners" },
      { label: "Cxmmunity Media", href: "https://www.cxm.co/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block" aria-label="The Kickback home">
              <Image
                src="/kickback-logo.png"
                alt="The Kickback"
                width={2000}
                height={1000}
                className="h-20 md:h-24 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-frost/65 text-sm leading-relaxed">
              A Cxmmunity Media tour. Gaming, music, and creator culture for
              the next generation of multicultural talent.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {linksRows.map((row) => (
            <div key={row.head} className="md:col-span-3">
              <p className="eyebrow mb-4">{row.head}</p>
              <ul className="space-y-3">
                {row.items.map((i) => {
                  const external = i.href.startsWith("http");
                  return (
                    <li key={i.label}>
                      {external ? (
                        <a
                          href={i.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-frost/80 hover:text-ice transition-colors text-sm"
                        >
                          {i.label}
                        </a>
                      ) : (
                        <Link
                          href={i.href}
                          className="text-frost/80 hover:text-ice transition-colors text-sm"
                        >
                          {i.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 flex md:justify-end items-start font-mono text-[10px] uppercase tracking-[0.3em] text-frost/40">
            <span><span className="text-[#BDE0F8]">●</span> rec</span>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-frost/45 uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Cxmmunity Media · The Kickback</span>
          <span>For The Ones Who Can't Be Put In A Box.</span>
        </div>
      </div>
    </footer>
  );
}
