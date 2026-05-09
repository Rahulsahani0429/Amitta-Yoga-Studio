import PageHero from "../components/PageHero.jsx";
import Contact from "../components/Contact.jsx";
import ClosingImage from "../components/ClosingImage.jsx";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Amitta"
        title="Book your free trial or ask about online yoga classes."
        text="Visit Amitta Yog Sadhna Studio near Vidyasthali School, Jadon Nagar, Durgapura, Jaipur."
        images={["/images/yoga-hero.png", "/images/yoga-about.png", "/images/yoga-closing-banner.png"]}
      />
      <div id="page-content">
        <Contact />
        <ClosingImage />
      </div>
    </>
  );
}
