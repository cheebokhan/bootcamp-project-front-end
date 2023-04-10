import { useEffect } from "react";
import Books from "../BookList/BookList";
import Header from "../Common/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../Redux/actions/BookActions";

function Home(){
    var globalstate =useSelector(state=>state);

    const BookReducers=useSelector(state=>state.BookReducers);
    const {BookArr}=BookReducers;
    debugger;


    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(BookActions.GetBooks())
    },[]);

    return <div className="holder">
        <Header/>
        <Books
          BookArr={BookArr}
         />
    </div>

}

export default Home;