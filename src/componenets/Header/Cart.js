import React from "react";
import Button from "../UI/Button";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <Button className={styles.cart}>
      Your Cart
      <span className={styles.cart_amount}>2</span>
    </Button>
  );
};

export default Cart;
