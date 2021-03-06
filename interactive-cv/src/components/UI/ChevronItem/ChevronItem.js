import React from "react";
import ChevronLogo from "../../Logos/Chevron/ChevronLogo";
import classes from "./ChevronItem.module.scss";

const ChevronItem = (props) => {
  return (
    <div className={classes.ChevronItem}>
      <ChevronLogo />
      <span style={props.bold && {fontWeight: "bold"}}>{props.label}</span>
      {/* <ProgressBar max={props.max} value={props.value} /> */}
    </div>
  );
};

ChevronItem.propTypes = {};

export default ChevronItem;

// import React from "react";
// import PropTypes from "prop-types";
// import ProgressBar from "../../../UI/ProgressBar/ProgressBar";
// import ChevronLogo from "../../../Logos/Chevron/ChevronLogo";
// import classes from "./Skill.module.scss";

// const Skill = (props) => {
//   let progressBar;
//   props.value ? (progressBar = <ProgressBar percent={props.value} />) : (progressBar = null);

//   return (
//     <div className={classes.Skill}>
//       <ChevronLogo />
//       <span>{props.label}</span>
//       {/* <ProgressBar max={props.max} value={props.value} /> */}
//       {progressBar}
//     </div>
//   );
// };

// Skill.propTypes = {};

// export default Skill;
