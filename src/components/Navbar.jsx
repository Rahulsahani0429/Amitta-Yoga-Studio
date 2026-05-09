import { useEffect, useState } from "react";
import { Link, NavLink } from "../router/SimpleRouter.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import ServiceMegaMenu from "./ServiceMegaMenu.jsx";
import { services } from "../data/siteData.js";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

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

  const closeMenus = () => {
    setOpen(false);
    setMegaOpen(false);
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar-solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link className="brand" to="/" aria-label="Amitta Yog Sadhna Studio home" onClick={closeMenus}>
        <span className="brand-mark">
          <Leaf size={20} strokeWidth={1.8} />
        </span>
        <span>
          <strong>Amitta</strong>
          <small>Yog Studio</small>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <div
            className="nav-item-wrap"
            key={link.href}
            onMouseEnter={() => link.dropdown && setMegaOpen(true)}
            onMouseLeave={() => link.dropdown && setMegaOpen(false)}
          >
            <NavLink
              to={link.href}
              className={({ isActive }) => (isActive ? "active" : "")}
              onFocus={() => link.dropdown && setMegaOpen(true)}
              onClick={() => !link.dropdown && setMegaOpen(false)}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={14} />}
            </NavLink>
            {link.dropdown && (
              <AnimatePresence>
                {megaOpen && <ServiceMegaMenu onChoose={closeMenus} />}
              </AnimatePresence>
            )}
          </div>
        ))}
      </nav>

      <Link className="nav-cta" to="/contact" onClick={closeMenus}>
        Book A Free Trial
      </Link>

      <button
        className="mobile-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 88% 8%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 88% 8%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 88% 8%)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map((link, index) => (
                <motion.div
                  className="mobile-nav-group"
                  key={link.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index, duration: 0.35 }}
                >
                  <NavLink to={link.href} onClick={closeMenus}>
                    {link.label}
                  </NavLink>
                  {link.dropdown && (
                    <div className="mobile-service-list">
                      {services.map((service) => (
                        <Link to="/services" key={service.title} onClick={closeMenus}>
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <Link className="mobile-menu-cta" to="/contact" onClick={closeMenus}>
                Book A Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
