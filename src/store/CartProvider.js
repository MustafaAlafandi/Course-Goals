import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultState = { items: [], totalAmount: 0 };
const cartItemsReducer = (state, action) => {
  if (action.type === "ADD") {
    let newState = { ...state };
    let targetElementIndex = newState.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (targetElementIndex === -1) newState.items.push(action.item);
    else newState.items[targetElementIndex].amount += action.item.amount;
    newState.totalAmount = newState.items
      .reduce((sum, cur) => sum + cur.amount * cur.price, 0)
      .toFixed(2);
    return newState;
  } else if (action.type === "REMOVE") {
    let newState = { ...state };
    const removeElementIndex = newState.items.findIndex(
      (item) => item.id === action.id
    );
    if (--newState.items[removeElementIndex].amount === 0)
      newState.items = [
        ...newState.items.slice(0, removeElementIndex),
        ...newState.items.slice(removeElementIndex + 1),
      ];
    // newState.items = newState.items.filter((item) => item.amount > 0);
    newState.totalAmount = newState.items
      .reduce((sum, cur) => sum + cur.amount * cur.price, 0)
      .toFixed(2);
    return newState;
  }
  return defaultState;
};
const CartContextProvider = (props) => {
  let [cartItems, dispatchCI] = useReducer(cartItemsReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatchCI({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCI({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: [...cartItems.items],
    totalAmount: cartItems.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
