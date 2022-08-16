import { MainHeader } from "./MainHeader";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { BlogSection } from "./BlogSection";
import { NearbySection } from "./NearbySection";
import { DonationShopSection } from "./DonationShopSection";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import styles from "./css/Home.module.css";

export const Home = () => {
  return (
    <main className={styles.homeMain}>
      <MainHeader />
      <HeroSection />
      <WelcomeSection />
      <BlogSection />
      <NearbySection />
      <DonationShopSection />
      <Newsletter ellipse18="ellipse-18.svg" phpaperPlane="phpaperplane.svg" />
      <Footer />
    </main>
  );
};
