import axios from "axios";
import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS,FETCH_BOOKS ,ADDTOSHELF_BOOK_FAIL,ADDTOSHELF_BOOK_SUCCESS,ADDTOSHELF_BOOK_REQUEST, FETCH_BOOKSHELF} from "../ActionTypes/BookActionType";


export const BookActions={
    CreateBookActions,
    GetBooks,
    AddToShelf
}

function AddToShelf(BookData){

  debugger;
  return async dispatch =>{
    try {
        dispatch({
            type:ADDTOSHELF_BOOK_REQUEST,
        });
        const confiq={
            'Content-Type':'application/json',
        };

        await axios.post('/api/books/addtoshelf',BookData,confiq).then((res)=>{
             dispatch({
            type:ADDTOSHELF_BOOK_SUCCESS,
            payload:{BookData,UpdatedbookShelf: res.data},
         })
        }).catch((err)=>{
          dispatch({
              type:ADDTOSHELF_BOOK_FAIL,
              payload: err.response && err.response.data.message
          })
       })
        
    } catch (error) {
        dispatch({
            type:ADDTOSHELF_BOOK_FAIL,
            payload: error.response && error.response.data.message
        })
        
    }
}
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
            payload:res.data,
         })
        }).catch((err)=>{
          dispatch({
              type:CREATE_BOOK_FAIL,
              payload: err.response && err.response.data.message
          })
       })
        
    } catch (error) {
        dispatch({
            type:CREATE_BOOK_FAIL,
            payload: error.response && error.response.data.message
        })
        
    }
}
}


function GetBooks  () {
  debugger;
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
          payload: res.data.book,
        });
        dispatch({
          type: FETCH_BOOKSHELF,
          payload: res.data.bookShelf,
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