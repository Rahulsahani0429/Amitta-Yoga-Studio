import { motion } from "framer-motion";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/916378818331"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float-btn"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="wa-icon-wrap">
        <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24">
          <path d="M16.02 0a15.93 15.93 0 0 0-13.8 23.83L0 32l8.36-2.18A15.9 15.9 0 0 0 16.02 32a15.93 15.93 0 0 0 15.98-16 15.93 15.93 0 0 0-15.98-16zm9.52 22.6c-.4.17-2.37 1.16-2.74 1.3-.37.13-.64.2-.9.58-.28.38-1.04 1.3-1.28 1.57-.23.27-.47.3-.87.1-2.1-.96-4.04-2.13-5.58-3.67-1.54-1.54-2.7-3.48-3.66-5.57-.2-.4-.17-.65 0-.85.16-.16.36-.43.55-.65.18-.22.25-.38.37-.62.13-.26.06-.5-.04-.68-.1-.18-.9-2.18-1.23-2.98-.32-.78-.65-.67-.9-.68l-.77-.02c-.3 0-.77.1-1.17.53-.4.43-1.52 1.48-1.52 3.6 0 2.12 1.55 4.18 1.77 4.47.2.3 3.03 4.63 7.34 6.44 1.02.43 1.83.68 2.45.88.98.3 1.88.26 2.58.15.78-.12 2.37-.97 2.7-1.9.34-.94.34-1.74.24-1.9-.1-.17-.37-.27-.77-.47z" />
        </svg>
      </div>
      <span className="wa-text">WhatsApp</span>
    </motion.a>
  );
}
