import styles from "./css/BlogSection.module.css";

export const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <h3 className={styles.titleH3}>
        <h3
          className={styles.cityGuideEventsTips}
        >{`City Guide, Events & Tips`}</h3>
      </h3>
      <div className={styles.outlineDiv} />
      <main className={styles.cardsMain}>
        <article className={styles.rightArticle}>
          <img
            className={styles.rightimageIcon}
            alt=""
            src="rightimage@2x.png"
          />
          <div className={styles.cardbottomDiv}>
            <b className={styles.chooseTheRightInstitutionT}>
              Choose the right institution to help you
            </b>
            <div className={styles.integrationDiv}>Integration</div>
          </div>
        </article>
        <article className={styles.middleArticle}>
          <img
            className={styles.middleimageIcon}
            alt=""
            src="middleimage@2x.png"
          />
          <div className={styles.cardbottomDiv1}>
            <b className={styles.chooseTheRightInstitutionT}>
              Best place to do Sport in Berlin
            </b>
            <div className={styles.integrationDiv}>Lifestyle</div>
          </div>
        </article>
        <article className={styles.rightArticle}>
          <img
            className={styles.middleimageIcon}
            alt=""
            src="leftimage@2x.png"
          />
          <div className={styles.cardbottomDiv2}>
            <b className={styles.chooseTheRightInstitutionT}>
              Best city guides at your services
            </b>
            <div className={styles.integrationDiv}>City Guides in Berlin</div>
          </div>
        </article>
      </main>
    </section>
  );
};
