import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
} from "../ActionTypes/LoginActionTypes";

export const LoginActions = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const confiq = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post("/api/login", user, confiq);
      dispatch({
        type: LOGIN_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_REQUEST_FAIL,
        payload: "Invalid username or password.",
      });
    }
  };
};
