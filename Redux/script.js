const redux = require("redux");
const createStore = redux.createStore();

const ORDER_PIZZA = "ORDER_PIZZA";

// const action={
//     type :ORDER_PIZZA,
//     shop_name:"pizza shop"
// }

// Action creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "pizza shop",
  };
}

// Reducer
const initialState = {
  pizzaBase: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        pizzaBase: pizzaBase - 1,
      };
    default:
      return state;
  }
};
//STORE
// 1- Store needs to hold application state.
const store=createStore(reducer)