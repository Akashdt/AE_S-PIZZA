import { combineReducers, createStore, applyMiddleware } from "redux";
import { getAllPizzaReducer,addPizzaReducer,getPizzaByIdReducer ,editPizzaReducer} from "./reducers/pizzareducers";
import thunk from "redux-thunk";
import { getAllOrdersReducer} from "./reducers/orderReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import{loginUserReducer,registerUserReducer,getAllUsersReducer}from './reducers/userReducer'
import { placeOrderReducer , getUserOrdersReducer  } from './reducers/orderReducer'

const finalReducer = combineReducers({
  getAllPizzaReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,placeOrderReducer,getUserOrdersReducer,addPizzaReducer,getPizzaByIdReducer,editPizzaReducer, getAllOrdersReducer,getAllUsersReducer
});

/* set the local storage for our data ...... */
// check if there is data in the localstorage named cartIOtms if exists then parse the data and store it else assign empty array
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer :{
    currentUser : currentUser
}
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;