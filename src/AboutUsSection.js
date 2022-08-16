import styles from "./css/AboutUsSection.module.css";

export const AboutUsSection = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.frameDiv}>
        <h3 className={styles.whatDoWeDo}>{`What do we do? `}</h3>
        <p className={styles.aboutUsP}>
          <div className={styles.weLiveInATroublesomeWorld}>
            <p
              className={styles.weLiveIn}
            >{`We live in a troublesome world with always new humanitarian crisis and impending emergencies, but at the core of the most intrinsic of human qualities resides the immediate desire to make everything good again and provide helping hands wherever needed. `}</p>
            <p
              className={styles.soOurMission}
            >{`So our mission is to provide a platform, a common ground where all those willing hands can gather and reach out to make hope a reality. Join us or support us in the effort to make of this a better world.      `}</p>
          </div>
        </p>
      </div>
    </section>
  );
};
