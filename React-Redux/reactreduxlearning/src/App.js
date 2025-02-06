import BurgerBox from "./components/BurgerBox";
import CustomerChoice from "./components/CustomerChoice";
import HooksContainer from "./components/HooksContainer";
import PizzaBox from "./components/PizzaBox";
import store from "./components/redux/store";
import { Provider } from "react-redux";
function App() {
  return (
   <Provider store={store}>
    {/* <PizzaBox/>
    <BurgerBox/>
     */}
     <CustomerChoice/>
   </Provider>
  );
}

export default App;
