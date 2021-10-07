import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./componenets/Header/Header";
import Description from "./componenets/Description/Description";
import Menu from "./componenets/Menu/Menu";
import menuMaster from "./Menu-Master/menuMaster";
import CartData from "./store/cartData";
// import reactDom from "react-dom";
// import Background from "./componenets/UI/Background";

function App() {
  const [order, setOrder] = useState([{ quantity: 0 }]);
  const addOrderHandler = function (newOrderAddition) {
    console.log("fianlly to App");
    setOrder(() => [newOrderAddition, ...order]);
  };

  return (
    // <CartData.Provider value={{ currItems: 5, onShowModal: showModalHandler }}>
    <div className="App">
      <Header order={order} />
      <Description />
      <Menu menuMaster={menuMaster} onAddOrder={addOrderHandler} />
      <div>I AM MODAL</div>
    </div>
    // </CartData.Provider>
  );
}

export default App;

// const [blogposts, setBlogposts] = useState(null);
// useEffect(() => {
//   fetch("http://localhost:8000/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }, []);
