import React from "react";
import { useSelector, useDispatch } from "react-redux";
import orderPizza from "./redux";

function HooksContainer() {
  const pizzaBase = useSelector((state) => state.pizzaBase);
  console.log(pizzaBase);
  const dispatch=useDispatch();
// console.log(useDispatch);

  return (
    <div className="container">
      <h2 className="text">Number of Pizza Base available -{pizzaBase}</h2>
      <button className="btn" onClick={()=>dispatch(orderPizza())}>Order Pizza</button>
    </div>
  );
}

export default HooksContainer;
