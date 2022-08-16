import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/HeroSection.module.css";

export const HeroSection = () => {
  const navigate = useNavigate();

  const onFINDButtonClick = useCallback(() => {
    navigate("/geolocsearchpage");
  }, [navigate]);

  return (
    <section className={styles.heroSection}>
      <section className={styles.heroSection1}>
        <h1 className={styles.hOPE2HANDBERLINH1}>
          <p className={styles.hOPE2HAND}>HOPE2HAND</p>
          <p className={styles.bERLINP}>BERLIN</p>
        </h1>
        <article className={styles.searchHeadersArticle}>
          <button className={styles.fINDButton} onClick={onFINDButtonClick}>
            FIND
          </button>
          <div className={styles.searchOptionsDiv}>
            <div className={styles.frameDiv}>
              <h4 className={styles.accomodationH4}>Accomodation</h4>
              <h4 className={styles.translationH4}>Translation</h4>
            </div>
            <div className={styles.frameDiv}>
              <h4 className={styles.medicalServicesH4}>Medical services</h4>
              <h4 className={styles.socialServicesH4}>Social Services</h4>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};
