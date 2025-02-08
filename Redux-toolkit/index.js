const store = require("./app/store");
const { burgerActions } = require("./features/burger/burgerSlice");
const {pizzaActions} = require("./features/pizza/pizzaSlice");
const { fetchProducts } = require("./features/product/productSlice");
// console.log("INITIAL STATE:", store.getState());

const unsubscribe = store.subscribe(() => {
  
});
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(burgerActions.burger_order())
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(burgerActions.burger_order())/
store.dispatch(fetchProducts()).then(()=>{
    console.log(store.getState());
    
})
unsubscribe()