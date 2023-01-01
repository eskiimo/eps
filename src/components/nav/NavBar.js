import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <nav className="relative container mx-auto p-4 text-center	">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className="pt-2 w-10 flex flex-row">
          <img src="assets/epslogo.png" />
          <Link
            to="/"
            hrefLang="#"
            className="text-3xl text-cTextDark no-underline hover:text-cMain"
          >
            {" "}
            EPS
          </Link>{" "}
        </div>

        {/* menu  */}

        <div className=" md:flex space-x-6 ">
          <Link
            to="/about"
            hrefLang="#"
            className="text-xl text-cTextDark no-underline hover:text-cMain"
          >
            {" "}
            ABOUT
          </Link>{" "}
          <Link
            to="/services"
            hrefLang="#"
            className="text-xl text-cTextDark no-underline hover:text-cMain"
          >
            {" "}
            SERVICES
          </Link>
          <Link
            to="/contact"
            className="text-xl text-cTextDark no-underline hover:text-cMain"
          >
            {" "}
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default ResponsiveAppBar;
