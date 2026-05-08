import { motion } from "framer-motion";
import { Award, CalendarDays, Star, Wifi } from "lucide-react";

const stats = [
  { icon: Star, value: "4.9", label: "Google Rating" },
  { icon: Award, value: "70+", label: "Google Reviews" },
  { icon: Wifi, value: "2", label: "Online & Offline Modes" },
  { icon: CalendarDays, value: "16+", label: "Yoga & Wellness Services" }
];

export default function StatsStrip() {
  return (
    <section className="stats-strip" id="stats">
      <motion.div
        className="container stats-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <span className="stat-icon">
                <Icon size={23} />
              </span>
              <strong>{stat.value}</strong>
              <small>{stat.label}</small>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
