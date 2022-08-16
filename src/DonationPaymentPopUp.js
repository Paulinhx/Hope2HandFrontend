import { useCallback, useEffect } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./css/DonationPaymentPopUp.module.css";

export const DonationPaymentPopUp = ({ onClose }) => {
  const navigate = useNavigate();

  const onLogoButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.donationPaymentPopUpDiv}>
      <div className={styles.donationPopUpDiv}>
        <h3 className={styles.yourDonationH3}>Your Donation</h3>
        <h5 className={styles.selectPaymentMethod}>Select Payment Method</h5>
        <h5 className={styles.personalInfoH5}>Personal info</h5>
        <input className={styles.rectangleInput} type="text" />
        <div className={styles.rectangleDiv} />
        <b className={styles.donationTotalB}>Donation Total:</b>
        <div className={styles.rectangleDiv1} />
        <button className={styles.rectangleButton} data-animate-on-scroll />
        <div className={styles.customAmountDiv}>Custom Amount</div>
        <div className={styles.div}>€</div>
        <div className={styles.groupDiv}>
          <button className={styles.frameButton}>
            <div className={styles.div1}>€10:00</div>
          </button>
          <button className={styles.frameButton1}>
            <div className={styles.div2}>€25:00</div>
          </button>
          <button className={styles.frameButton2}>
            <div className={styles.div2}>€50:00</div>
          </button>
          <button className={styles.frameButton3}>
            <div className={styles.div2}>€100:00</div>
          </button>
          <button className={styles.frameButton4}>
            <div className={styles.div2}>€250:00</div>
          </button>
        </div>
        <div className={styles.groupDiv1}>
          <p className={styles.bankCardP}>Bank Card</p>
          <FormControlLabel
            className={styles.checkFormControlLabel}
            label=""
            control={<Checkbox color="secondary" defaultChecked size="2x" />}
          />
        </div>
        <div className={styles.groupDiv2}>
          <p className={styles.paypalDonation}>Paypal Donation</p>
          <FormControlLabel
            className={styles.checkFormControlLabel}
            label=""
            control={<Checkbox color="secondary" defaultChecked size="2x" />}
          />
        </div>
        <div className={styles.inputComponentsDiv}>
          <input
            className={styles.inputComponent}
            type="text"
            placeholder="Last Name"
          />
          <input
            className={styles.inputComponent1}
            type="text"
            placeholder="First Name"
          />
        </div>
        <input
          className={styles.inputComponent2}
          type="text"
          placeholder="Your email here... "
        />
        <input
          className={styles.inputComponent3}
          type="text"
          placeholder="Write your comments Here..."
        />
        <div className={styles.frameDiv}>
          <div className={styles.div6}>€10.00</div>
        </div>
        <div className={styles.buttonDiv}>
          <b className={styles.makeADonation}>Donate Now!</b>
        </div>
        <FormControlLabel
          className={styles.checkFormControlLabel2}
          label=""
          control={<Checkbox color="secondary" defaultChecked size="2x" />}
        />
        <p className={styles.agreeToTerms}>Agree to Terms?</p>
        <article className={styles.paymentTypeArticle}>
          <div className={styles.paypalDiv}>
            <img className={styles.ellipseIcon} alt="" src="ellipse-1.svg" />
            <img
              className={styles.download11}
              alt=""
              src="download-1-1@2x.png"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.image1Icon} alt="" src="image-12@2x.png" />
            <img className={styles.image3Icon} alt="" src="image-3@2x.png" />
          </div>
          <div className={styles.frameDiv2}>
            <img className={styles.image1Icon} alt="" src="image-13@2x.png" />
            <img className={styles.image2Icon} alt="" src="image-22@2x.png" />
          </div>
          <img className={styles.frameIcon} alt="" src="frame-2@2x.png" />
        </article>
        <div className={styles.outlineDiv} />
        <button className={styles.closeButton} onClick={onClose}>
          <img className={styles.ellipseIcon1} alt="" src="ellipse-2253.svg" />
          <img className={styles.lineIcon} alt="" src="line-83.svg" />
          <img className={styles.lineIcon1} alt="" src="line-93.svg" />
        </button>
        <button className={styles.logoButton} onClick={onLogoButtonClick}>
          <b className={styles.logoTitleB}>HOPE2HAND</b>
          <img className={styles.logoMainIcon} alt="" src="logomain4.svg" />
        </button>
      </div>
    </div>
  );
};
