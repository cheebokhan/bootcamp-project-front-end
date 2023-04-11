import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOKS } from "../ActionTypes/BookActionType";


const INITIAL_STATE={BookArr:[],isLoading:false,error:''};


const CreateBookReducer=(state=INITIAL_STATE,action)=>{
        switch(action.type){
            case CREATE_BOOK_REQUEST:
                return {
                    ...state,
                    isLoading:true
                }
                case FETCH_BOOKS:
                    return {
                        ...state,
                        isLoading:false,
                        BookArr:action.payload,
                        error:'',
                    }
             case CREATE_BOOK_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    data:action.payload,
                } 
             case CREATE_BOOK_FAIL:
                return {
                    ...state,
                    isLoading:false,
                    error:action.payload,
                }  
            default:{
                return state;
            }       

        }
    
    }

    export default CreateBookReducer;