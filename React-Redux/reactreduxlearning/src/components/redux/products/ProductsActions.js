import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsTypes";
// const axios = require("React-Redux/reactreduxlearningnode_modules/axios");
import  axios  from "axios";
export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchSuccess = (products) => {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
};
export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(err.message);
      });
  };
};
