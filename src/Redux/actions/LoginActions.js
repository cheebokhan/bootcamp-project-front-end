import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../ActionTypes/LoginActionTypes";



const LoginActions = (user,navigate) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const confiq = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post("/api/users/login", user, confiq).then((res)=>{
        dispatch({
          type: LOGIN_REQUEST_SUCCESS,
          payload:res.data,
        });
        localStorage.setItem('userAuthData', JSON.stringify(res.data));
        navigate('/userdashboard');
      }).catch((error)=>{
        dispatch({
          type: LOGIN_REQUEST_FAIL,
          payload: "Invalid username or password.",
        });
      })
     
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
  debugger;
  try {
    //Remove user from storage
    localStorage.removeItem('userAuthData');
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {}
};

export {LoginActions,logoutUserAction}
