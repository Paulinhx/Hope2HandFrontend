import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/DonationPostcardPopUp.module.css";

export const DonationPostcardPopUp = ({ onClose }) => {
  const navigate = useNavigate();

  const onImage9Click = useCallback(() => {
    window.open("https://kub-berlin.org/de/");
  }, []);

  const onImage11Click = useCallback(() => {
    window.open("https://lesbenberatung-berlin.de/");
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImage7Click = useCallback(() => {
    window.open("https://digitalcareerinstitute.org/");
  }, []);

  return (
    <div className={styles.donationPostcardPopUpDiv}>
      <b className={styles.yourDonationIsSupporting}>
        <p className={styles.yourDonationIs}>Your Donation Is Supporting :</p>
      </b>
      <img className={styles.image10Icon} alt="" src="image-10@2x.png" />
      <img
        className={styles.image9Icon}
        alt=""
        src="image-9@2x.png"
        onClick={onImage9Click}
      />
      <img
        className={styles.image11Icon}
        alt=""
        src="image-11@2x.png"
        onClick={onImage11Click}
      />
      <div className={styles.logoDiv} onClick={onLogoContainerClick}>
        <div className={styles.logoMainDiv}>
          <img className={styles.vectorIcon} alt="" src="vector6.svg" />
          <img className={styles.vectorIcon1} alt="" src="vector7.svg" />
          <img className={styles.vectorIcon2} alt="" src="vector8.svg" />
          <img className={styles.vectorIcon3} alt="" src="vector9.svg" />
          <b className={styles.logoTitleB}>HOPE2HAND</b>
        </div>
      </div>
      <img
        className={styles.image7Icon}
        alt=""
        src="image-7@2x.png"
        onClick={onImage7Click}
      />
    </div>
  );
};
