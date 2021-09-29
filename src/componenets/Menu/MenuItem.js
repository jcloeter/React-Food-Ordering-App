import React from "react";
import styles from "./MenuItem.module.css";
import Dish from "./Dish";
import Order from "./Order";

const MenuItem = () => {
  return (
    <div className={styles.menu_item}>
      <Dish />
      <Order />
    </div>
  );
};

export default MenuItem;
