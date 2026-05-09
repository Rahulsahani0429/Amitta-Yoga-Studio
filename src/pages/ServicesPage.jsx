import { motion } from "framer-motion";
import PageHero from "../components/PageHero.jsx";
import FAQ from "../components/FAQ.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ClosingImage from "../components/ClosingImage.jsx";
import { services } from "../data/siteData.js";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Yoga services"
        title="Premium yoga, meditation, therapy, and online sessions in Jaipur."
        text="Explore traditional and modern yoga services for beginners, families, advanced learners, and wellness seekers."
        images={["/images/yoga-classes-montage.png", "/images/class-power.png", "/images/yoga-closing-banner.png"]}
      />
      <section className="section-pad page-services" id="page-content">
        <div className="container">
          <motion.div className="section-heading center-heading" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="eyebrow">Complete services menu</span>
            <h2>Choose a practice that fits your energy, schedule, and wellness goals.</h2>
          </motion.div>
          <div className="page-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="page-service-card"
                  key={service.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.035 }}
                  whileHover={{ y: -10 }}
                >
                  <img src={service.image} alt={`${service.title} at Amitta Yog Sadhna Studio`} />
                  <div className="page-service-overlay" />
                  <div className="page-service-content">
                    <span><Icon size={18} /></span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-pad schedule-section">
        <div className="container schedule-card">
          <span className="eyebrow">Yoga schedule</span>
          <h2>Flexible studio and online timings for peaceful daily practice.</h2>
          <div className="schedule-grid">
            {["Morning Flow", "Group Lessons", "Meditation", "Online Sessions"].map((item) => (
              <span key={item}>{item}<strong>7 AM onward</strong></span>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <ClosingImage />
    </>
  );
}
