import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSignInPopUp } from "./LoginSignInPopUp";
import { PortalPopup } from "./PortalPopup";
import { BurgerMenuPopUp } from "./BurgerMenuPopUp";
import styles from "./css/MainHeader.module.css";

export const MainHeader = () => {
  const navigate = useNavigate();
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);
  const [isSignInPopUp1Open, setSignInPopUp1Open] = useState(false);
  const [isBurgerMenuPopUpOpen, setBurgerMenuPopUpOpen] = useState(false);

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

  const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  const openSignInPopUp1 = useCallback(() => {
    setSignInPopUp1Open(true);
  }, []);

  const closeSignInPopUp1 = useCallback(() => {
    setSignInPopUp1Open(false);
  }, []);

  const openBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(true);
  }, []);

  const closeBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.mainHeaderDiv}>
        <div className={styles.logoDiv}>
          <img className={styles.logoMainIcon} alt="" src="logomain.svg" />
          <b className={styles.logoTitleB}>HOPE2HAND</b>
        </div>
        <div className={styles.frameDiv}>
          <a className={styles.headerNavigations}>
            <button
              className={styles.findSupportButton}
              onClick={onFindSupportButtonClick}
            >
              Find Support
            </button>
            <button
              className={styles.partnersButton}
              onClick={onPartnersButtonClick}
            >
              Partners
            </button>
            <button
              className={styles.aboutUsButton}
              onClick={onAboutUsButtonClick}
            >
              About Us
            </button>
            <button
              className={styles.contactUsButton}
              onClick={onContactUsButtonClick}
            >
              Contact Us
            </button>
          </a>
          <div className={styles.mainCTADiv}>
            <button className={styles.button} onClick={openSignInPopUp}>
              <b className={styles.becomeAVolunteer}>Become a Volunteer</b>
            </button>
            <button className={styles.frameButton} onClick={openSignInPopUp1}>
              <div className={styles.bxbxsUserCircleDiv}>
                <img className={styles.vectorIcon} alt="" src="vector.svg" />
              </div>
              <label className={styles.signInLabel}>Sign In</label>
            </button>
            <div className={styles.loginButtonDiv}>
              <button
                className={styles.authBtnButton}
                onClick={openBurgerMenuPopUp}
              >
                <div className={styles.rectangleDiv} />
                <img className={styles.ggmenuIcon} alt="" src="ggmenu.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isSignInPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp}
        >
          <LoginSignInPopUp onClose={closeSignInPopUp} />
        </PortalPopup>
      )}
      {isSignInPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp1}
        >
          <LoginSignInPopUp onClose={closeSignInPopUp1} />
        </PortalPopup>
      )}
      {isBurgerMenuPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBurgerMenuPopUp}
        >
          <BurgerMenuPopUp onClose={closeBurgerMenuPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
