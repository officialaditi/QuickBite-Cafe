import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import {
  menuDetailsReducer,
  menuListReducer,
} from "./redux/reducers/menuReducers";
import { cartReducer } from "./redux/reducers/cartReducers";
import { userLoginReducer, userRegisterReducer } from "./redux/reducers/userReducers";
import { reservationReducer } from "./redux/reducers/reservationReducers";

const reducer = combineReducers({
  menuList: menuListReducer,
  menuDetails: menuDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  reservation: reservationReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
