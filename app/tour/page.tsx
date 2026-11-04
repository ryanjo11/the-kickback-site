import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Tour from "../components/Tour";
import Community from "../components/Community";

export const metadata = {
  title: "The Kickback Tour · 2026 / 2027 Dates",
  description:
    "The Kickback 2026 / 2027 tour dates. Atlanta (Dec 12–13 at The Tabernacle), Los Angeles, and more cities coming soon.",
};

export default function TourPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost">
        {/* Page intro — photo-led */}
        <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden grain min-h-[65vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/past-events/cyw-kickback-411.jpg"
              alt="Past Kickback"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full">
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="text-[#BDE0F8]">● REC</span>
              <span className="text-frost/50">/</span>
              <span className="text-frost/70">2026 / 2027 tour</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              Where we&apos;re <span className="text-[#BDE0F8]">headed.</span>
            </h1>
          </div>
        </section>

        <Tour />
        <Community />
      </main>
      <Footer />
    </>
  );
}
