import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducer";
import { productReducer } from "./products/ProductsReducer";
const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  product: productReducer,
});
export default rootReducer;
