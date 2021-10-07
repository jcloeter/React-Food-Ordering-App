import React, { useContext, useState } from "react";
import CartData from "../../store/cartData";
import Button from "../UI/Button";
import styles from "./Order.module.css";

const Order = (props) => {
  const [inputQuantity, setInputQuantity] = useState(0);
  const ctx = useContext(CartData);
  console.log(ctx);

  const inputChangeHandler = function (e) {
    console.log(e.target.value);
    setInputQuantity(() => e.target.value);
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (inputQuantity < 1) return;
    const orderInfo = { quantity: inputQuantity, ...props.menuObject };
    ctx.onAddOrder(orderInfo);
    setInputQuantity(0);
  };
  return (
    <form onSubmit={formSubmitHandler} className={styles.order}>
      <label forhtml="quantity">
        Amount{"  "}
        <input
          onChange={inputChangeHandler}
          value={inputQuantity}
          type="number"
          min="0"
          max="25"
          id="quantity"
          placeholder="0"
        />
      </label>
      <Button type="submit" onClick={ctx.onShowModal}>
        + Add
      </Button>
    </form>
  );
};

export default Order;
