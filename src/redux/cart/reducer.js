import initialState from "./initialState";
import { ADDED, DECREMENT, DELETED, INCREMENT } from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.map((cart) => {
        if (cart.id === action.payload) {
          return {
            ...cart,
            quantity: cart.quantity + 1,
          }
        }
        return cart;
      })
    case DECREMENT:
      return state.map((cart) => {
        if (cart.id === action.payload) {
          return {
            ...cart,
            quantity: cart.quantity - 1
          }
        }
        return cart;
      })

      case DELETED:
        return state.filter((cart)=> cart.id !== action.payload)

    default:
      return state;
  }
};

export default reducer;