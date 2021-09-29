import React from "react";
import styles from "./MenuItem.module.css";
import Dish from "./Dish";
import Order from "./Order";

const MenuItem = (props) => {
  const { name, description, price } = props.menuObj;
  console.log(price);
  return (
    <div className={styles.menu_item}>
      <Dish name={name} description={description} price={price} />
      <Order />
    </div>
  );
};

export default MenuItem;
