import { motion } from "framer-motion";
import { Clock, Flower2 } from "lucide-react";

const classes = [
  {
    name: "Group Yoga Classes",
    duration: "55 min",
    difficulty: "All levels",
    image: "/images/class-hatha.png",
    description: "Practice yoga in a peaceful group setting with professional guidance for every level."
  },
  {
    name: "Ashtanga Yoga",
    duration: "50 min",
    difficulty: "Strength",
    image: "/images/class-power.png",
    description: "Build strength, flexibility, and discipline through guided Ashtanga practices."
  },
  {
    name: "Meditation Classes",
    duration: "35 min",
    difficulty: "All levels",
    image: "/images/class-meditation.png",
    description: "Calm your mind and improve inner balance through guided meditation and breath awareness."
  },
  {
    name: "Family Yoga",
    duration: "45 min",
    difficulty: "Family",
    image: "/images/class-prenatal.png",
    description: "Healthy yoga sessions designed for families, children, adults, and all age groups."
  },
  {
    name: "Private Yoga Sessions",
    duration: "60 min",
    difficulty: "Personal",
    image: "/images/class-morning-flow.png",
    description: "Personalized one-on-one yoga guidance tailored to your health, flexibility, and wellness goals."
  },
  {
    name: "Yoga Therapy",
    duration: "70 min",
    difficulty: "Healing",
    image: "/images/class-healing.png",
    description: "Gentle therapeutic yoga for stress relief, better mobility, and holistic wellness."
  }
];

export default function Classes() {
  return (
    <section className="section-pad classes-section" id="classes">
      <div className="container">
        <motion.div
          className="section-heading split-heading"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <span className="eyebrow">Classes</span>
            <h2>Yoga, meditation, and wellness services for every learner.</h2>
          </div>
          <a className="btn btn-ghost" href="#pricing">
            See Pricing
          </a>
        </motion.div>

        <div className="classes-grid">
          {classes.map((item, index) => (
            <motion.article
              className="class-card"
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <img src={item.image} alt={`${item.name} class with Indian yoga practitioner`} />
              <div className="class-overlay" />
              <div className="class-badges">
                <span>
                  <Clock size={14} />
                  {item.duration}
                </span>
                <span>
                  <Flower2 size={14} />
                  {item.difficulty}
                </span>
              </div>
              <div className="class-content">
                <small>{item.difficulty}</small>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
