import React from "react";
import styles from "./Menu.module.css";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  const addOrderHandler = function (orderObj) {
    props.onAddOrder(orderObj);
  };
  return (
    <Card className={styles.menu}>
      {props.menuMaster.map((item) => {
        return <MenuItem menuObj={item} onAddOrder={addOrderHandler} />;
      })}
    </Card>
  );
};

export default Menu;
