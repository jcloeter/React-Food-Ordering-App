import React from "react";
import styles from "./Menu.module.css";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <Card className={styles.menu}>
      {props.menuMaster.map((item) => {
        return <MenuItem menuObj={item} />;
      })}
    </Card>
  );
};

export default Menu;
