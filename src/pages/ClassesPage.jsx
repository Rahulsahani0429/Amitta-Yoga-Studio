import PageHero from "../components/PageHero.jsx";
import Classes from "../components/Classes.jsx";
import FAQ from "../components/FAQ.jsx";
import ClosingImage from "../components/ClosingImage.jsx";

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Classes"
        title="Peaceful yoga classes for beginners, families, and advanced learners."
        text="Practice group yoga, Ashtanga, Hatha, meditation, private sessions, therapy, Zumba, and online yoga."
        images={["/images/yoga-classes-montage.png", "/images/class-hatha.png", "/images/class-power.png"]}
      />
      <div id="page-content">
        <Classes />
        <FAQ />
        <ClosingImage />
      </div>
    </>
  );
}
