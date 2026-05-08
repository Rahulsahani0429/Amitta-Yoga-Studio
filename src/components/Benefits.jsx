import { motion } from "framer-motion";
import { Brain, CalendarDays, HeartHandshake, Moon, ShieldCheck, Wifi } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Experienced Yoga Trainers" },
  { icon: Moon, title: "Peaceful Meditation Environment" },
  { icon: Wifi, title: "Online & Offline Sessions" },
  { icon: CalendarDays, title: "Flexible Timings" },
  { icon: HeartHandshake, title: "Personalized Guidance" },
  { icon: Brain, title: "Holistic Wellness Approach" }
];

export default function Benefits() {
  return (
    <section className="section-pad benefits-section">
      <div className="container">
        <motion.div
          className="section-heading split-heading"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <span className="eyebrow">Why choose us</span>
            <h2>Professional guidance in a peaceful, family-friendly studio.</h2>
          </div>
          <p>
            From beginner to advanced training, every class supports stress
            relief, flexibility, inner balance, and steady wellness.
          </p>
        </motion.div>

        <div className="benefit-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                className="benefit-card"
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                whileHover={{ y: -8 }}
              >
                <span>
                  <Icon size={24} />
                </span>
                <h3>{benefit.title}</h3>
                <p>Calm instruction, supportive attention, and a wellness-first approach for every student.</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
