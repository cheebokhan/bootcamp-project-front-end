import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import "./BookDetails.css";

import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BookActions } from '../../Redux/actions/BookActions';
import Loader from '../Loader/Loader';
import SetNavBar from '../Common/Header/Navbar/Navbar';


const BookDetails = (props) => {
  
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {BookShelfArr,userid,isLoading}=props;
  debugger;

  //function
  // if AddToShelf == function()
  const {AddToShelf} = props;

  const {BookArr}=useSelector(state=>state.BookReducers);
var bookdata=BookArr.find(a=>a._id == id);



  useEffect(() => {
  dispatch(BookActions.GetBooks());
   
  }, [id]);

  var isBookreadbyThisUser = !BookShelfArr ?
   false : (BookShelfArr.find(a=> a.userid == userid && a.bookid == BookArr._id) != null)

  if(loading) return <Loading />;

  return (
    <>
    <SetNavBar/>
    <section className='book-details'>
     <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

            <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {bookdata.bookimage} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>
                <h2>
                {bookdata.title}

                </h2>
                </span>
            </div>
            <div className='book-details-item description'>
              <span>{bookdata.bookdescription}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Book type: </span>
              <span className='text-italic'>
                {bookdata.booktype}
                </span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Author Name: </span>
              <span className='text-italic'>
                {bookdata.author}
                </span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Book Category: </span>
              <span>{bookdata.category}</span>
            </div>
          </div>
          
        </div>
      </div> 
      
    </section>
 
    </>
  )
}

export default BookDetails