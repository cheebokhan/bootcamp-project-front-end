import { SIGNUP_REQUEST, SIGNUP_REQUEST_FAIL, SIGNUP_REQUEST_SUCCESS } from "../ActionTypes/SignUpActionTypes";

 
  const initialState = {
    isLoading: false,
    error: "",
    data: undefined
  };
  const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case SIGNUP_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          // data: action.payload,
          error: "",
        };
      case SIGNUP_REQUEST_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default: {
        return state;
      }
    }
  };
  
  export default SignUpReducer;
  