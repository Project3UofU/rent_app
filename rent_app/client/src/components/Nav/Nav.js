import React from "react";
import {Link} from 'react-router-dom';
import "./Nav.css"

const Nav = (props) => {
    if (props.loggedIn) {
      return (
        <nav className="navbar navbar-invert">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link" onClick={props._logout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )
    }
  }

export default Nav;
