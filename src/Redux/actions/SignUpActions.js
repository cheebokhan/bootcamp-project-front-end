import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
} from "../ActionTypes/SignUpActionTypes";

export const SignUpActions = (user) => {
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
        debugger;
          dispatch({
        type: SIGNUP_REQUEST_SUCCESS,
        // payload: res.data,
        
      });

      // localStorage.setItem('userAuthData',JSON.stringify(res.data));

      })
      .catch((err)=>{
        dispatch({
          type: SIGNUP_REQUEST_FAIL,
          payload: "Invalid username or password.",
        });
      })
    
    } catch (error) {
      dispatch({
        type: SIGNUP_REQUEST_FAIL,
        payload: "Invalid username or password.",
      });
    }
  };
};
