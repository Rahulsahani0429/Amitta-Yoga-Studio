import { Leaf, Facebook, Instagram, MapPin, Phone, Star, Twitter } from "lucide-react";

const gallery = [
  "/images/class-hatha.png",
  "/images/class-power.png",
  "/images/yoga-about.png",
  "/images/yoga-experience.png"
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand footer-logo" href="#home">
            <span className="brand-mark">
              <Leaf size={20} />
            </span>
            <span>
              <strong>Amitta</strong>
              <small>Yoga Studio</small>
            </span>
          </a>
          <p>Helping You Achieve Peace, Balance &amp; Wellness Through Yoga.</p>
          <div className="footer-rating">
            <Star size={16} fill="currentColor" />
            4.9 Google Rating | 70+ Reviews
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
        </div>

        <div className="footer-links">
          <h3>Yoga Services</h3>
          <a href="#classes">Group Yoga Classes</a>
          <a href="#classes">Ashtanga Yoga</a>
          <a href="#classes">Bhakti Yoga</a>
          <a href="#classes">Family Yoga</a>
          <a href="#classes">Hatha Yoga</a>
          <a href="#classes">Iyengar Yoga</a>
          <a href="#classes">Kundalini Yoga</a>
          <a href="#classes">Power Yoga</a>
        </div>

        <div className="newsletter">
          <h3>Quick Contact</h3>
          <p>Online classes, offline studio sessions, meditation programs, yoga therapy, and Zumba classes.</p>
          <a href="tel:+916378818331">
            <Phone size={16} />
            +91 6378818331
          </a>
          <a href="tel:+919610475422">
            <Phone size={16} />
            +91 9610475422
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Amitta%20Yog%20Sadhna%20Studio%20Jadon%20Nagar%20Durgapura%20Jaipur" target="_blank" rel="noreferrer">
            <MapPin size={16} />
            Durgapura, Jaipur
          </a>
        </div>

        <div className="footer-gallery">
          <h3>Meditation Programs</h3>
          <a href="#classes">Morning Flow Yoga</a>
          <a href="#classes">Private Yoga Sessions</a>
          <a href="#classes">Yoga Therapy</a>
          <a href="#classes">Online Yoga Sessions</a>
          <a href="#classes">Stress Management Meditation</a>
          <a href="#classes">Yoga Meditation Programs</a>
          <h3>Studio Gallery</h3>
          <div>
            {gallery.map((image) => (
              <img src={image} alt="Amitta Yog Sadhna Studio yoga preview" key={image} />
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright 2026 Amitta Yog Sadhna Studio. All rights reserved.</span>
      </div>
    </footer>
  );
}
