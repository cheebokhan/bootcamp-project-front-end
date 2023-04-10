import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
} from "../ActionTypes/SignUpActionTypes";

export const SignUpActions = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SIGNUP_REQUEST,
      });
      const confiq = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post("/api/Signup", user, confiq);
      dispatch({
        type: SIGNUP_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_REQUEST_FAIL,
        payload: "Invalid username or password.",
      });
    }
  };
};
