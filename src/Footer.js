import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Footer.module.css";

export const Footer = () => {
  const navigate = useNavigate();

  const onCompanyContainerClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onFindAHelperClick = useCallback(() => {
    navigate("/findsupportpage");
  }, [navigate]);

  return (
    <footer className={styles.footer}>
      <section className={styles.footermainSection}>
        <img className={styles.logoIcon} alt="" src="logo@2x.png" />
        <main className={styles.footerlinksMain}>
          <div className={styles.companyDiv} onClick={onCompanyContainerClick}>
            <h4 className={styles.cOMPANYH4}>COMPANY</h4>
            <p className={styles.aboutUsP}>About Us</p>
            <p className={styles.legalInformationP}>Legal Information</p>
            <p className={styles.contactUsP}>Contact Us</p>
          </div>
          <div className={styles.helpCenterDiv}>
            <h4 className={styles.hELPCENTERH4}>HELP CENTER</h4>
            <p className={styles.findAHelper} onClick={onFindAHelperClick}>
              Find a Helper
            </p>
            <p className={styles.howToHost}>How To Host?</p>
            <p className={styles.whyVolunteeringP}>Why Volunteering?</p>
          </div>
          <div className={styles.contactInfoDiv}>
            <h4 className={styles.cONTACTINFOH4}>CONTACT INFO</h4>
            <div className={styles.contactItemsDiv}>
              <p className={styles.emailContacthope2handio}>
                Phone: +49 3360033400
              </p>
              <p className={styles.emailContacthope2handio}>
                Email: contact@hope2hand.io
              </p>
              <p className={styles.emailContacthope2handio}>
                Location: Smartrasse, Berlin, DE
              </p>
            </div>
            <article className={styles.socialMediaLinks} id="social links">
              <img className={styles.instaIcon} alt="" src="insta-icon.svg" />
              <img className={styles.fbIcon} alt="" src="fb-icon.svg" />
              <img
                className={styles.twitterIcon}
                alt=""
                src="twitter-icon.svg"
              />
              <img
                className={styles.linkedinIcoonIcon}
                alt=""
                src="linkedin-icoon.svg"
              />
            </article>
          </div>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
        </main>
      </section>
      <address className={styles.copyrightsAddress}>
        <p className={styles.hope2HandAllRightsReserve}>
          © 2022 Hope2Hand | All rights reserved
        </p>
        <p className={styles.createdWithLoveByTheThird}>
          <span>{`Created `}</span>
          <span className={styles.withSpan}>with</span>
          <span> love by The Third Team</span>
        </p>
      </address>
    </footer>
  );
};
