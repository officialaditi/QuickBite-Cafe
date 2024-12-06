import {
  ALL_MENU_REQUEST,
  ALL_MENU_SUCCESS,
  ALL_MENU_FAIL,
  ALL_MENU_FILTER,
  MENU_DETAILS_REQUEST,
  MENU_DETAILS_SUCCESS,
  MENU_DETAILS_FAIL,
} from "../constants/menuConstants";
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

  // filter by category
  if (filters.category) {
    filterData = filterData.filter(
      (item) => item.category === filters.category
    );
  }
  // filter by type
  if (filters.type) {
    filterData = filterData.filter((item) => item.type === filters.type);
  }
  // Filter by search term if provided
  if (filters.searchTerm) {
    filterData = filterData.filter(
      (item) =>
        item.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(filters.searchTerm.toLowerCase())
    );
  }

  dispatch({ type: ALL_MENU_FILTER, payload: filterData });
};

// single menu detail
export const getMenuDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MENU_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/foods/${id}`);
    dispatch({ type: MENU_DETAILS_SUCCESS, payload: data });
    //
  } catch (err) {
    dispatch({
      type: MENU_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
