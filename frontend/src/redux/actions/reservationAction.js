import {
  BOOK_TABLE_REQUEST,
  BOOK_TABLE_SUCCESS,
  BOOK_TABLE_FAIL,
} from "../constants/reservationContants";
import axios from "axios";

// book table => reservation
export const bookTable =
  ({ username, date, time, guest }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: BOOK_TABLE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/reservation/`,
        { username, date, time, guest },
        config
      );

      dispatch({ type: BOOK_TABLE_SUCCESS, payload: data });
      //
    } catch (err) {
      dispatch({
        type: BOOK_TABLE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
