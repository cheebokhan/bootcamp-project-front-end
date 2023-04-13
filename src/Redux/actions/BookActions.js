import axios from "axios";
import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS,FETCH_BOOKS ,ADDTOSHELF_BOOK_FAIL,ADDTOSHELF_BOOK_SUCCESS,ADDTOSHELF_BOOK_REQUEST, FETCH_BOOKSHELF, UPDATE_BOOK_REQUEST, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAIL, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAIL} from "../ActionTypes/BookActionType";
import { useNavigate } from "react-router-dom";



export const BookActions={
    CreateBookActions,
    GetBooks,
    AddToShelf,
    UpdateBookActions,
    DeleteBook
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


  function UpdateBookActions(bookId, bookData,navigate) {


    debugger
    return async (dispatch) => {
      try {
        dispatch({
          type: UPDATE_BOOK_REQUEST,
        });
  
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
  
         await axios.put(`/api/books/${bookId}`, bookData, config).then((res)=>{
          dispatch({
            type: UPDATE_BOOK_SUCCESS,
            payload: res.data,
          });
          navigate('/userdashboard');
         }).catch((error)=>{
          dispatch({
            type: UPDATE_BOOK_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
         })
  
       
      } catch (error) {
        dispatch({
          type: UPDATE_BOOK_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
  }
  

   function  DeleteBook(bookId) {
    debugger
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
      });
  
      await axios.delete(`/api/books/${bookId}`).then((res)=>{
        dispatch({
          type: DELETE_BOOK_SUCCESS,
          payload: bookId,
        });
      }).catch((error)=>{
        dispatch({
          type: DELETE_BOOK_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      })
  
     
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
}
