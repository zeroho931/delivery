// App.js

import React, { useState } from "react";
import "./App.css";
import MenuCard from "./MenuCard";
import CartModal from "./CartModal"; // CartModal 컴포넌트 import

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    const updatedCart = cartItems
      .map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      <h1>음식 주문 프로젝트</h1>
      <div className="menu-container">
        <MenuCard name="피자" price={12000} onAddToCart={addToCart} />
        <MenuCard name="햄버거" price={8000} onAddToCart={addToCart} />
        <MenuCard name="스테이크" price={25000} onAddToCart={addToCart} />
      </div>
      {/* CartModal 컴포넌트 렌더링 */}
      <CartModal
        cartItems={cartItems}
        totalItems={totalItems}
        totalPrice={totalPrice}
        onRemove={removeFromCart}
        onAddToCart={addToCart} // onAddToCart 함수를 props로 전달
      />
    </div>
  );
}

export default App;
