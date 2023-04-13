import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
} from "../ActionTypes/SignUpActionTypes";

export const SignUpActions = (user,navigate) => {
  debugger;
  return async (dispatch) => {
    try {
      dispatch({
        type: SIGNUP_REQUEST,
      });
      const confiq = {
        "Content-Type": "application/json",
      };

      await axios.post('/api/users/register', user, confiq).then((res)=>{
          dispatch({
        type: SIGNUP_REQUEST_SUCCESS,
      });
      navigate("/login")
      }).catch((err)=>{
        dispatch({
          type: SIGNUP_REQUEST_FAIL,
          payload: "username or email is already exist.",
        });
        alert("username or email is already exist");
      })
    
    } catch (error) {
      dispatch({
        type: SIGNUP_REQUEST_FAIL,
        payload: "username or email is already exist.",
      });
    }
  };
};
