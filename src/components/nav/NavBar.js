import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <img id="logo" alt="logo" src="/assets/epslogo.png" />
      <ul className="nav-links">
        <li className="navlink">
          <Link to="/">HOME</Link>
        </li>
        <li className="navlink">
          <Link href="/">ABOUT</Link>
        </li>

        <li className="navlink">
          <Link to="/order">CONTACT</Link>
        </li>
      </ul>
      <span>
        <i className="fa-solid fa-bars hamburger"></i>
      </span>
    </nav>
  );
};

export default NavBar;
