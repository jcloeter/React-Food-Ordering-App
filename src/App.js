import "./App.css";
import React, { useState } from "react";
import Header from "./componenets/Header/Header";
import Description from "./componenets/Description/Description";
import Menu from "./componenets/Menu/Menu";
import menuMaster from "./Menu-Master/menuMaster";
// import reactDom from "react-dom";
// import Background from "./componenets/UI/Background";

function App() {
  const [order, setOrder] = useState([{ quantity: 0 }]);
  const addOrderHandler = function (newOrderAddition) {
    console.log("fianlly to App");
    setOrder(() => [newOrderAddition, ...order]);
  };
  return (
    <div className="App">
      <Header order={order} />
      <Description />
      <Menu menuMaster={menuMaster} onAddOrder={addOrderHandler} />
      <div>I AM MODAL</div>
    </div>
  );
}

export default App;
