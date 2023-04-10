import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../ActionTypes/LoginActionTypes";

const initialState = {
  isLoading: false,
  error: "",
  userInfo:"",
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        error: "",
      };
    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      case USER_LOGOUT_SUCCESS:
        return{

        };
    default: {
      return state;
    }
  }
};

export default LoginReducer;
