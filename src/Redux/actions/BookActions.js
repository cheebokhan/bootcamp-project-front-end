import axios from "axios";
import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS,FETCH_BOOKS } from "../ActionTypes/BookActionType";


export const BookActions={
    CreateBookActions,
    GetBooks
}
function CreateBookActions(BookData){
return async dispatch =>{
    try {
        dispatch({
            type:CREATE_BOOK_REQUEST,
        });
        const confiq={
            'Content-Type':'application/json',
        };

        await axios.post('/api/books',BookData,confiq).then((res)=>{
             dispatch({
            type:CREATE_BOOK_SUCCESS,
            paload:res.data,
         }).catch((err)=>{
            dispatch({
                type:CREATE_BOOK_FAIL,
                paload: err.response && err.response.data.message
            })
         })
        })
        
    } catch (error) {
        dispatch({
            type:CREATE_BOOK_FAIL,
            paload: error.response && error.response.data.message
        })
        
    }
}
}


function GetBooks  () {
    return async dispatch => {
      try {
        dispatch({
          type: CREATE_BOOK_REQUEST,
        });
  
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        //make http call to our backend
        await axios.get('/api/books', config).then((res)=>{
             dispatch({
          type: FETCH_BOOKS,
          payload: res.data,
        });
        }).catch((err)=>{
            dispatch({
                type: CREATE_BOOK_FAIL,
                payload: err.response && err.response.data.message,
              });
        })
       
      } catch (error) {
        dispatch({
          type: CREATE_BOOK_FAIL,
          payload: error.response && error.response.data.message,
        });
      }
    };
  };

// export default CreateBookActions;