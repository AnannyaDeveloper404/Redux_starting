const configureStore = require("@reduxjs/toolkit").configureStore;
//using configureStore instead of createStore :
// ------------------------ reasons ---------------------------
//1.Automatically combining multiple reducers
//2. Automatically add thunk middleware
//3.Automatically setup redux developer tool
const pizzaReducer = require("../features/pizza/pizzaSlice");
const burgerReducer = require("../features/burger/burgerSlice");
const reduxLogger = require("redux-logger");
const productReducer = require("../features/product/productSlice");
const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
