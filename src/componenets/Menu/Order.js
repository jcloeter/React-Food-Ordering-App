import React from "react";
import Button from "../UI/Button";
import styles from "./Order.module.css";

const Order = () => {
  return (
    <div className={styles.order}>
      <label forHTML="quantity">
        Amount{"  "}
        <input type="number" min="0" max="25" id="quantity" placeholder="0" />
      </label>
      <Button>+ Add</Button>
    </div>
  );
};

export default Order;
