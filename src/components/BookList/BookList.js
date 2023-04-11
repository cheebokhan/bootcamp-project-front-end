import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import Bookimg from "../../images/about-img.jpg";

const Books = (props) => {
  const {BookArr,BookShelfArr,userid}=props;

  //function
  // if AddToShelf == function()
  const {AddToShelf} = props;
  debugger;

  return (
  <div className='row m-2'>

    {
      (!BookArr || BookArr.length<1)  ? <p> no data found </p>:BookArr.map((el,index)=>{

        var isBookreadbyThisUser = !BookShelfArr ? false : (BookShelfArr.find(a=> a.userid == userid && a.bookid == el._id) != null)
        return <div className='book-item  flex flex-column col-sm-3 flex-sb my-2' key={index}>
      <div className='book-item-img'>
        <img src = {el.bookimage} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/addbook`} >
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{el.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{el.author}</span>
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
      <button onClick={()=>props.AddToShelf({_id:el._id, startreading: !isBookreadbyThisUser, userid:userid })} className='btn btn-outline-success'>{isBookreadbyThisUser ? "Remove From Shelf":"Add to shelf"}</button>
    </div>
    })
   }
    
    </div> 
    )
  
}

export default Books;