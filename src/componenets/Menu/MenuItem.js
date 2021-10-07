import React, { useContext } from "react";
import styles from "./MenuItem.module.css";
import Dish from "./Dish";
import Order from "./Order";
import CartData from "../../store/cartData";

const MenuItem = (props) => {
  const { name, description, price, id } = props.menuObj;
  const cartCtx = useContext(CartData);

  return (
    <div className={styles.menu_item}>
      <Dish name={name} description={description} price={price} />
      <Order
        onAddOrderQuantity={cartCtx.onAddOrderHandler}
        menuObject={props.menuObj}
      />
    </div>
  );
};

export default MenuItem;
