import { motion } from "framer-motion";
import { Link } from "../router/SimpleRouter.jsx";
import { ArrowRight, Flame, Moon, SunMedium } from "lucide-react";

const rituals = [
  { icon: SunMedium, label: "Morning Flow Yoga" },
  { icon: Moon, label: "Meditation Classes" },
  { icon: Flame, label: "Stress Relief Programs" }
];

export default function ClosingImage() {
  return (
    <section className="closing-image-section" aria-label="Yoga retreat invitation">
      <img
        className="closing-image-bg"
        src="/images/yoga-closing-banner.png"
        alt="Indian yoga retreat group meditating in an open air wellness pavilion"
      />
      <div className="closing-image-overlay" />
      <div className="container closing-image-content">
        <motion.div
          className="closing-copy"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow light">Peaceful yoga in Jaipur</span>
          <h2>Begin your wellness journey with Amitta Yog Sadhna Studio.</h2>
          <p>
            Join online or offline sessions for yoga, meditation, Zumba,
            healing, and holistic wellness in a calm family-friendly space.
          </p>
          <div className="closing-rituals">
            {rituals.map((ritual) => {
              const Icon = ritual.icon;
              return (
                <span key={ritual.label}>
                  <Icon size={17} />
                  {ritual.label}
                </span>
              );
            })}
          </div>
          <Link className="btn btn-primary" to="/contact">
            Book a Free Trial
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
