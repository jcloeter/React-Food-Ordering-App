import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type="button" className={`${styles.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;