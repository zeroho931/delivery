import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./redux/actions/cartActions";

const MenuCard = ({ name, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ name, price });
  };

  return (
    <div className="menu-card">
      <h3>{name}</h3>
      <p>가격: {price}원</p>
      <button onClick={handleAddToCart}>추가하기</button>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(MenuCard);
