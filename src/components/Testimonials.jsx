import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Yoga student, Jaipur",
    image: "/images/client-priya.png",
    text: "The atmosphere here has been peaceful, relaxing, and really soothing."
  },
  {
    name: "Rahul Verma",
    role: "Meditation learner, Jaipur",
    image: "/images/client-aarav.png",
    text: "Excellent place to perform yoga and experience brilliant meditation sessions."
  },
  {
    name: "Nisha Jain",
    role: "Wellness member, Jaipur",
    image: "/images/client-ishita.png",
    text: "I loved the music and the ambience. It feels very calming and positive."
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const item = testimonials[active];

  return (
    <section className="section-pad testimonials-section">
      <div className="container testimonial-layout">
        <motion.div
          className="section-copy"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">Google reviews</span>
          <h2>Peaceful words from students who practice with Amitta Yog Sadhna Studio.</h2>
        </motion.div>

        <div className="testimonial-stage">
          <AnimatePresence mode="wait">
            <motion.article
              className="testimonial-card glass-card"
              key={item.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.55 }}
            >
              <Quote className="quote-icon" size={34} />
              <div className="stars" aria-label="5 star rating">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>
              <p>{item.text}</p>
              <div className="testimonial-person">
                <img src={item.image} alt={`${item.name}, Indian yoga client`} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="testimonial-dots">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.name}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
