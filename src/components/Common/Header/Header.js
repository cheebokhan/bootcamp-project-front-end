import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import SearchFrom from "../SearchForm/SearchForm";

function Header() {
  return (
        <header className="header">
          <Navbar/>
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">
                        Find your favorites book
                    </h2>
                    <p className="header-text fs-18 fw-3 m-1">
                        Choose a book a your choice and enjoy the reading of your heart
                    </p>
                    <SearchFrom/>
                </div>
        </header>
  )
}

export default Header;