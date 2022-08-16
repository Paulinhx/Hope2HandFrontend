import { useState, useCallback } from "react";
import { LoginSignInPopUp } from "./LoginSignInPopUp";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/LoginSignUpPopUp.module.css";

export const LoginSignUpPopUp = ({ onClose }) => {
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "LoggedInOptionPopUp" to the project
  }, []);

  const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.signUpPopUpDiv}>
        <h5 className={styles.signupH5}>{` Signup `}</h5>
        <button className={styles.closeButton} onClick={onClose}>
          <img className={styles.ellipseIcon} alt="" src="ellipse-225.svg" />
          <img className={styles.lineIcon} alt="" src="line-8.svg" />
          <img className={styles.lineIcon1} alt="" src="line-9.svg" />
        </button>
        <div className={styles.signupFrameDiv}>
          <div className={styles.frameDiv}>
            <div className={styles.frameDiv1}>
              <div className={styles.frameDiv2}>
                <p className={styles.usernameP}>Username</p>
                <input
                  className={styles.rectangleInput}
                  type="text"
                  autoFocus
                />
              </div>
              <input
                className={styles.frameInput}
                type="text"
                placeholder="Password"
              />
              <select className={styles.frameSelect} />
            </div>
            <button className={styles.frameButton} onClick={onFrameButtonClick}>
              <div className={styles.frameDiv3}>
                <p className={styles.sIGNUP}>SIGN UP</p>
              </div>
            </button>
          </div>
          <p className={styles.oRP}>OR</p>
          <button className={styles.frameButton1}>
            <button className={styles.frameButton2}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="image-2@2x.png"
                />
                <p className={styles.signUpWithGoogle}>Sign up with Google</p>
              </div>
            </button>
          </button>
        </div>
        <div className={styles.haveAccountLinkDiv}>
          <b className={styles.youHaveAccount}>You have account?</b>
          <button className={styles.logInButton} onClick={openSignInPopUp}>
            Log in
          </button>
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
    </>
  );
};
