import styles from "./css/ServiceCard.module.css";

export const ServiceCard = ({ bgImage, title, heartIcon, icon }) => {
  return (
    <article className={styles.cardArticle}>
      <img className={styles.bgImageIcon} alt="" src={bgImage} />
      <div className={styles.cardDescriptionDiv}>
        <h4 className={styles.titleH4}>{title}</h4>
        <p className={styles.subTitleP}>Berlin, DE</p>
      </div>
      <img className={styles.heartIcon} alt="" src={heartIcon} />
      <div className={styles.cardIconDiv}>
        <img className={styles.icon} alt="" src={icon} />
      </div>
    </article>
  );
};
