import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Yoga Guidance",
    specialty: "Hatha, Iyengar & Breathwork",
    experience: "Professional",
    image: "/images/trainer-ananya.png"
  },
  {
    name: "Meditation Support",
    specialty: "Meditation & Stress Relief",
    experience: "Peaceful",
    image: "/images/trainer-meera.png"
  },
  {
    name: "Strength Practice",
    specialty: "Ashtanga, Power & Kundalini Yoga",
    experience: "Guided",
    image: "/images/trainer-kabir.png"
  },
  {
    name: "Family Wellness",
    specialty: "Family Yoga & Private Sessions",
    experience: "Personalized",
    image: "/images/trainer-riya.png"
  }
];

export default function Trainers() {
  return (
    <section className="section-pad trainers-section" id="trainers">
      <div className="container">
        <motion.div
          className="section-heading center-heading"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">Professional guidance</span>
          <h2>Supportive yoga training for beginners, families, and advanced learners.</h2>
        </motion.div>

        <div className="trainer-grid">
          {trainers.map((trainer, index) => (
            <motion.article
              className="trainer-card"
              key={trainer.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="trainer-image">
                <img src={trainer.image} alt={`${trainer.name}, Indian yoga instructor`} />
                <div className="trainer-socials">
                  <a href="#contact" aria-label={`${trainer.name} Instagram`}>
                    <Instagram size={17} />
                  </a>
                  <a href="#contact" aria-label={`${trainer.name} Twitter`}>
                    <Twitter size={17} />
                  </a>
                  <a href="#contact" aria-label={`${trainer.name} LinkedIn`}>
                    <Linkedin size={17} />
                  </a>
                </div>
              </div>
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
              <span>{trainer.experience} guidance</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
