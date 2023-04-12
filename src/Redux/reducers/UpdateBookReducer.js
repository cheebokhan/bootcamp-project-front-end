import { UPDATE_BOOK_FAIL,UPDATE_BOOK_REQUEST,UPDATE_BOOK_SUCCESS } from "../ActionTypes/BookActionType";



const INITIAL_STATE={isLoading:false,updatebook:[],error:''}

export const UpdateBookReducer = (state =INITIAL_STATE , action) => {
    switch (action.type) {

      case UPDATE_BOOK_REQUEST:
        return {
             loading: true
             };
      case UPDATE_BOOK_SUCCESS:
        return { 
            ...state,
            loading: false,
             book: action.payload
             };
      case UPDATE_BOOK_FAIL:
        return { 
            ...state,
            loading: false,
             error: action.payload 
            };
      default:
        return state;
    }
  };
  