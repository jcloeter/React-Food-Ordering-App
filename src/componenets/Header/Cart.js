import React, { useContext } from "react";
import CartData from "../../store/cartData";
import Button from "../UI/Button";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartData);
  console.log(cartCtx.cartNumber === 0);
  return (
    <Button
      onClick={cartCtx.onShowModal}
      className={`${styles.cart} ${
        cartCtx.cartNumber === 0 ? styles.empty : null
      }`}
    >
      Your Cart
      <span className={styles.cart_amount}>{cartCtx.cartNumber}</span>
    </Button>
  );
};

export default Cart;
