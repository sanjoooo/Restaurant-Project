import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">
            <b>Easy Food</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <NavLink className='nav-link' to='/login'>Login</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className='nav-link' to='/admin'>Admin</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/AddMenu'>AddMenu</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
