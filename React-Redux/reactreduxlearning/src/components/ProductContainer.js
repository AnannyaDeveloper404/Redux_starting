import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./redux";

function ProductsContainer(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return <div>HELLO</div>;
}
const mapStateToProps = (state) => {
  return {
    productsData: state.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
