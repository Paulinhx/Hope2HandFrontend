import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Icon,
  Autocomplete,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./css/VolunteerSection.module.css";

export const VolunteerSection = () => {
  const [skillsDropDownAnchorEl, setSkillsDropDownAnchorEl] = useState(null);
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const [datePickerDateTimePicker1Value, setDatePickerDateTimePicker1Value] =
    useState(null);
  const skillsDropDownOpen = Boolean(skillsDropDownAnchorEl);
  const handleSkillsDropDownClick = (event) => {
    setSkillsDropDownAnchorEl(event.currentTarget);
  };
  const handleSkillsDropDownClose = () => {
    setSkillsDropDownAnchorEl(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={styles.volunteerSection}>
        <div className={styles.frameDiv}>
          <article className={styles.userFrameArticle}>
            <div className={styles.frameDiv1}>
              <img
                className={styles.profileSymbolIcon}
                alt=""
                src="profilesymbol3.svg"
              />
              <p className={styles.uploadAPhoto}>Upload a Photo</p>
              <div className={styles.frameDiv2}>
                <p className={styles.loremIpsumDolorSitAmetCo}>
                  <p
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
                  <p className={styles.sedDoEiusmod}>sed do eiusmod tempor.</p>
                </p>
                <h5 className={styles.johnDoeH5}>John Doe</h5>
              </div>
            </div>
            <div className={styles.frameDiv3} />
          </article>
          <article className={styles.userVolunteerAboutSectionArticle}>
            <div className={styles.frameDiv4}>
              <h4 className={styles.helloVolunteerH4}>Hello Volunteer,</h4>
              <p className={styles.weWelcomeYouInOurEndevour}>
                We welcome you in our endevour and want to thank you for joining
                hands with us and help provide more caring hands in times of
                trouble, together we can change reality much faster.
              </p>
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.skillsDiv}>
                <h6 className={styles.skillsH6}>Skills</h6>
                <div className={styles.skillsDropDownDiv}>
                  <Button
                    sx={{ width: 307 }}
                    id="button-Select Option"
                    aria-controls="menu-Select Option"
                    aria-haspopup="true"
                    aria-expanded={skillsDropDownOpen ? "true" : undefined}
                    onClick={handleSkillsDropDownClick}
                    color="primary"
                  >
                    Select Option
                  </Button>
                  <Menu
                    anchorEl={skillsDropDownAnchorEl}
                    open={skillsDropDownOpen}
                    onClose={handleSkillsDropDownClose}
                  >
                    <MenuItem onClick={handleSkillsDropDownClose}>
                      Translation
                    </MenuItem>
                    <MenuItem onClick={handleSkillsDropDownClose}>
                      Accommodation
                    </MenuItem>
                    <MenuItem onClick={handleSkillsDropDownClose}>
                      Transportation
                    </MenuItem>
                    <MenuItem onClick={handleSkillsDropDownClose}>
                      Social Services
                    </MenuItem>
                    <MenuItem onClick={handleSkillsDropDownClose}>
                      Medical Services
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div className={styles.buttonsDiv}>
                <div className={styles.cancelDiv}>
                  <p className={styles.cancelP}>Cancel</p>
                  <img
                    className={styles.uiltimesIcon}
                    alt=""
                    src="uiltimes.svg"
                  />
                </div>
                <button className={styles.button} autoFocus>
                  <b className={styles.saveB}>{`Save  `}</b>
                </button>
              </div>
            </div>
            <section className={styles.frameSection}>
              <h4 className={styles.largeTitleH4}>
                Help, Accomodation, Translation and Job Offer Informations
              </h4>
              <p className={styles.bodyTextP}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Please, fill in the data form. It will take a couple of minutes. `}</p>
              </p>
              <h4 className={styles.howDoWeDo}>{`How do we do? `}</h4>
              <p className={styles.offerAnythingFromHelpToJo}>
                <p className={styles.loremIpsumDolor}>
                  Offer anything from help to job or accommodation and become a
                  Volunteer
                </p>
                <p className={styles.loremIpsumDolor}>
                  <span className={styles.onlyAFew}>
                    Only a few more fields until you are an official
                  </span>
                  {` `}
                  <span
                    className={styles.volunteerHelperAs}
                  >{`volunteer helper. As soon as you have filled in all the `}</span>
                  <span className={styles.onlyAFew}>
                    details, we will connect you with help seekers.
                  </span>
                </p>
                <p className={styles.sedDoEiusmod}>
                  <span className={styles.onlyAFew}>
                    These forms are used to inform us about Accomodations,
                    events, newsletters and messaging with our Seekers and Team
                    organization.
                  </span>
                </p>
              </p>
            </section>
            <section className={styles.translationFormSection}>
              <form className={styles.step3Form}>
                <form className={styles.userDataForm} method="post">
                  <div className={styles.subheadDiv}>
                    <div className={styles.textDiv}>{` `}</div>
                  </div>
                  <div className={styles.fieldDiv}>
                    <TextField
                      className={styles.inputTextField}
                      sx={{ width: 441 }}
                      color="info"
                      variant="standard"
                      type="text"
                      label="Weisestr."
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.selectDiv}>
                    <Autocomplete
                      sx={{ width: 438 }}
                      disablePortal
                      options={["Berlin", "Barndenboug"]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="City"
                          variant="standard"
                          placeholder="Select City"
                          helperText=""
                        />
                      )}
                      size="medium"
                    />
                  </div>
                  <Autocomplete
                    className={styles.autocompleteStandard}
                    sx={{ width: 438 }}
                    disablePortal
                    options={["A", "B", "C", "D"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Type of Lanuage"
                        variant="standard"
                        placeholder="Select Lnuage"
                        helperText=""
                      />
                    )}
                    size="medium"
                  />
                  <Autocomplete
                    className={styles.autocompleteStandard1}
                    sx={{ width: 438 }}
                    disablePortal
                    options={["A", "B", "C", "D"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Type of Help"
                        variant="standard"
                        placeholder="Select Help"
                        helperText=""
                      />
                    )}
                    size="medium"
                  />
                  <div className={styles.fieldsDiv}>
                    <div className={styles.datePickerDiv}>
                      <DatePicker
                        label="From"
                        value={datePickerDateTimePickerValue}
                        onChange={(newValue) => {
                          setDatePickerDateTimePickerValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            variant="standard"
                            size="medium"
                            renderInput={{ placeholder: "Start Date" }}
                            helperText=""
                          />
                        )}
                      />
                    </div>
                    <div className={styles.datePickerDiv}>
                      <DatePicker
                        label="To"
                        value={datePickerDateTimePicker1Value}
                        onChange={(newValue) => {
                          setDatePickerDateTimePicker1Value(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            variant="standard"
                            size="medium"
                            renderInput={{ placeholder: "End Date" }}
                            helperText=""
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.availabilityDiv}>Availability</div>
                  <h6 className={styles.translationAndHelpInformati}>
                    Translation and Help Information Form
                  </h6>
                  <p
                    className={styles.usedToHostPeopleOrWorksho}
                  >{`Used to host people or workshops `}</p>
                </form>
                <div className={styles.agreementDiv}>
                  <img
                    className={styles.buttonIconGhostOff}
                    alt=""
                    src="buttoniconghostoff2.svg"
                  />
                  <p className={styles.captionText}>I agree with</p>
                  <p className={styles.linkP}>Terms of use</p>
                </div>
              </form>
              <button className={styles.button1} autoFocus>
                <b className={styles.sendRequestB}>{`Send Infos  `}</b>
              </button>
            </section>
          </article>
        </div>
      </section>
    </LocalizationProvider>
  );
};
