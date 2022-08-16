import styles from "./css/PropertyCard.module.css";

export const PropertyCard = ({ profileImage, sliderIndicators, bed }) => {
  return (
    <section className={styles.propertyLargeSection} id="Card">
      <article className={styles.serviceTitleSectionArticle} id="BgImg">
        <img className={styles.bgImageIcon} alt="" src="bgimage12@2x.png" />
        <div className={styles.hostInfoSectionDiv}>
          <div className={styles.hostInfoDiv}>
            <img
              className={styles.profileSymbolIcon}
              alt=""
              src={profileImage}
            />
            <label className={styles.listedLabel}>Listed :</label>
            <h6 className={styles.freeMedicalServices}>
              Free Medical Services
            </h6>
          </div>
          <img
            className={styles.sliderIndicatorsIcon}
            alt=""
            src={sliderIndicators}
          />
        </div>
      </article>
      <article className={styles.serviceDetailsSectionArticle}>
        <div className={styles.propertyTitlesDiv}>
          <h5 className={styles.clinicumServantesH5}>Clinicum Servantes</h5>
          <p className={styles.smartStrasseBerlinDE}>
            100 SmartStrasse, Berlin, DE
          </p>
        </div>
        <article className={styles.propertyInfoArticle}>
          <div className={styles.div}>3</div>
          <div className={styles.div1}>1</div>
          <img className={styles.vectorIcon} alt="" src="vector2.svg" />
          <img className={styles.bedIcon} alt="" src={bed} />
        </article>
      </article>
    </section>
  );
};
