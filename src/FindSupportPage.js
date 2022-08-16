import { MainHeader } from "./MainHeader";
import { HeroSection } from "./HeroSection";
import { RegistrationFormSection } from "./RegistrationFormSection";
import { ProfileSection } from "./ProfileSection";
import { NearbySection } from "./NearbySection";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import styles from "./css/FindSupportPage.module.css";

export const FindSupportPage = () => {
  return (
    <main className={styles.findSupportPageMain}>
      <MainHeader />
      <HeroSection />
      <RegistrationFormSection />
      <ProfileSection />
      <NearbySection />
      <Newsletter ellipse18="ellipse-18.svg" phpaperPlane="phpaperplane.svg" />
      <Footer />
    </main>
  );
};
