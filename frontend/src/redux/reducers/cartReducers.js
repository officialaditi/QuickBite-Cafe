import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QTY,
} from "../constants/cartConstants";

// Add to cart reducer
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    // Add item to cart
    case CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i.food === item.food);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.food === existItem.food ? item : i
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }

    // Update quantity
    case CART_UPDATE_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.food === action.payload.id ? { ...x, qty: action.payload.qty } : x
        ),
      };

    // Remove item from cart
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.food !== action.payload),
      };

    default:
      return state;
  }
};
