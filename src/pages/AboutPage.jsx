import { motion } from "framer-motion";
import PageHero from "../components/PageHero.jsx";
import About from "../components/About.jsx";
import Benefits from "../components/Benefits.jsx";
import ClosingImage from "../components/ClosingImage.jsx";

const timeline = ["Begin with breath", "Build daily discipline", "Find mental clarity", "Live with balance"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Amitta Yog Sadhna Studio"
        title="A peaceful Jaipur studio for yoga, meditation, and inner balance."
        text="Discover a family-friendly yoga space built around traditional practice, calm guidance, and modern wellness support."
        images={["/images/yoga-about.png", "/images/yoga-hero.png", "/images/yoga-experience.png"]}
      />
      <div id="page-content">
        <About />
        <section className="section-pad editorial-section">
          <div className="container editorial-grid">
            <motion.div className="editorial-image-stack" initial={{ opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/images/yoga-closing-banner.png" alt="Indian yoga meditation retreat" />
              <img src="/images/class-meditation.png" alt="Peaceful meditation session" />
            </motion.div>
            <motion.div className="section-copy" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="eyebrow">Wellness philosophy</span>
              <h2>Yoga is practiced here as discipline, devotion, and daily healing.</h2>
              <p>Our mission is to help students feel lighter in the body, quieter in the mind, and more connected to their natural rhythm through yoga, meditation, and guided wellness practices.</p>
              <div className="timeline-list">
                {timeline.map((item, index) => (
                  <span key={item}>
                    <strong>0{index + 1}</strong>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <Benefits />
        <ClosingImage />
      </div>
    </>
  );
}
