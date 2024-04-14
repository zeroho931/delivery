import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import MenuCard from "./MenuCard";
import CartModal from "./CartModal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>음식 주문 프로젝트</h1>
        <div className="menu-container">
          <MenuCard name="피자" price={12000} />
          <MenuCard name="햄버거" price={8000} />
          <MenuCard name="스테이크" price={25000} />
        </div>
        <CartModal />
      </div>
    </Provider>
  );
}

export default App;
