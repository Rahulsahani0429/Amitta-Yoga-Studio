import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, Users, Heart, Calendar } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588286840104-e44d52bc85b1?q=80&w=2070&auto=format&fit=crop"
];

const featureCards = [
  { icon: Award, title: "Expert Instructors", desc: "Certified & Passionate Masters" },
  { icon: Users, title: "All Levels Welcome", desc: "Inclusive for Beginners to Advanced" },
  { icon: Heart, title: "Wellness Focused", desc: "Balancing Mind, Body & Soul" },
  { icon: Calendar, title: "Flexible Schedule", desc: "Classes That Perfectly Fit Your Day" }
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="hero-fullscreen" id="home">
      <div className="hero-slider-bg">
        <AnimatePresence>
          <motion.div
            key={currentImg}
            className="slider-bg-img"
            style={{ backgroundImage: `url(${images[currentImg]})` }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" }
            }}
          />
        </AnimatePresence>
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-content-container">
        <div className="hero-main-content">
          <motion.div
            className="hero-text-area"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.span
              className="hero-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              MOVE. BREATHE. TRANSFORM.
            </motion.span>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Unveil Your<br />Inner Radiance
            </motion.h1>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Step into a sanctuary dedicated to mindful movement. We embrace and nurture the unique light within everyone.
            </motion.p>
            <motion.div
              className="hero-actions-new"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <a className="btn-book-now" href="#book">
                BOOK CLASS NOW
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right-glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card-item">
              <div className="glass-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z" /><path d="M12 11L15 15L19 12" /><path d="M12 11V18" /><path d="M12 18L9 22" /><path d="M12 18L15 22" /><path d="M12 11L9 15L5 12" /></svg>
              </div>
              <div className="glass-text">
                <h5>YOGA</h5>
                <p>Dynamic Vinyasa<br />& Restorative</p>
              </div>
            </div>

            <div className="glass-card-item active-glow">
              <div className="glass-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4C13.1046 4 14 3.10457 14 2C14 0.89543 13.1046 0 12 0C10.8954 0 10 0.89543 10 2C10 3.10457 10.8954 4 12 4Z" /><path d="M14 22L12 14L10 22" /><path d="M12 14V7" /><path d="M12 7L17 11" /><path d="M12 7L7 11" /></svg>
              </div>
              <div className="glass-text">
                <h5>DANCE</h5>
                <p>Expressive &<br />Free Movement</p>
              </div>
            </div>

            <div className="glass-card-item">
              <div className="glass-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" /><path d="M12 12V22" /><path d="M12 22L8 18" /><path d="M12 22L16 18" /></svg>
              </div>
              <div className="glass-text">
                <h5>PILATES</h5>
                <p>Core Strength<br />& Stability</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
    <section className="hero-features-section container">
      <motion.div
        className="bottom-neumorphic-strip"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {featureCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className="strip-item">
              <div className="strip-icon-wrap">
                <Icon size={22} />
              </div>
              <div className="strip-text">
                <h6>{card.title}</h6>
                <span>{card.desc}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
    </>
  );
}
