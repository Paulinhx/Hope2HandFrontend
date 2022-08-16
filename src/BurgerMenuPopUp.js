import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/BurgerMenuPopUp.module.css";

export const BurgerMenuPopUp = ({ onClose }) => {
  const navigate = useNavigate();

  const onFindSupportButtonClick = useCallback(() => {
    navigate("/findsupportpage");
  }, [navigate]);

  const onPartnersButtonClick = useCallback(() => {
    navigate("/geolocsearchpage");
  }, [navigate]);

  const onAboutUsButtonClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onContactUsButtonClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  return (
    <div className={styles.burgerMenuPopUpDiv}>
      <div className={styles.frameDiv}>
        <h4 className={styles.menuH4}>Menu</h4>
        <button className={styles.closeButton} onClick={onClose}>
          <img className={styles.ellipseIcon} alt="" src="ellipse-225.svg" />
          <img className={styles.lineIcon} alt="" src="line-82.svg" />
          <img className={styles.lineIcon1} alt="" src="line-92.svg" />
        </button>
      </div>
      <a className={styles.headerNavigations}>
        <button
          className={styles.findSupportButton}
          onClick={onFindSupportButtonClick}
        >
          Find Support
        </button>
        <button
          className={styles.findSupportButton}
          onClick={onPartnersButtonClick}
        >
          Partners
        </button>
        <button className={styles.aboutUsButton} onClick={onAboutUsButtonClick}>
          About Us
        </button>
        <button
          className={styles.contactUsButton}
          onClick={onContactUsButtonClick}
        >
          Contact Us
        </button>
      </a>
    </div>
  );
};
