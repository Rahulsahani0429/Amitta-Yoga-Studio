import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do beginners join?",
    answer: "Yes. Amitta Yog Sadhna Studio is beginner friendly and also supports advanced learners with guided yoga, meditation, and wellness practices."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes. Online yoga sessions are available along with peaceful offline studio sessions in Durgapura, Jaipur."
  },
  {
    question: "Is personal training included?",
    answer: "Private yoga sessions and personalized guidance are available for students who want one-on-one support for flexibility, stress relief, or wellness goals."
  },
  {
    question: "Is meditation included?",
    answer: "Yes. Meditation classes, stress management meditation, and yoga meditation programs are part of the studio's wellness offerings."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad faq-section">
      <div className="container faq-layout">
        <motion.div
          className="section-copy"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">FAQ</span>
          <h2>Everything you need to know before visiting the Jaipur studio.</h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className={`faq-item ${open === index ? "active" : ""}`} key={faq.question}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
                {faq.question}
                <ChevronDown size={20} />
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
