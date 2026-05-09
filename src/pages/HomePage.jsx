import Hero from "../components/Hero.jsx";
import StatsStrip from "../components/StatsStrip.jsx";
import About from "../components/About.jsx";
import Classes from "../components/Classes.jsx";
import Experience from "../components/Experience.jsx";
import Trainers from "../components/Trainers.jsx";
import Benefits from "../components/Benefits.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Pricing from "../components/Pricing.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import ClosingImage from "../components/ClosingImage.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Classes />
      <Experience />
      <Trainers />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <ClosingImage />
    </>
  );
}
