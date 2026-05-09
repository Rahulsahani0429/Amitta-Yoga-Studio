import { motion } from "framer-motion";
import { Link } from "../router/SimpleRouter.jsx";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ClosingImage from "../components/ClosingImage.jsx";
import { blogs } from "../data/siteData.js";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Wellness blog"
        title="Thoughtful notes on yoga lifestyle, meditation, and mental clarity."
        text="Read simple, grounding wellness insights inspired by traditional yoga practice and modern life in Jaipur."
        images={["/images/class-meditation.png", "/images/yoga-about.png", "/images/class-morning-flow.png"]}
      />
      <section className="section-pad blog-page" id="page-content">
        <div className="container blog-grid">
          {blogs.map((post, index) => (
            <motion.article
              className="blog-card"
              key={post.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8 }}
            >
              <img src={post.image} alt={post.title} />
              <div>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <Link to="/contact">
                  Read More
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <ClosingImage />
    </>
  );
}
