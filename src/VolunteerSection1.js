import { useState, useCallback } from "react";
import { LoginSignInPopUp } from "./LoginSignInPopUp";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/VolunteerSection1.module.css";

export const VolunteerSection1 = () => {
  const [isSignInPopUp2Open, setSignInPopUp2Open] = useState(false);

  const openSignInPopUp2 = useCallback(() => {
    setSignInPopUp2Open(true);
  }, []);

  const closeSignInPopUp2 = useCallback(() => {
    setSignInPopUp2Open(false);
  }, []);

  return (
    <>
      <section className={styles.volunteerSection}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <h4 className={styles.wannaVolunteerWithUs}>
              Wanna Volunteer With Us?
            </h4>
            <button className={styles.button} onClick={openSignInPopUp2}>
              <b className={styles.becomeAVolunteer}>Become A Volunteer</b>
            </button>
          </div>
        </div>
        <div className={styles.frameDiv2}>
          <img className={styles.vectorIcon} alt="" src="vector-1.svg" />
          <h5 className={styles.comeJoinUsInOurMissionTo}>
            Come join us in our mission to help our people in Berlin.
          </h5>
        </div>
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
