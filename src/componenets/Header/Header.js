import React from "react";
import styles from "./Header.module.css";
import Cart from "./Cart";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <Cart orderObj={props.order} />
    </header>
  );
};

export default Header;
