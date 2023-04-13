import React from 'react'
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

function BookShelf(props) {
    const {BookArr,BookShelfArr,userid,isLoading,userbook}=props;
    //function
    // if AddToShelf == function()
    //book shelf code
    const {AddToShelf} = props;
    

    debugger
  return (
    <div>
    <div> 
            <Link className="text-decoration-none text-black px-2 btn btn-outline-info m-3" to='/userdashboard' 
            style={{fontSize:"20px",fontWeight:"bold",border:"none"}}>Private Library</Link>

            <Link className="text-decoration-none text-black px-2 btn btn-outline-info m-3" to='/bookshelf'
            style={{fontSize:"20px",fontWeight:"bold",border:"none"}}>Book Shelf</Link>
        </div> 
        <div className='row m-2'>
  {(
    !BookArr || BookArr.length < 1 ) ? <Loader/> :
    BookArr.map((el, index) => {
        var shelfbook=BookShelfArr.find(a=>a.bookid==el._id && a.userid==userid);
    //   const isBookreadbyThisUser = !BookShelfArr ? false : (BookShelfArr.filter(a=> a.userid === userid && a.bookid === el._id) !== null);
      return <> {!shelfbook ?<div></div>: <div className='book-item flex flex-column col-sm-3 flex-sb my-2' key={index}>
          <div className='book-item-img'>
            <img src = {el.bookimage} alt = "cover" />
          </div>
          <div className='book-item-info text-center'>
            <Link to={`/bookdetails/${el._id}`} className='text-decoration-none text-black'>
              <div className='book-item-info-item title fw-7 fs-18'>
                <span>{el.title}</span>
              </div>
            </Link>

            <div className='book-item-info-item author fs-15'>
              <span className='text-capitalize fw-7'>Author: </span>
              <span>{el.author}</span>
            </div>

            <div className='book-item-info-item edition-count fs-15'>
              <span className='text-capitalize fw-7'>Book Category: </span>
              <span>{el.category}</span>
            </div>

            <div className='book-item-info-item publish-year fs-15 p-2'>
              <span className='text-capitalize fw-7'>Publish Date: </span>
              <span>{el && el.createdAt && el.createdAt.slice(0, 10)}</span>
            </div>
            <br/>

          </div>
          <button
            onClick={() => props.AddToShelf({_id: el._id, startreading: false, userid: userid })}
            className='btn btn-outline-success'>
            Remove From Shelf 
          </button>
        </div>
      }
      
        </>
    })
  }
</div>
    </div>
   
  )
}

export default BookShelf