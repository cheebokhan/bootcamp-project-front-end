import axios from "axios";
import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS } from "../ActionTypes/BookActionType";

const CreateBookActions=(bookData)=>{
return async dispatch =>{
    try {
        dispatch({
            type:CREATE_BOOK_REQUEST,
        });
        const confiq={
            'Content-Type':'application/json',
        };

        const {data}=await axios.post('/api/books',bookData,confiq);
         dispatch({
            type:CREATE_BOOK_SUCCESS,
            paload:data,
         })

        
    } catch (error) {
        dispatch({
            type:CREATE_BOOK_FAIL,
            paload: error.response && error.response.data.message
        })
        
    }
}
}

export default CreateBookActions;