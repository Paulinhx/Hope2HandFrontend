import styles from "./css/LegalMention.module.css";

export const LegalMention = () => {
  return (
    <section className={styles.legalMentionSection}>
      <div className={styles.frameDiv}>
        <h4
          className={styles.legalMentionPrivacyPolici}
        >{`Legal Mention & Privacy Policies`}</h4>
        <p className={styles.hope2HandHoldsAndReservesA}>
          <p className={styles.hope2HandHoldsAndReservesA1}>
            <span className={styles.blankLineSpan}>
              <span>
                Hope2Hand holds and reserves all rights to the content and
                layout of its websites. The intellectual property contained in
                our websites and our brands are protected. The text, images and
                graphics on our websites and their layout etc., as well as
                animations and software are subject to copyright law and other
                protective legislation. Reproduction, rendition or playback of
                the whole or parts thereof is prohibited unless our written
                permission has been obtained in advance. This website does not
                grant any license for the use of the intellectual property.
                Hope2Hand reserves the right to change, suspend or close down
                websites at any time and without prior notice.
              </span>
            </span>
          </p>
          <p className={styles.blankLineP}>
            <span className={styles.blankLineSpan}>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.hope2HandLastModifiedJul}>
            <span className={styles.blankLineSpan}>
              <span>© Hope2Hand – Last modified: July 2022</span>
            </span>
          </p>
        </p>
      </div>
    </section>
  );
};
