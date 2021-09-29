import React from "react";
import styles from "./Menu.module.css";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <Card className={styles.menu}>
      <MenuItem />
    </Card>
  );
};

export default Menu;
