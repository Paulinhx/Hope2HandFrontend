import { useState, useCallback } from "react";
import { LoginSignUpPopUp } from "./LoginSignUpPopUp";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/LoginSignInPopUp.module.css";

export const LoginSignInPopUp = ({ onClose }) => {
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);

  const openSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(true);
  }, []);

  const closeSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.signInPopUpDiv}>
        <article className={styles.loginWholeArticle}>
          <div className={styles.loginSignupLinkDiv} onClick={onClose}>
            <p className={styles.dontHaveAccount}>{`Don’t have account? `}</p>
            <button className={styles.signUpButton} onClick={openSignUpPopUp}>
              Sign up
            </button>
          </div>
          <div className={styles.loginFrameDiv} id="LoginForm">
            <div className={styles.usernameDiv}>
              <div className={styles.passwordDiv}>
                <div className={styles.usernameFillDiv}>
                  <p className={styles.dontHaveAccount}>Username</p>
                  <input className={styles.frameInput} type="text" autoFocus />
                </div>
                <div className={styles.usernameFillDiv}>
                  <p className={styles.dontHaveAccount}>Password</p>
                  <input className={styles.frameInput} type="password" />
                </div>
                <div className={styles.rememberMeDiv}>
                  <input
                    className={styles.btnCheckInput}
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <p className={styles.rememberMeP}>Remember me</p>
                  <a className={styles.forgotPassword} target="_blank">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button className={styles.buttonLogin} id="Login Button">
                <div className={styles.frameDiv}>
                  <p className={styles.lOGINP}>LOG IN</p>
                </div>
              </button>
            </div>
            <p className={styles.oRP}>OR</p>
            <button className={styles.buttonLogin}>
              <button className={styles.frameButton}>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="image-2@2x.png"
                  />
                  <p className={styles.continueWithGoogle}>
                    Continue with Google
                  </p>
                </div>
              </button>
            </button>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <img className={styles.ellipseIcon} alt="" src="ellipse-2251.svg" />
            <img className={styles.lineIcon} alt="" src="line-81.svg" />
            <img className={styles.lineIcon1} alt="" src="line-91.svg" />
          </button>
          <h4 className={styles.loginOrSignup}>{`Login or Signup `}</h4>
        </article>
      </div>
      {isSignUpPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
