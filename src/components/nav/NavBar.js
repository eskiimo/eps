import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const ResponsiveAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <div className="row nav-links ml-auto">
        <div className="col-logo">
          <NavLink to="/">
            <img src="assets/epslogo.png" />
          </NavLink>
        </div>
        <div className="col col-links">
          <NavLink to="/" exact>
            About
          </NavLink>

          {/* <NavLink to="/blogs">Blogs</NavLink> */}
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </Navbar>
  );
};
export default ResponsiveAppBar;
