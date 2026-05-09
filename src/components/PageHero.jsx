import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { heroSlides } from "../data/siteData.js";

export default function PageHero({ eyebrow, title, text, images = heroSlides }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <section className="page-hero">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[active]}
          className="page-hero-bg"
          src={images[active]}
          alt=""
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1.01 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </AnimatePresence>
      <div className="page-hero-overlay" />
      <motion.div className="page-particle particle-one" animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="page-particle particle-two" animate={{ y: [0, 22, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      <div className="container page-hero-content">
        <motion.span
          className="eyebrow light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <Sparkles size={16} />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16 }}
        >
          {text}
        </motion.p>
      </div>
      <a className="page-scroll" href="#page-content" aria-label="Scroll to page content">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
