import { motion } from "framer-motion";
import { Link } from "../router/SimpleRouter.jsx";
import { services } from "../data/siteData.js";

export default function ServiceMegaMenu({ onChoose }) {
  return (
    <motion.div
      className="mega-menu"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.25 }}
    >
      <div className="mega-menu-head">
        <span>Services</span>
        <strong>Yoga, meditation, therapy, online sessions, and family wellness</strong>
      </div>
      <div className="mega-menu-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link to="/services" key={service.title} onClick={onChoose}>
              <Icon size={17} />
              <span>{service.title}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
