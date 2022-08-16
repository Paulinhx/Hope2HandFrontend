import { MainHeader } from "./MainHeader";
import { HeroSection1 } from "./HeroSection1";
import { VolunteerSection } from "./VolunteerSection";
import { SeekerCardsSection } from "./SeekerCardsSection";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import styles from "./css/VolunteerForms.module.css";

export const VolunteerForms = () => {
  return (
    <main className={styles.volunteerProfilePageMain}>
      <MainHeader />
      <HeroSection1 />
      <VolunteerSection />
      <SeekerCardsSection />
      <Newsletter
        ellipse18="ellipse-181.svg"
        phpaperPlane="phpaperplane1.svg"
      />
      <Footer />
    </main>
  );
};
