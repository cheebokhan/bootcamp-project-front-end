import { Link } from "react-router-dom";
import Header from "../Common/Header/Header";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../Redux/actions/BookActions";

function UserDashboard(props) {
    const dispatch=useDispatch();
    const {BookArr,BookShelfArr}=useSelector(state=>state.BookReducers);
    //const {BookArr}=BookReducers;
    debugger;
    const {userInfo}=useSelector(state=>state.Login);
    debugger;
    useEffect(()=>{
        dispatch(BookActions.GetBooks())
    },[]);

  //function
  // if AddToShelf == function()
//   const {AddToShelf} = props;
  return (
    <div>
        <Header/>
        <div> 
            <Link className="text-decoration-none text-black px-2" style={{fontSize:"20px",fontWeight:"bold"}}>Private Library</Link>
            <Link className="text-decoration-none text-black px-2" style={{fontSize:"20px",fontWeight:"bold"}}>Book Shelf</Link>
        </div>
      {
        !BookArr || !userInfo || BookArr.length<1 ? <p>No Book Found</p> : userInfo._id == BookArr.createdBy ? 
        BookArr.map((el,index)=>{
           if(BookArr.createdBy==userInfo._id) {
            return <div className='book-item  flex flex-column col-sm-3 flex-sb my-2' key={index}>
            <div className='book-item-img'>
              <img src = {""} alt = "cover" />
            </div>
            <div className='book-item-info text-center'>
              <Link to = {`/addbook`} >
                <div className='book-item-info-item title fw-7 fs-18'>
                  <span>{el.title} </span>
                </div>
              </Link>
      
              <div className='book-item-info-item author fs-15'>
                <span className='text-capitalize fw-7'>Author: </span>
                <span>{el.author} </span>
              </div>
      
              <div className='book-item-info-item edition-count fs-15'>
                <span className='text-capitalize fw-7'>Total Editions: </span>
                <span>2000</span>
              </div>
      
              <div className='book-item-info-item publish-year fs-15'>
                <span className='text-capitalize fw-7'>First Publish Year: </span>
                <span>2010</span>
              </div>
      
      
         </div>
      
              </div>
           }
           
        }):<div></div> 
    }
       
    </div>

  )
}

export default UserDashboard