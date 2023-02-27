import { ADDPRODUCT, ADDTOCART } from "./actionTypes" 
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