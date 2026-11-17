import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Marquee } from "./components/Marquee";
import { Cuisines } from "./components/Cuisines";
import { Counters } from "./components/Counters";
import { Packages } from "./components/Packages";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Process } from "./components/Process";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Marquee />
        <Cuisines />
        <Counters />
        <Packages />
        <Gallery />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
