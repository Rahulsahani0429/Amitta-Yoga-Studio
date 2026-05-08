import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, MessageCircle, Navigation, Phone, Send, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">Visit the studio</span>
          <h2>Begin your yoga journey in Durgapura, Jaipur.</h2>
          <p>
            Book a free trial, ask about online classes, or visit Amitta Yog
            Sadhna Studio for peaceful yoga, meditation, and wellness guidance.
          </p>

          <div className="contact-list">
            <span>
              <MapPin size={20} />
              49, near Vidyasthali School, Jadon Nagar, Prithviraj Nagar,
              Durgapura, Jaipur, Rajasthan 302018
            </span>
            <a href="tel:+916378818331">
              <Phone size={20} />
              +91 6378818331
            </a>
            <a href="tel:+919610475422">
              <Phone size={20} />
              +91 9610475422
            </a>
          </div>

          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href="https://www.google.com/maps/search/?api=1&query=Amitta%20Yog%20Sadhna%20Studio%20Jadon%20Nagar%20Durgapura%20Jaipur"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <Navigation size={17} />
            </a>
            <a className="btn btn-ghost" href="https://wa.me/916378818331" target="_blank" rel="noreferrer">
              WhatsApp Inquiry
              <MessageCircle size={17} />
            </a>
          </div>

          <div className="social-row">
            <a href="#contact" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#contact" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#contact" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>

          <div className="map-card" aria-label="Map preview">
            <iframe
              title="Amitta Yog Sadhna Studio Google Map"
              src="https://www.google.com/maps?q=Amitta%20Yog%20Sadhna%20Studio%20Jadon%20Nagar%20Durgapura%20Jaipur%20Rajasthan%20302018&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <strong>Amitta Yog Sadhna Studio</strong>
            <small>Durgapura, Jaipur</small>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="+91" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Preferred Class
            <select name="class" defaultValue="">
              <option value="" disabled>
                Online class inquiry
              </option>
              <option>Group Yoga Classes</option>
              <option>Ashtanga Yoga</option>
              <option>Bhakti Yoga</option>
              <option>Family Yoga</option>
              <option>Hatha Yoga</option>
              <option>Iyengar Yoga</option>
              <option>Kundalini Yoga</option>
              <option>Morning Flow Yoga</option>
              <option>Power Yoga</option>
              <option>Private Yoga Sessions</option>
              <option>Yoga Therapy</option>
              <option>Meditation Classes</option>
              <option>Zumba Classes</option>
              <option>Online Yoga Sessions</option>
              <option>Stress Management Meditation</option>
              <option>Yoga Meditation Programs</option>
            </select>
          </label>
          <label className="full-field">
            Message
            <textarea name="message" rows="5" placeholder="Tell us whether you prefer online or offline classes" />
          </label>
          <button className="btn btn-primary full-field" type="submit">
            Submit Online Class Inquiry
            <Send size={17} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
