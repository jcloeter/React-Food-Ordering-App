import React from "react";
import styles from "./Dish.module.css";

const Dish = (props) => {
  return (
    <div className={styles.dish}>
      <h4>{props.name}</h4>
      <p>
        <small>
          <i>{props.description}</i>
        </small>
      </p>
      <p>
        <strong>{props.price}</strong>
      </p>
    </div>
  );
};

export default Dish;
