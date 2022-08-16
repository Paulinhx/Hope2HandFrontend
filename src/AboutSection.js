import { useState, useCallback } from "react";
import { DonationPostcardPopUp } from "./DonationPostcardPopUp";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/AboutSection.module.css";

export const AboutSection = () => {
  const [isDonationPostcardPopUpOpen, setDonationPostcardPopUpOpen] =
    useState(false);

  const openDonationPostcardPopUp = useCallback(() => {
    setDonationPostcardPopUpOpen(true);
  }, []);

  const closeDonationPostcardPopUp = useCallback(() => {
    setDonationPostcardPopUpOpen(false);
  }, []);

  return (
    <>
      <section className={styles.aboutSection}>
        <article className={styles.titleTextArticle}>
          <div className={styles.textDescrDiv}>
            <div className={styles.titleDiv}>
              <h3 className={styles.discoverMoreAboutOurPartne}>
                Discover More About our partners
              </h3>
              <div className={styles.outlineDiv} />
            </div>
            <p className={styles.becomeOurPartnerVoluntering}>
              <p className={styles.becomeOurPartner}>
                Become our partner voluntering with us or get some infos links
                there . We are always looking for new associations who needs the
                donations send to HOPE2HAND.
              </p>
              <p className={styles.weWorkClosely}>
                We work closely with institutions and NGO from the city of
                Berlin. Here some links and sponsors. Don’t hesitate to contact
                us in our form if you need more informations.
              </p>
            </p>
          </div>
          <button className={styles.button} onClick={openDonationPostcardPopUp}>
            <b className={styles.discoverMoreB}>Discover more</b>
          </button>
        </article>
        <img className={styles.hope2handImgIcon} alt="" src="image-1@2x.png" />
      </section>
      {isDonationPostcardPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDonationPostcardPopUp}
        >
          <DonationPostcardPopUp onClose={closeDonationPostcardPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
