import React from "react";
// import PropTypes from "prop-types";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

// Button.propTypes = {};

export default Button;
