import { useEffect } from "react";
import Books from "../BookList/BookList";
import Header from "../Common/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../Redux/actions/BookActions";
import { Link } from "react-router-dom";
// import BookShelf from "../Userpages/BookShelf";

function Home(){
debugger;

    const dispatch=useDispatch();
    const {BookArr,BookShelfArr,isLoading}=useSelector(state=>state.BookReducers);
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
        {
            (!userInfo || userInfo.length<1)? " ":
            <div> 
            <Link className="text-decoration-none text-black px-2 btn btn-outline-info m-3" to='/userdashboard' 
            style={{fontSize:"20px",fontWeight:"bold",border:"none"}}>Private Library</Link>

            <Link className="text-decoration-none text-black px-2 btn btn-outline-info m-3" to='/bookshelf'
            style={{fontSize:"20px",fontWeight:"bold",border:"none"}}>Book Shelf</Link>
        </div> 
        }
        
       
    <Books BookArr={BookArr} AddToShelf={AddToShelf} BookShelfArr={BookShelfArr} userid={userInfo._id}
     isLoading={isLoading}/>
        {/* <BookShelf BookArr={BookArr} AddToShelf={AddToShelf} BookShelfArr={BookShelfArr} userid={userInfo._id}
     isLoading={isLoading}/> */}

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