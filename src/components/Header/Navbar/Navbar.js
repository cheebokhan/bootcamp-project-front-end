import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function SetNavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{ height: "10vh" }}
      >
        <a
          className="navbar-brand mx-5 tx-4"
          href="/"
          style={{ fontSize: "26px" }}
        >
          BookHouse
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav mr-auto"
            style={{
              color: "black",
              marginRight: "30px",
              fontSize: "20px",
              fontFamily: "initial",
              fontWeight: "bold",
            }}
          >
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link" href="/sign-up">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SetNavBar;
