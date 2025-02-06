const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").thunk;
const axios = require("axios");
const createStore = redux.createStore;
//state
const initialState = {
  loading: false,
  products: [],
  error: false,
};

//Actions
function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  };
}
function fetchSuccess(products) {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
}
function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

//Reducers

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

// Thunk Action creator
// In thunk,action creator should return function
// This function is not pure. i.e, It can contain async operation
const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchRequest());

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data.map((p) => p.title);
        dispatch(fetchSuccess(products))
      })
      .catch((error) => {
        dispatch(fetchError());
      });
  };
};

// Creating store
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchProduct());
