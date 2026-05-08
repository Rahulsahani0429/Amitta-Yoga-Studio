import { motion, useScroll, useTransform } from "framer-motion";
import { CirclePlay, Sparkles } from "lucide-react";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0.65], [1, 1.12]);

  return (
    <section className="experience-section" id="experience">
      <motion.img
        className="experience-bg"
        src="/images/yoga-experience.png"
        alt="Indian yoga session in a serene studio"
        style={{ scale }}
      />
      <div className="experience-overlay" />
      <div className="container experience-content">
        <motion.div
          className="experience-quote"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow light">Meditation & wellness programs</span>
          <h2>Peace begins when breath, movement, and awareness meet.</h2>
          <button className="play-button" type="button" aria-label="Play class preview">
            <CirclePlay size={34} />
          </button>
        </motion.div>

        <motion.div
          className="experience-card glass-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <Sparkles size={20} />
          <strong>Online Classes Available</strong>
          <span>Studio sessions and guided online yoga in Jaipur</span>
        </motion.div>
      </div>
    </section>
  );
}
