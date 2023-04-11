
import {FaSearch} from "react-icons/fa";
import React, {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchForm.css";

function SearchForm() {
    const searchText = useRef('');
    const navigate = useNavigate();

    return (
        <div className='search-form'>
          <div className='container'>
            <div className='search-form-content'>
              <form className='search-form' onSubmit={()=> console.log('you searched for an item')}>
                <div className='search-form-elem flex flex-sb bg-white'>
                  <input type = "text" className='form-control' placeholder='The Lost World ...' ref = {searchText} style={{border:"none"}} />
                  <button type = "submit" className='flex flex-c' onClick={()=> console.log('you clicked on search icon')}>
                    <FaSearch className='text-purple' size = {32} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
}

export default SearchForm;