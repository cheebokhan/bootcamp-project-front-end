import React from "react";
import "./UserHeader.css";
import SearchForm from "../../SearchForm/SearchForm";
import Navbar from "../../Header/Navbar/Navbar";


function UserHeader() {
  return (
    <div className="holder">
        <header className="header">
   <Navbar/>
    <div className="header-content flex flex-c text-center text-white">
        <h2 className="header-title text-capitalize">
            Find your favorites book
        </h2><be/>
        <p className="header-text fs-18 fw-3">
            Choose a book a your choice and enjoy the reading of your heart
        </p>
        <SearchForm/>
    </div>

        </header>
    </div>
  )
}

export default UserHeader;