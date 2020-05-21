import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import { useSelector } from "react-redux";

const NavigationItems = (props) => {
  const language = useSelector((state) => state.languageReducer.language);

  // let navigationItems = (
  //   <ul className={classes.NavigationItems}>
  //     <NavigationItem link="/">General Info</NavigationItem>
  //     <NavigationItem link="/skills">Skills</NavigationItem>
  //     <NavigationItem link="/projects">Projects</NavigationItem>
  //     <NavigationItem link="/education">Education</NavigationItem>
  //     <NavigationItem link="/experiences">Experience</NavigationItem>
  //     <NavigationItem link="/additionalInfo">Additional Info </NavigationItem>
  //     <NavigationItem link="/contact">Contact</NavigationItem>
  //   </ul>
  // );

  const infoLabel = language === "FR" ? "Informations générales" : "General Info";
  const skillsLabel = language === "FR" ? "Compétences" : "Skills";
  const projectsLabel = language === "FR" ? "Projets" : "Projects";
  const educationLabel = language === "FR" ? "Formations" : "Education";
  const experiencesLabel = language === "FR" ? "Expériences" : "Experiences";
  const additionalInfoLabel = language === "FR" ? "Informations additionnelles" : "Additional Info";
  const contactLabel = "Contact";

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">{infoLabel}</NavigationItem>
      <NavigationItem link="/skills">{skillsLabel}</NavigationItem>
      <NavigationItem link="/projects">{projectsLabel}</NavigationItem>
      <NavigationItem link="/education">{educationLabel}</NavigationItem>
      <NavigationItem link="/experiences">{experiencesLabel}</NavigationItem>
      <NavigationItem link="/additionalInfo">{additionalInfoLabel}</NavigationItem>
      <NavigationItem link="/contact">{contactLabel}</NavigationItem>
    </ul>
  );
};

NavigationItems.propTypes = {};

export default NavigationItems;

// <Route path="/projets" component={ProjectsFR} />
// <Route path="/formations" component={EducationFR} />
// <Route path="/competences" component={SkillsFR} />
// <Route path="/infoAdditionnelles" component={AdditionalInfoFR} />
// <Route path="/experiences" component={ExperiencesFR} />
// <Route path="/contact" component={ContactFR} />
// <Route path="/" component={InfoFR} />
