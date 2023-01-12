export const addInBasketUtils = (state, action) => {
  const totalAmount = state.totalAmount + action.orderItem.amount
  const totalPrice = state.totalPrice + action.orderItem.amount * action.orderItem.price

      const isTheSameOrder = state.order.findIndex(
        (el) => el.id === action.orderItem.id
      );

      let actualOrder

      if (isTheSameOrder >= 0) {
        const updatedAmount = state.order[isTheSameOrder]['amount'] + action.orderItem.amount

        const shouldChangeItem = {
          ...state.order[isTheSameOrder],
          amount: updatedAmount,
          totalPrice: action.orderItem.price * updatedAmount,
        };

        const orderCopy = [...state.order]
        orderCopy[isTheSameOrder] = shouldChangeItem;
        actualOrder = orderCopy
      } else {
        actualOrder = state.order.concat({
          ...action.orderItem,
          totalPrice: action.orderItem.price * action.orderItem.amount });
      }

      const result = {order: actualOrder, totalAmount, totalPrice}
      localStorage.setItem(
          "order",
          JSON.stringify(result)
        );
    return result
}

export const removeFromBasketUtils = (state, action) => {
  const totalAmount = state.totalAmount - action.orderItem.amount
  const totalPrice = state.totalPrice - action.orderItem.amount * action.orderItem.price

      const isTheSameOrder = state.order.findIndex(
        (el) => el.id === action.orderItem.id
      );

      let actualOrder

      if (isTheSameOrder >= 0 && state.order[isTheSameOrder]["amount"] >= 2) {
        const updatedAmount =
          state.order[isTheSameOrder]["amount"] - action.orderItem.amount;

        const shouldChangeItem = {
          ...state.order[isTheSameOrder],
          amount: updatedAmount,
          totalPrice: action.orderItem.price * updatedAmount,
        };

        const orderCopy = [...state.order];
        orderCopy[isTheSameOrder] = shouldChangeItem;
        actualOrder = orderCopy;
      } else {
        actualOrder = state.order.filter((item) => item.id !== action.orderItem.id);
      }

      const result = {order: actualOrder, totalAmount, totalPrice}
      localStorage.setItem(
          "order",
          JSON.stringify(result)
        );
    return result
}