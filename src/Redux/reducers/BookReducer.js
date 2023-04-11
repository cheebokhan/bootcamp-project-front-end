import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOKS,ADDTOSHELF_BOOK_FAIL,ADDTOSHELF_BOOK_REQUEST,ADDTOSHELF_BOOK_SUCCESS, FETCH_BOOKSHELF } from "../ActionTypes/BookActionType";


const INITIAL_STATE={BookArr:[],BookShelfArr:[],isLoading:false,error:''};


const CreateBookReducer=(state=INITIAL_STATE,action)=>{
        switch(action.type){
            case CREATE_BOOK_REQUEST:
            case ADDTOSHELF_BOOK_REQUEST:
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
                case ADDTOSHELF_BOOK_SUCCESS:
                    debugger;

                const {BookData, UpdatedbookShelf} = action.payload;
                const {bookid, userid} = UpdatedbookShelf
                const {startreading} = BookData;
                var bookShelfArrNew = state.BookShelfArr;

                var selectedBookShelf = state.BookShelfArr.find(a=> a._id == action.payload._id)

                if(startreading)
                bookShelfArrNew.push(UpdatedbookShelf)
                  else
                  {
                    bookShelfArrNew = bookShelfArrNew.filter(a=>a.bookid!=bookid && a.userid == userid);
                  }
                  return{
                    ...state, BookShelfArr:[...bookShelfArrNew], isLoading:false, error:''
                  }


                case FETCH_BOOKSHELF:
                    return {
                        ...state,
                        BookShelfArr:action.payload
                    }    
             case CREATE_BOOK_FAIL:
                case ADDTOSHELF_BOOK_FAIL:
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