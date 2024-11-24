import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import { menuListReducer } from "./redux/reducers/menuReducers";

const reducer = combineReducers({
  menuList: menuListReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
