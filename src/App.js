import "./App.css";
import Header from "./componenets/Header/Header";
import Description from "./componenets/Description/Description";
import Menu from "./componenets/Menu/Menu";
import menuMaster from "./Menu-Master/menuMaster";
// import Background from "./componenets/UI/Background";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Menu menuMaster={menuMaster} />
    </div>
  );
}

export default App;
