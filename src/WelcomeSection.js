import { useState, useCallback } from "react";
import { LoginSignInPopUp } from "./LoginSignInPopUp";
import { PortalPopup } from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./css/WelcomeSection.module.css";

export const WelcomeSection = () => {
  const [isSignInPopUp2Open, setSignInPopUp2Open] = useState(false);
  const navigate = useNavigate();

  const openSignInPopUp2 = useCallback(() => {
    setSignInPopUp2Open(true);
  }, []);

  const closeSignInPopUp2 = useCallback(() => {
    setSignInPopUp2Open(false);
  }, []);

  const onButton2Click = useCallback(() => {
    navigate("/findsupportpage");
  }, [navigate]);

  return (
    <>
      <section className={styles.welcomeSection}>
        <article className={styles.becomeVolunteerFrameArticle}>
          <h1 className={styles.welcomeH1}>
            <p className={styles.welcomeP}>Welcome,</p>
            <p className={styles.registerHereP}>Register Here!</p>
          </h1>
          <article className={styles.cardBecomeVolunteerArticle}>
            <div className={styles.offerAccommodationAndBecome}>
              <p className={styles.welcomeP}>
                <span className={styles.offerAccommodationAnd}>
                  Offer accommodation and become a host!
                </span>
              </p>
              <p className={styles.registerHereP}>
                <span>
                  Only a few more fields until you are an official volunteer. As
                  soon as you have filled in all the details, we will connect
                  you with help seekers.
                </span>
              </p>
            </div>
            <button className={styles.button} onClick={openSignInPopUp2}>
              <b className={styles.becomeAVolunteer}>Become A Volunteer</b>
            </button>
          </article>
        </article>
        <article className={styles.getHelpFrameArticle}>
          <div className={styles.frameDiv}>
            <div className={styles.descriptionDiv}>
              You want to stay or get help with private volunteers persons in
              Berlin?
            </div>
            <div className={styles.descriptionDiv1}>
              <p className={styles.welcomeP}>
                Register now and we will try to find a suitable accommodation
                for you quickly.
              </p>
            </div>
          </div>
          <button className={styles.button1} onClick={onButton2Click}>
            <b className={styles.becomeAVolunteer}>Get Help</b>
          </button>
        </article>
      </section>
      {isSignInPopUp2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp2}
        >
          <LoginSignInPopUp onClose={closeSignInPopUp2} />
        </PortalPopup>
      )}
    </>
  );
};
