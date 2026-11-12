import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HomeTickets from "../components/HomeTickets";
import Poster from "../components/Poster";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Talent from "../components/Talent";
import PastEvents from "../components/PastEvents";
import Footer from "../components/Footer";

export const metadata = {
  title: "Preview · Home with Tickets Block",
  robots: "noindex, nofollow",
};

export default function PreviewHomeTickets() {
  return (
    <>
      {/* Sticky preview banner */}
      <div className="sticky top-0 z-[60] bg-black border-b border-red/60 px-4 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
        <span className="text-red">● preview · home + tickets block after hero</span>
        <span className="text-frost/40">noindex · not linked from nav</span>
      </div>

      <Nav />
      <main className="bg-ink text-frost">
        <Hero />
        <HomeTickets />
        <Poster />
        <Intro />
        <Experience />
        <Talent />
        <PastEvents />
      </main>
      <Footer />
    </>
  );
}
