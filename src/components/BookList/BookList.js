import React from 'react';
import { Link} from 'react-router-dom';
import "./BookList.css";
import Loader from '../Loader/Loader';

const Books = (props) => {
 
  const {BookArr,BookShelfArr,userid,isLoading}=props;

  // if AddToShelf == function()
  const {AddToShelf} = props;
  const publicbooks=BookArr.filter(a=>a.booktype==="Public");
  
  return (
  <div className='row m-2'>
    

    {
      (!publicbooks || publicbooks.length<1)  ? <Loader/>:publicbooks.map((el,index)=>{

        var isBookreadbyThisUser = !BookShelfArr ? false : (BookShelfArr.find(a=> a.userid == userid && a.bookid == el._id) != null)
        return <div className='book-item  flex flex-column col-sm-3 flex-sb my-2' key={index}>
      <div className='book-item-img'>
        <img src = {el.bookimage} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/bookdetails/${el._id}`} className='text-decoration-none text-black'>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{el.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{el.author}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Category : </span>
          <span>{el.category}</span>
        </div>
        <br/>

        <div className='book-item-info-item publish-time fs-15'>
          <span className='text-capitalize'>Publish Date: </span>
          <span>{el && el.createdAt && el.createdAt.slice(0, 10)}</span>
        </div>
       
        <br/>

      </div>
      <button onClick={()=>props.AddToShelf({_id:el._id, startreading: !isBookreadbyThisUser, userid:userid })}
       className='btn btn-outline-success'>{isBookreadbyThisUser ? "Remove From Shelf":"Add to shelf"}</button>
    </div>
    })
   }
    
    </div> 
    )
  
}

export default Books;