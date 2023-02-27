import { ADDPRODUCT, ADDTOCART, DELETEPRODUCT } from "./actionTypes"
export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const addToCart = (id) => {
  return {
    type: ADDTOCART,
    payload: id
  }
}

export const deletedProduct = (id, quantity) => {
  return {
    type: DELETEPRODUCT,
    payload: {
      id,
      quantity,
    }
  }
}