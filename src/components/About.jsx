import { motion } from "framer-motion";
import { ArrowRight, Flower2, HeartPulse, Sparkle, Wind } from "lucide-react";

const features = [
  { icon: Flower2, label: "Beginner Friendly" },
  { icon: Wind, label: "Meditation & Healing" },
  { icon: HeartPulse, label: "Certified Guidance" },
  { icon: Sparkle, label: "Family Wellness Programs" },
  { icon: Flower2, label: "Peaceful Environment" },
  { icon: Wind, label: "Stress Relief Programs" }
];

export default function About() {
  return (
    <section className="section-pad about-section" id="about">
      <div className="container two-column">
        <motion.div
          className="about-collage"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <img
            className="about-img about-img-main"
            src="/images/yoga-about.png"
            alt="Indian woman practicing yoga at a wellness retreat"
          />
          <img
            className="about-img about-img-small"
            src="/images/yoga-classes-montage.png"
            alt="Indian yoga lifestyle meditation detail"
          />
          <div className="collage-badge">
            <strong>4.9</strong>
            <span>Google rated studio</span>
          </div>
        </motion.div>

        <motion.div
          className="section-copy"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="eyebrow">About Amitta Yog Sadhna Studio</span>
          <h2>A Peaceful Space for Yoga &amp; Meditation</h2>
          <p>
            Amitta Yog Sadhna Studio is dedicated to helping individuals
            achieve physical wellness, mental clarity, and inner peace through
            traditional and modern yoga practices. Our peaceful environment,
            experienced guidance, and personalized sessions help students of all
            ages begin their wellness journey comfortably.
          </p>
          <div className="feature-list">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <span key={feature.label}>
                  <Icon size={18} />
                  {feature.label}
                </span>
              );
            })}
          </div>
          <a className="text-link" href="#classes">
            Explore our services
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
