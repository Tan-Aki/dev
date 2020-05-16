import React from "react";
// import PropTypes from "prop-types";
import classes from "./Backdrop.module.scss";

const backdrop = props => {
  return props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null;
};

// backdrop.propTypes = {};

export default backdrop;