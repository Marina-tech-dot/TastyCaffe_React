import React, {useReducer} from "react";
import { addInBasketUtils, removeFromBasketUtils } from "./basket-context.utils";

export const BasketContext = React.createContext({
  order: [],
  totalAmount: 0,
  totalPrice: 0,
  addInBasket: () => {},
  removeFromBasket: () => {},
  cleanBasket: () => {}
});


const defaultCartState = {
  order: [],
  totalAmount: 0,
  totalPrice: 0,
};

const currentCartState = JSON.parse(localStorage.getItem('order')) || defaultCartState

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return addInBasketUtils(state,action)
  }
  if (action.type === "REMOVE") {
    return removeFromBasketUtils(state, action);
  }
  if (action.type === "CLEAN") {
    return defaultCartState;
  }
  return defaultCartState;
}


export const BasketContextProvider =props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, currentCartState)

  const addInBasketHandler = (orderItem) => {
    dispatchCartAction({ type: "ADD", orderItem});
  }

  const removeFromBasketHandler = (orderItem) => {
    dispatchCartAction({ type: "REMOVE", orderItem });
  };

  const cleanBasketHandler = () => {
    dispatchCartAction({ type: "CLEAN" });
    localStorage.clear();
  }

  const cartContext = {
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    order: cartState.order,
    addInBasket: addInBasketHandler,
    removeFromBasket: removeFromBasketHandler,
    cleanBasket: cleanBasketHandler
  };

  return (
    <BasketContext.Provider value={cartContext}>
      {props.children}
    </BasketContext.Provider>
  );

}
