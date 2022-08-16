import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./css/ProfileSection.module.css";

export const ProfileSection = () => {
  return (
    <form className={styles.profileSectionForm} method="post">
      <img
        className={styles.imgSeekerFormIcon}
        alt=""
        src="imgseekerform@2x.png"
      />
      <article className={styles.formRegistrationBgArticle}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <h5 className={styles.whatAreYouLookingFor}>
              What are you looking for ?
            </h5>
            <FormControl
              className={styles.inputFormControl}
              sx={{ width: 307 }}
              variant="outlined"
            >
              <InputLabel color="secondary">Select Here</InputLabel>
              <Select color="secondary" size="2x" label="Select Here">
                <MenuItem value="Accommodation">Accommodation</MenuItem>
                <MenuItem value="Jobs">Jobs</MenuItem>
                <MenuItem value="Helpers">Helpers</MenuItem>
                <MenuItem value="Translation Service">
                  Translation Service
                </MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className={styles.logoDiv}>
            <b className={styles.logoTitleB}>HOPE2HAND</b>
            <img className={styles.logoMainIcon} alt="" src="logomain7.svg" />
          </div>
        </div>
      </article>
    </form>
  );
};
