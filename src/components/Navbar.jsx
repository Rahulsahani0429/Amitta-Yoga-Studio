import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
    <motion.header
      className={`navbar ${scrolled ? "navbar-solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="brand" href="#home" aria-label="Amitta Yog Sadhna Studio home">
        <span className="brand-mark">
          <Leaf size={20} strokeWidth={1.8} />
        </span>
        <span>
          <strong>Amitta</strong>
          <small>Yoga Studio</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        Book A Free Trial
      </a>

      <button
        className="mobile-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </motion.header>

    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, clipPath: "circle(0% at 88% 8%)" }}
          animate={{ opacity: 1, clipPath: "circle(140% at 88% 8%)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 88% 8%)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 999 }}
        >
          <div className="mobile-menu-inner">
            {navLinks.map((link, index) => (
              <motion.a
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * index, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a className="mobile-menu-cta" href="#contact" onClick={() => setOpen(false)}>
              Book A Free Trial
            </a>
          </div>
          
          <button
            className="mobile-toggle"
            style={{ position: 'fixed', top: '18px', right: '16px', zIndex: 1000, display: 'grid' }}
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
