import { ADDPRODUCT, ADDTOCART, DELETEPRODUCT, DECREMENT, INCREMENT } from "./actionTypes"
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

export const productIncrement = (id)=>{
  return{
    type: INCREMENT,
    payload: id
  }
}

export const productDecrement = (id)=>{
  return {
    type: DECREMENT,
    payload: id
  }
}