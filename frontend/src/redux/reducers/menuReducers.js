import {
  ALL_MENU_REQUEST,
  ALL_MENU_FAIL,
  ALL_MENU_SUCCESS,
  ALL_MENU_FILTER,
  ALL_MENU_FILTER_RESET,
  MENU_DETAILS_REQUEST,
  MENU_DETAILS_SUCCESS,
  MENU_DETAILS_FAIL,
} from "../contants/menuContants";

// menuList reducer = all menu list and filter
export const menuListReducer = (
  state = { FoodData: [], filterData: [] },
  action
) => {
  switch (action.type) {
    case ALL_MENU_REQUEST:
      return { loading: true, FoodData: [], filterData: [] };
    case ALL_MENU_SUCCESS:
      return {
        loading: false,
        FoodData: action.payload,
        filterData: action.payload,
      };
    case ALL_MENU_FAIL:
      return { loading: false, error: action.payload };
    case ALL_MENU_FILTER:
      return { ...state, filterData: action.payload }; // only updating filter data
    case ALL_MENU_FILTER_RESET:
      return { ...state, filterData: state.FoodData };
    default:
      return state;
  }
};

// single menu detail
export const menuDetailsReducer = (
  state = { food: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case MENU_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MENU_DETAILS_SUCCESS:
      return { loading: false, food: action.payload };
    case MENU_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
