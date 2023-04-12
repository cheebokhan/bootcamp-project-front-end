import { useEffect } from "react";
// import Books from "../BookList/BookList";
import Header from "../Common/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../Redux/actions/BookActions";
import BookShelf from "../Userpages/BookShelf";
import BookDetails from "../BookDetails/BookDetails";

function UserHome(){

    const dispatch=useDispatch();
    const {BookArr,BookShelfArr,isLoading}=useSelector(state=>state.BookReducers);
    //const {BookArr}=BookReducers;
    debugger;
    const {userInfo}=useSelector(state=>state.Login);

    const userbook=BookArr.filter(a=>a.createdBy==userInfo._id);
    

    const AddToShelf = (bookObj)=>{
debugger;
dispatch(BookActions.AddToShelf(bookObj))
    }

    // useEffect(()=>{
    //     dispatch(BookActions.GetBooks())
    // },[]);

    return <div className="holder">
        <Header/>
        <BookShelf BookArr={BookArr} AddToShelf={AddToShelf} BookShelfArr={BookShelfArr} userid={userInfo._id}
     isLoading={isLoading}  userbook={userbook}/>

      {/* <BookDetails BookArr={BookArr} AddToShelf={AddToShelf} BookShelfArr={BookShelfArr} userid={userInfo._id}
     isLoading={isLoading}  userbook={userbook}/> */}
     
        {/* {
        BookArr.slice(0, 30).map((item, index) => {
              return (
                <Books key = {index} {...item} />
              )
              }
            )}   */}
    </div>

}

export default UserHome;