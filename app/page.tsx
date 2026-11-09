import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Poster from "./components/Poster";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Talent from "./components/Talent";
import PastEvents from "./components/PastEvents";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-ink text-frost">
        <Hero />
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
