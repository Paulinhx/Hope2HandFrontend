import { PropertyCard } from "./PropertyCard";
import styles from "./css/GeoMapSection.module.css";

export const GeoMapSection = () => {
  return (
    <section className={styles.geoMapSection}>
      <div className={styles.nearbyServiceCardsDiv}>
        <PropertyCard
          profileImage="profilesymbol5.svg"
          sliderIndicators="sliderindicators.svg"
          bed="bed.svg"
        />
        <PropertyCard
          profileImage="profilesymbol6.svg"
          sliderIndicators="sliderindicators1.svg"
          bed="bed1.svg"
        />
        <PropertyCard
          profileImage="profilesymbol7.svg"
          sliderIndicators="sliderindicators2.svg"
          bed="bed2.svg"
        />
      </div>
      <div className={styles.mapSectionDiv}>
        <div className={styles.mapSectionDiv1}>
          <img className={styles.mapIcon} alt="" src="map.svg" />
          <article className={styles.propertyTitlesArticle}>
            <div className={styles.imageHolderDiv} />
            <div className={styles.frameDiv}>
              <div className={styles.frameDiv1}>
                <b className={styles.clinicumServantesB}>Clinicum Servantes</b>
                <div className={styles.smartStrasseBerlinDE}>
                  100 SmartStrasse, Berlin, DE
                </div>
              </div>
              <div className={styles.propertyInfoThumb}>
                <div className={styles.div}>3</div>
                <div className={styles.div1}>1</div>
                <img className={styles.vectorIcon} alt="" src="vector5.svg" />
                <img className={styles.bedIcon} alt="" src="bed3.svg" />
              </div>
            </div>
          </article>
        </div>
        <article className={styles.jobsFilterArticle}>
          <div className={styles.topDiv}>
            <div className={styles.titleDiv}>Job Type</div>
            <img className={styles.settingsIcon} alt="" src="settings.svg" />
          </div>
          <div className={styles.rowsDiv}>
            <div className={styles.tabsDiv}>
              <div className={styles.textDiv}>Full Time</div>
            </div>
            <div className={styles.tabsDiv1}>
              <div className={styles.textDiv}>Part Time</div>
            </div>
            <div className={styles.tabsDiv2}>
              <div className={styles.textDiv}>Contract</div>
            </div>
          </div>
          <div className={styles.rowsDiv1}>
            <div className={styles.tabsDiv3}>
              <div className={styles.textDiv}>Freelance</div>
            </div>
            <div className={styles.tabsDiv}>
              <div className={styles.textDiv}>Remote</div>
            </div>
            <div className={styles.tabsDiv5}>
              <div className={styles.textDiv5}>Show All Types</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
