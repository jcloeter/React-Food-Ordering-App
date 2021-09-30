import React from "react";
import Button from "../UI/Button";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartNumber = props.orderObj
    .map((obj) => {
      return obj.quantity;
    })
    .reduce((acc, num) => Number(num) + Number(acc));
  return (
    <Button className={styles.cart}>
      Your Cart
      <span className={styles.cart_amount}>{cartNumber}</span>
    </Button>
  );
};

export default Cart;
