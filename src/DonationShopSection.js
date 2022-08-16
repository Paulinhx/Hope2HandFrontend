import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/DonationShopSection.module.css";

export const DonationShopSection = () => {
  const navigate = useNavigate();

  const onDonationShopSectionContainerClick = useCallback(() => {
    navigate("/donationpage");
  }, [navigate]);

  return (
    <section
      className={styles.donationShopSection}
      onClick={onDonationShopSectionContainerClick}
    >
      <div className={styles.topRatedSectionTitlesDiv}>
        <div className={styles.titleDiv}>
          <h3
            className={styles.ourOnlineDonationParticip}
          >{`Our Online Donation & Participative Merch Shop `}</h3>
          <div className={styles.outlineDiv} />
        </div>
      </div>
      <article className={styles.cardRowArticle}>
        <div className={styles.frameDiv}>
          <article className={styles.cardArticle}>
            <img className={styles.bgImageIcon} alt="" src="bgimage4@2x.png" />
            <div className={styles.cardDescriptionDiv}>
              <h4 className={styles.titleH4}>T-shirts</h4>
              <p className={styles.subTitleP}>International Shipping</p>
            </div>
            <img className={styles.heartIcon} alt="" src="hearticon.svg" />
            <div className={styles.cardIconDiv}>
              <img className={styles.icon} alt="" src="icon4@2x.png" />
            </div>
          </article>
          <article className={styles.cardArticle1}>
            <img className={styles.bgImageIcon} alt="" src="bgimage5@2x.png" />
            <div className={styles.cardDescriptionDiv}>
              <h4 className={styles.titleH4}>Donate directly here!</h4>
              <p className={styles.subTitleP}>Berlin, DE</p>
            </div>
            <img className={styles.heartIcon} alt="" src="hearticon5.svg" />
            <img className={styles.cardIcon} alt="" src="cardicon@2x.png" />
          </article>
        </div>
        <div className={styles.frameDiv}>
          <article className={styles.cardArticle}>
            <img className={styles.bgImageIcon} alt="" src="bgimage6@2x.png" />
            <div className={styles.cardDescriptionDiv}>
              <h4 className={styles.titleH4}>Music</h4>
              <p className={styles.subTitleP}>Berlin, DE</p>
            </div>
            <img className={styles.heartIcon} alt="" src="hearticon2.svg" />
            <img className={styles.cardIcon} alt="" src="cardicon1@2x.png" />
          </article>
          <article className={styles.cardArticle}>
            <img className={styles.bgImageIcon} alt="" src="bgimage7@2x.png" />
            <div className={styles.cardDescriptionDiv}>
              <h4 className={styles.titleH4}>Donate Supplies!</h4>
              <p className={styles.subTitleP}>Neukolln, Berlin, DE</p>
            </div>
            <img className={styles.heartIcon} alt="" src="hearticon7.svg" />
            <img className={styles.cardIcon} alt="" src="cardicon2@2x.png" />
          </article>
        </div>
      </article>
    </section>
  );
};
