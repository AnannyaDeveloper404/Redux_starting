const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  pizzaBase: 1000,
};
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBase--;
    },
  },
});

module.exports=pizzaSlice.reducer; //default export

module.exports.pizzaActions=pizzaSlice.actions //named export