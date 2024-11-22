import {
  ALL_MENU_REQUEST,
  ALL_MENU_SUCCESS,
  ALL_MENU_FAIL,
  ALL_MENU_FILTER,
} from "../contants/menuContants";
import axios from "axios";

// Action to get all menu data
export const getMenuList = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_MENU_REQUEST });

    const { data } = await axios.get(`/api/foods`); // Fetch all data
    dispatch({ type: ALL_MENU_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ALL_MENU_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

// action for filter the menu list data
export const filterMenuList = (filters) => (dispatch, getState) => {
  const {
    menuList: { FoodData },
  } = getState();

  let filterData = [...FoodData];

  if (filters.category) {
    filterData = filterData.filter(
      (item) => item.category === filters.category
    );
  }
  if (filters.type) {
    filterData = filterData.filter((item) => item.type === filters.type);
  }

  dispatch({ type: ALL_MENU_FILTER, payload: filterData });
};
