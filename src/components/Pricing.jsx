import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Beginner",
    monthly: 2499,
    yearly: 23990,
    description: "For beginners starting yoga with steady guidance.",
    perks: ["Group yoga classes", "Hatha yoga basics", "Meditation classes"]
  },
  {
    name: "Premium",
    monthly: 5499,
    yearly: 51990,
    description: "For deeper yoga, wellness, and stress relief practice.",
    perks: ["Ashtanga and Power Yoga", "Yoga therapy", "Stress management meditation", "Online yoga sessions"],
    popular: true
  },
  {
    name: "Retreat",
    monthly: 11999,
    yearly: 111990,
    description: "For personalized yoga, family wellness, and healing.",
    perks: ["Private yoga sessions", "Family yoga", "Yoga meditation programs", "Kundalini and Iyengar yoga"]
  }
];

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="section-pad pricing-section" id="pricing">
      <div className="container">
        <motion.div
          className="section-heading center-heading"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">Programs</span>
          <h2>Choose a yoga path for your wellness goals.</h2>
          <div className="pricing-toggle" role="group" aria-label="Billing period">
            <button type="button" className={!yearly ? "active" : ""} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button type="button" className={yearly ? "active" : ""} onClick={() => setYearly(true)}>
              Yearly
            </button>
          </div>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.article
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              key={plan.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              {plan.popular && (
                <span className="popular-badge">
                  <Sparkles size={14} />
                  Popular
                </span>
              )}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price">
                <span>Rs.</span>
                {formatPrice(yearly ? plan.yearly : plan.monthly)}
                <small>/{yearly ? "year" : "month"}</small>
              </div>
              <ul>
                {plan.perks.map((perk) => (
                  <li key={perk}>
                    <Check size={17} />
                    {perk}
                  </li>
                ))}
              </ul>
              <a className="btn btn-primary" href="#contact">
                Inquire Now
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
