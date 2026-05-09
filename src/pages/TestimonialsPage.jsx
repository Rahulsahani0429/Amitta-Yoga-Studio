import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ClosingImage from "../components/ClosingImage.jsx";
import { testimonials } from "../data/siteData.js";

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Real stories of calm, ambience, meditation, and positive energy."
        text="Students love the peaceful atmosphere, brilliant meditation sessions, music, and soothing studio environment."
        images={["/images/client-priya.png", "/images/client-aarav.png", "/images/yoga-experience.png"]}
      />
      <section className="section-pad testimonials-wall" id="page-content">
        <div className="container testimonial-wall-grid">
          {testimonials.concat(testimonials).map((item, index) => (
            <motion.article
              className="testimonial-card glass-card"
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Quote className="quote-icon" size={30} />
              <div className="stars">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p>{item.text}</p>
              <div className="testimonial-person">
                <img src={item.image} alt={item.name} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <ClosingImage />
    </>
  );
}
