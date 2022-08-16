import { MainHeader } from "./MainHeader";
import { HeroSection } from "./HeroSection";
import { NearbySection } from "./NearbySection";
import { GeoMapSection } from "./GeoMapSection";
import { AboutSection } from "./AboutSection";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import styles from "./css/GeoLocSearchPage.module.css";

export const GeoLocSearchPage = () => {
  return (
    <main className={styles.geoLocSearchPageMain}>
      <MainHeader />
      <HeroSection />
      <NearbySection />
      <GeoMapSection />
      <AboutSection />
      <Newsletter ellipse18="ellipse-18.svg" phpaperPlane="phpaperplane.svg" />
      <Footer />
    </main>
  );
};
