import styles from "./css/RegistrationFormSection.module.css";

export const RegistrationFormSection = () => {
  return (
    <section className={styles.registrationFormSection}>
      <div className={styles.descriptionDiv}>
        <h2 className={styles.findSupportH2}>Find Support</h2>
        <p className={styles.youWantToStayWithPrivate}>
          <p className={styles.youWantTo}>
            You want to stay with private volunteers persons in Berlin?
             Register now and we will try to find a suitable accommodation for
            you quickly.
          </p>
          <p className={styles.youWantTo}>&nbsp;</p>
          <p className={styles.youWantTo}>
            We will find an accommodation for you - safe and verified
          </p>
          <p className={styles.afterYouRegister}>
            After you register, our partner organisations and us start the
            search for a suitable accommodation.
          </p>
        </p>
      </div>
    </section>
  );
};
