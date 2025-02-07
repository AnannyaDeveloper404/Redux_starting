import React from 'react'
import { connect } from 'react-redux'
import {orderPizza}  from './redux';

function PizzaBox(props) {
  console.log(props);
  
  return (
    <div className='container'>
      <h2 className='text'>Number of Pizza Base available -{props.pizzaBase}</h2>
      <button className='btn' onClick={props.orderPizza}>Order Pizza</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    pizzaBase:state.pizza.pizzaBase
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    orderPizza:()=>dispatch(orderPizza())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox);
