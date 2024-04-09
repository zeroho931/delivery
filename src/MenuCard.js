// MenuCard.js

import React from "react";

const MenuCard = ({ name, price, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ name, price });
  };

  return (
    <div className="menu-card">
      <h3>{name}</h3>
      <p>가격: {price}원</p>
      <button onClick={handleAddToCart}>추가하기</button>
    </div>
  );
};

export default MenuCard;
