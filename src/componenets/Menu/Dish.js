import React from "react";
import styles from "./Dish.module.css";

const Dish = () => {
  return (
    <div className={styles.dish}>
      <h4>Dish Name</h4>
      <p>
        <small>
          <i>Dish Description</i>
        </small>
      </p>
      <p>
        <strong>$22.99</strong>
      </p>
    </div>
  );
};

export default Dish;
