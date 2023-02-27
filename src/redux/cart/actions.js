import { ADDED, DECREMENT, DELETED, INCREMENT } from "./actionTypes";

export const added = (product) => {
  return {
    type: ADDED,
    payload: {...product},
  }
};

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  }
};

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id
  }
};

export const deleted = (id)=>{
  return {
    type: DELETED,
    payload: id
  }
}