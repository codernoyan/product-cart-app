import initialState from "./initialState";
import { ADDPRODUCT, ADDTOCART } from "./actionTypes";

const productId = (products = []) => {
  const newMaxId = products.reduce((newMaxId, product) => Math.max(product.id, newMaxId), 0);
  return newMaxId + 1;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      const { productName, category, imageUrl, price, quantity } = action.payload;
      return [
        ...state,
        {
          id: productId(state),
          productName,
          category,
          imageUrl,
          price,
          quantity,
        }
      ]
    case ADDTOCART:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }
        return product;
      })
    default:
      return state;
  }
};

export default reducer;