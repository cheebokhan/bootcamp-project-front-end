import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../ActionTypes/LoginActionTypes";

const LoginActions = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const confiq = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post("/api/users/login", user, confiq);
      dispatch({
        type: LOGIN_REQUEST_SUCCESS,
        payload: data,
      });
      localStorage.setItem('userAuthData', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: LOGIN_REQUEST_FAIL,
        payload: "Invalid username or password.",
      });
    }
  };
};

//Logout action
const logoutUserAction = () => async dispatch => {
  try {
    //Remove user from storage
    localStorage.removeItem('userAuthData');
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {}
};

export {LoginActions,logoutUserAction}
