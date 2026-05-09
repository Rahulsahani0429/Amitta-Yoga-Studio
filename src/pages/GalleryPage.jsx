import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ClosingImage from "../components/ClosingImage.jsx";
import { galleryImages } from "../data/siteData.js";

export default function GalleryPage() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual journey through yoga, meditation, and peaceful studio practice."
        text="Explore cinematic Indian yoga visuals, quiet meditation moments, and Amitta's wellness atmosphere."
        images={["/images/yoga-closing-banner.png", "/images/class-meditation.png", "/images/yoga-about.png"]}
      />
      <section className="section-pad gallery-page" id="page-content">
        <div className="container masonry-grid">
          {galleryImages.map((image, index) => (
            <motion.button
              className="gallery-tile"
              type="button"
              key={image}
              onClick={() => setActive(image)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <img src={image} alt="Amitta Yog Sadhna Studio gallery" />
            </motion.button>
          ))}
        </div>
      </section>
      <section className="section-pad video-gallery">
        <div className="container video-card">
          <span className="eyebrow">Video gallery</span>
          <h2>Morning yoga, meditation, and peaceful studio rituals.</h2>
        </div>
      </section>
      <AnimatePresence>
        {active && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button type="button" onClick={() => setActive(null)} aria-label="Close gallery image">
              <X size={24} />
            </button>
            <motion.img src={active} alt="Expanded yoga gallery" initial={{ scale: 0.92 }} animate={{ scale: 1 }} />
          </motion.div>
        )}
      </AnimatePresence>
      <ClosingImage />
    </>
  );
}
