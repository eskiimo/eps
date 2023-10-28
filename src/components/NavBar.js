import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-1">
        <div className="brand">
          <img alt="logo" src="/assets/epslogo.png" width={70} height={70} />

          <Link to="/">EPS</Link>
        </div>
        <ul className="nav-links">
          <li className="navlink">
            <Link to="/">HOME</Link>
          </li>
          <li className="navlink">
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
        <span>
          <i className="fa-solid fa-bars hamburger"></i>
        </span>
      </div>
      {/* <div className="nav-2"> EPS &gt; Home &gt; </div> */}
    </nav>
  );
};

export default NavBar;
