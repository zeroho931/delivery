import React from "react";
import { connect } from "react-redux";
import {
  clearCart,
  removeFromCart,
  addToCart as addToCartAction,
} from "./redux/actions/cartActions";

const CartModal = ({
  cartItems,
  totalItems,
  totalPrice,
  removeFromCart,
  clearCart,
  addToCart,
}) => {
  const handlePayment = () => {
    // 새 창 열기
    const receiptWindow = window.open("", "_blank");

    // 새 창에 영수증 내용 작성
    if (receiptWindow) {
      const receiptContent = `
        <h2>주문 영수증</h2>
        <ul>
          ${cartItems
            .map(
              (item) =>
                `<li>${item.name} - 수량: ${item.quantity}, 가격: ${
                  item.price * item.quantity
                }원</li>`
            )
            .join("")}
        </ul>
        <p>총 금액: ${totalPrice}원</p>
        <button onclick="window.opener.location.reload(); window.close();">닫기</button>
      `;

      receiptWindow.document.write(receiptContent);
    }

    // 결제 후 장바구니 비우기
    clearCart();
  };

  return (
    <div className="cart-modal">
      <h2>장바구니</h2>
      {cartItems.map((item) => (
        <div key={item.name} className="cart-item">
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.name)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      ))}
      <div className="cart-summary">
        <p>총 수량: {totalItems}</p>
        <p>총 금액: {totalPrice}원</p>
        {/* 결제 버튼 */}
        <button onClick={handlePayment}>결제</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  totalItems: state.cart.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  ),
  totalPrice: state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ),
});

const mapDispatchToProps = {
  removeFromCart,
  clearCart,
  addToCart: addToCartAction, // Redux 액션으로 연결된 addToCart 사용
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
