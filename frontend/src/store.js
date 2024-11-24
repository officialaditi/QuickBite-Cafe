import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import {
  menuDetailsReducer,
  menuListReducer,
} from "./redux/reducers/menuReducers";

const reducer = combineReducers({
  menuList: menuListReducer,
  menuDetails: menuDetailsReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
