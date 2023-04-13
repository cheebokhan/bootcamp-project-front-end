import { Link, useNavigate } from "react-router-dom";
import Header from "../Common/Header/Header";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BookActions } from "../../Redux/actions/BookActions";
import Loader from "../Loader/Loader";

function UserDashboard(props) {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const {BookArr,BookShelfArr}=useSelector(state=>state.BookReducers);
    debugger;
    var {userInfo}=useSelector(state=>state.Login);
    debugger;

    useEffect(()=>{
        dispatch(BookActions.GetBooks())
    },[]);

    function navigateedit(id){
      debugger;
     navigate(`/editbook/${id}`)
  debugger
  
    }

    //this function call the BookActions method and delete user from data-base
    function Deletebook(id){
      dispatch(BookActions.DeleteBook(id));
      alert("successfully deleted");
      navigate('/');
    }

    // var {userInfo}=props

    const userbook=BookArr.filter(a=>a.createdBy==userInfo._id);
    debugger;

  //function
  // if AddToShelf == function()
//   const {AddToShelf} = props;
  return (
    <div>
        <Header/>
        <div> 
            <Link className="text-decoration-none text-black px-2 btn btn-outline-info m-3" to='/userdashboard' 
            style={{fontSize:"20px",fontWeight:"bold",border:"none"}}>Private Library</Link>

            <Link className="text-decoration-none text-black px-2 btn btn-outline-info m-3" to='/bookshelf'
            style={{fontSize:"20px",fontWeight:"bold",border:"none"}}>Book Shelf</Link>
        </div>
        <div className='row m-2'>
      {
        !userbook || !userInfo || userbook.length<1 ? <Loader/> : 
        userbook.map((el,index)=>{
       
            return <div className='book-item  flex flex-column col-sm-3 flex-sb my-2' key={index}>
            <div className='book-item-img'>
              <img src = {el.bookimage} alt = "cover" />
            </div>
            <div className='book-item-info text-center'>
              <Link to = {`/bookdetails/${el._id}`} className="text-decoration-none text-black" >
                <div className='book-item-info-item title fw-7 fs-18'>
                  <span>{el.title} </span>
                </div>
              </Link>
      
              <div className='book-item-info-item author fs-15'>
                <span className='text-capitalize fw-7'>Author: </span>
                <span>{el.author} </span>
              </div>
      
              <div className='book-item-info-item edition-count fs-15'>
                <span className='text-capitalize fw-7'>Category: </span>
                <span>{el.category}</span>
              </div>
              <div className='book-item-info-item edition-count fs-15 m-1'>
                <span className='text-capitalize fw-7'>Book Type: </span>
                <span>{el.booktype}</span>
              </div>
      
              <div className='book-item-info-item publish-year fs-15'>
                <span className='text-capitalize fw-7'>Publish Date: </span>
                <span>{el && el.createdAt && el.createdAt.slice(0, 10)}</span>
              </div>
              <br/>
              <div className='book-item-info-item publish-time fs-15'>
          
           <button  className='btn btn-outline-info px-4 m-2' onClick={()=>navigateedit(el._id)}>
            Edit
            </button>
            <button  className='btn btn-outline-danger px-4 m-2' onClick={()=>Deletebook(el._id)}>
            Delete
            </button>
        </div>
      
      
         </div>
      
              </div>
           
           
        }) 
    }
    </div>
       
    </div>

  )
}

export default UserDashboard