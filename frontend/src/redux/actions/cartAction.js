import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QTY,
} from "../constants/cartConstants";

// add to cart function
export const addToCart =
  (id, qty = 1) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/foods/${id}`);
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          food: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          qty,
        },
      });
    } catch (err) {
      console.error("Error adding the item to cart", err.message);
    }
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

// remove cart function
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// update qty
export const updateQty = (id, qty) => (dispatch, getState) => {
  dispatch({ type: CART_UPDATE_QTY, payload: { id, qty } });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
