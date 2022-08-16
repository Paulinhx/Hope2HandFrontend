import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceCard } from "./ServiceCard";
import styles from "./css/NearbySection.module.css";

export const NearbySection = () => {
  const navigate = useNavigate();

  const onMapButtonContainerClick = useCallback(() => {
    navigate("/geolocsearchpage");
  }, [navigate]);

  return (
    <section className={styles.nearbySection}>
      <div className={styles.nearbySectionTitlesDiv}>
        <div className={styles.titleDiv}>
          <h3 className={styles.nearbyListedSocialServices}>
            Nearby Listed Social Services
          </h3>
          <div className={styles.outlineDiv} />
        </div>
        <div
          className={styles.mapButtonDiv}
          onClick={onMapButtonContainerClick}
        >
          <h3 className={styles.showOnMap}>Show On Map</h3>
          <img
            className={styles.bxbxsMapPinIcon}
            alt=""
            src="bxbxsmappin.svg"
          />
        </div>
      </div>
      <article className={styles.cardRowArticle}>
        <div className={styles.frameDiv}>
          <ServiceCard
            bgImage="bgimage@2x.png"
            title="FREE MEDICAL SERVICES"
            heartIcon="hearticon.svg"
            icon="icon@2x.png"
          />
          <ServiceCard
            bgImage="bgimage1@2x.png"
            title="FREE FOOD"
            heartIcon="hearticon1.svg"
            icon="icon1@2x.png"
          />
        </div>
        <div className={styles.frameDiv}>
          <article className={styles.cardArticle}>
            <img className={styles.bgImageIcon} alt="" src="bgimage2@2x.png" />
            <div className={styles.cardDescriptionDiv}>
              <h4 className={styles.titleH4}>LANGUAGE COURSES</h4>
              <p className={styles.subTitleP}>Berlin, DE</p>
            </div>
            <img className={styles.heartIcon} alt="" src="hearticon2.svg" />
            <div className={styles.cardIconDiv}>
              <img className={styles.icon} alt="" src="icon2@2x.png" />
            </div>
          </article>
          <article className={styles.cardArticle1}>
            <img className={styles.bgImageIcon} alt="" src="bgimage3@2x.png" />
            <div className={styles.cardDescriptionDiv}>
              <h4 className={styles.titleH4}>DIVERSE SERVICES</h4>
              <p className={styles.subTitleP}>Berlin, DE</p>
            </div>
            <img className={styles.heartIcon} alt="" src="hearticon3.svg" />
            <div className={styles.cardIconDiv}>
              <img className={styles.icon} alt="" src="icon3@2x.png" />
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};
