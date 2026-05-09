import PageHero from "../components/PageHero.jsx";
import Trainers from "../components/Trainers.jsx";
import Benefits from "../components/Benefits.jsx";
import ClosingImage from "../components/ClosingImage.jsx";

export default function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional guidance"
        title="Indian yoga guidance for strength, meditation, family wellness, and healing."
        text="Learn with calm support, safe instruction, and personalized attention for your stage of practice."
        images={["/images/trainer-ananya.png", "/images/trainer-kabir.png", "/images/yoga-about.png"]}
      />
      <div id="page-content">
        <Trainers />
        <Benefits />
        <ClosingImage />
      </div>
    </>
  );
}
