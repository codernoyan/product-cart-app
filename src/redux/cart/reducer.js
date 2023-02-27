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
      return state.filter((cart) => cart.id !== action.payload)
    case ADDED:
      const updatedCart = [...state];
      let itemExist = false;

      updatedCart.forEach((product => {
        if (product.id === action.payload.id) {
          itemExist = true;
        }
      }));

      if (updatedCart.length > 0 && !itemExist) {
        updatedCart.push({
          ...action.payload,
          quantity: 1,
        });
        return updatedCart;

      } else if (updatedCart.length > 0) {
        updatedCart.forEach((product) => {
          if (product.id === action.payload.id) {
            product.quantity = product.quantity + 1;
            return updatedCart;
          }
        });

      } else if (updatedCart.length === 0) {
        updatedCart.push({
          ...action.payload,
          quantity: 1,
        });
        return updatedCart;

      } else {
        return updatedCart;
      }
      return updatedCart;
    default:
      return state;
  }
};

export default reducer;