import {
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAIL,
  } from '../ActionTypes/BookActionType';
  
  const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  export const DeleteBookReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_BOOK_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case DELETE_BOOK_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
      case DELETE_BOOK_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  