import { useEffect } from "react";
import Books from "../BookList/BookList";
import Header from "../Common/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../Redux/actions/BookActions";

function Home(){

    const dispatch=useDispatch();
    const {BookArr,BookShelfArr}=useSelector(state=>state.BookReducers);
    //const {BookArr}=BookReducers;
    debugger;
    const {userInfo}=useSelector(state=>state.Login);

    const AddToShelf = (bookObj)=>{
debugger;
dispatch(BookActions.AddToShelf(bookObj))
    }

    useEffect(()=>{
        dispatch(BookActions.GetBooks())
    },[]);

    return <div className="holder">
        <Header/>
       
    <Books BookArr={BookArr} AddToShelf={AddToShelf} BookShelfArr={BookShelfArr} userid={userInfo._id}/>
        {/* {
        BookArr.slice(0, 30).map((item, index) => {
              return (
                <Books key = {index} {...item} />
              )
              }
            )}   */}
    </div>

}

export default Home;