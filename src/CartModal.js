import React from "react";

const CartModal = ({
  cartItems,
  totalItems,
  totalPrice,
  onRemove,
  onAddToCart,
}) => {
  // 결제 처리 함수
  const handlePayment = () => {
    // 새 창 열기
    const receiptWindow = window.open("", "_blank");

    // 새 창이 정상적으로 열렸는지 확인
    if (receiptWindow) {
      // 영수증 내용 작성
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

      // 새 창에 영수증 내용 쓰기
      receiptWindow.document.write(receiptContent);
    }

    // 결제 후 장바구니 초기화
    onClearCart();
  };

  // 장바구니 초기화 함수
  const onClearCart = () => {
    // onRemove 함수를 이용하여 모든 항목을 제거
    cartItems.forEach((item) => onRemove(item.name));
  };

  return (
    <div className="cart-modal">
      <h2>장바구니</h2>
      {cartItems.map((item) => (
        <div key={item.name} className="cart-item">
          <span>{item.name}</span>
          <button onClick={() => onRemove(item.name)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onAddToCart(item)}>+</button>
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

export default CartModal;
