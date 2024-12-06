import {
  BOOK_TABLE_REQUEST,
  BOOK_TABLE_SUCCESS,
  BOOK_TABLE_FAIL,
} from "../constants/reservationContants";

// book table
export const reservationReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_TABLE_REQUEST:
      return { loading: true };
    case BOOK_TABLE_SUCCESS:
      return { loading: false, reservationDetails: action.payload };
    case BOOK_TABLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
