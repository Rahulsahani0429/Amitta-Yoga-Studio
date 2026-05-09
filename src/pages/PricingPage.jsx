import PageHero from "../components/PageHero.jsx";
import Pricing from "../components/Pricing.jsx";
import FAQ from "../components/FAQ.jsx";
import ClosingImage from "../components/ClosingImage.jsx";

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title="Flexible yoga programs for beginners, families, and dedicated wellness seekers."
        text="Choose a plan for group yoga, private lessons, meditation, therapy, and online practice."
        images={["/images/class-hatha.png", "/images/yoga-experience.png", "/images/class-healing.png"]}
      />
      <div id="page-content">
        <Pricing />
        <FAQ />
        <ClosingImage />
      </div>
    </>
  );
}
