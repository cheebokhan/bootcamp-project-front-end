import React from "react";

import Navbar from "./Navbar/Navbar";
import "./Header.css";
import SearchFrom from "../SearchForm/SearchForm";
import Books from "../BookList/BookList";

function SetHeader() {
  return (
    <div className="holder">
        <header className="header">
    <Navbar/>
    <div className="header-content flex flex-c text-center text-white">
        <h2 className="header-title text-capitalize">
            Find your favorites book
        </h2><br/><br/>
        <p className="header-text fs-18 fw-3">
            Choose a book a your choice and enjoy the reading of your heart
        </p>
        <SearchFrom/>
    </div>

        </header>
        <Books/>
    </div>
  )
}

export default SetHeader;