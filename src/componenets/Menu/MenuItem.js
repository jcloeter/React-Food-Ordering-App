import React from "react";
import styles from "./MenuItem.module.css";
import Dish from "./Dish";
import Order from "./Order";

const MenuItem = (props) => {
  const { name, description, price } = props.menuObj;

  const onAddOrderHandler = function (orderObj) {
    console.log(orderObj);
    props.onAddOrder(orderObj);
  };
  return (
    <div className={styles.menu_item}>
      <Dish name={name} description={description} price={price} />
      <Order
        onAddOrderQuantity={onAddOrderHandler}
        menuObject={props.menuObj}
      />
    </div>
  );
};

export default MenuItem;
