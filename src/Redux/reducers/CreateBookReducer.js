import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS } from "../ActionTypes/BookActionType";

const CreateBookReducer=(state={},action)=>{
        switch(action.type){
            case CREATE_BOOK_REQUEST:
                return {
                    isLoading:true
                }
             case CREATE_BOOK_SUCCESS:
                return {
                    isLoading:false,
                    data:action.payload,
                } 
             case CREATE_BOOK_FAIL:
                return {
                    isLoading:false,
                    error:action.payload,
                }  
            default:{
                return state;
            }       

        }
    
    }

    export default CreateBookReducer;