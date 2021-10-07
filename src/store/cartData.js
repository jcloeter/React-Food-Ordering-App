import React, { useState } from "react";

//Default value here isn't really used:
const CartData = React.createContext({
  //None of these values are used/matter except for ide, define and forget:
  changes: "",
  cartItems: [""],
  onAddOrder: () => {},
});

export const CartDataProvider = (props) => {
  const [cartItems, setCartItems] = useState([""]);
  const showModalHandler = () => {
    console.log("gonna show modal now");
  };

  const addOrderHandler = function (orderObj) {
    console.log(orderObj);
    setCartItems(() => {
      return [...cartItems, orderObj];
    });
  };

  const cartNumber = cartItems
    .map((obj) => {
      if (!obj.quantity) return 0;
      return obj.quantity;
    })
    .reduce((acc, num) => Number(num) + Number(acc));

  console.log(cartNumber);

  return (
    <CartData.Provider
      value={{
        changes: "",
        cartItems: cartItems,
        cartNumber: cartNumber,
        onShowModal: showModalHandler,
        onAddOrder: addOrderHandler,
      }}
    >
      {props.children}
    </CartData.Provider>
  );
};

export default CartData;
