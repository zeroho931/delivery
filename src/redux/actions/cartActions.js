export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (itemName) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemName,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
