import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import {
  menuDetailsReducer,
  menuListReducer,
} from "./redux/reducers/menuReducers";
import { cartReducer } from "./redux/reducers/cartReducers";
import { userLoginReducer } from "./redux/reducers/userReducers";

const reducer = combineReducers({
  menuList: menuListReducer,
  menuDetails: menuDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
