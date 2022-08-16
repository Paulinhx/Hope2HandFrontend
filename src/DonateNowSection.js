import { useState, useCallback } from "react";
import { DonationPaymentPopUp } from "./DonationPaymentPopUp";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/DonateNowSection.module.css";

export const DonateNowSection = () => {
  const [isDonationPaymentPopUpOpen, setDonationPaymentPopUpOpen] =
    useState(false);

  const openDonationPaymentPopUp = useCallback(() => {
    setDonationPaymentPopUpOpen(true);
  }, []);

  const closeDonationPaymentPopUp = useCallback(() => {
    setDonationPaymentPopUpOpen(false);
  }, []);

  return (
    <>
      <section className={styles.donateNowSection}>
        <article className={styles.bgArticle}>
          <div className={styles.donateNowAndWeWillMakeSu}>
            Donate now and we will make sure the donation is delivered to the
            organization or persons who need the best support today!
          </div>
          <div className={styles.youWantToDonateAndHelpOu}>
            You want to donate and help our partners in Berlin?
          </div>
          <button className={styles.button} onClick={openDonationPaymentPopUp}>
            <b className={styles.makeADonation}>Donate Now!</b>
          </button>
        </article>
      </section>
      {isDonationPaymentPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDonationPaymentPopUp}
        >
          <DonationPaymentPopUp onClose={closeDonationPaymentPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
