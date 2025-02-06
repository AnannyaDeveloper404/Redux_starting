const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger=reduxLogger.createLogger();
const applyMiddleware=redux.applyMiddleware;
const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

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
function orderBurger() {
  return {
    type: ORDER_BURGER,
    shop_name: "burger shop",
  };
}

// Reducer
const initialBurgerState = {
  burgerBun: 200,
};
const initialPizzaState = {
  pizzaBase: 100,
};

const reducerForPizza = (state = initialPizzaState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};
const reducerForBurger = (state = initialBurgerState, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        burgerBun: state.burgerBun - 2,
      };
    default:
      return state;
  }
};
//STORE
// 1- Store needs to hold application state.
const reducer = combineReducers({
  pizza: reducerForPizza,
  burger: reducerForBurger,
});
const store = createStore(reducer,applyMiddleware(logger));

// 2- It exposes a method called getState which gives your application access to the current state in the store.
console.log(store.getState());

// 3- register Listeners via subscriber(listener)
const unsubscribe = store.subscribe(() =>
  {}
); //this lines will be triggered anytime there is a change in the state

// 4- It allows to update the state via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
unsubscribe();
store.dispatch(orderPizza());
// 5- Handles unregistering of listeners via the function returned by subscribe(listener)
