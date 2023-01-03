import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <nav className="px-5  fixed w-screen justify-center bg-white  py-3 text-center	z-50">
      <div className="flex mx-5 items-center justify-between">
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
