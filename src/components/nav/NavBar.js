import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReusableNav = (props) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <nav className="relative container mx-auto p-1 text-center z-10	">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className="pt-2 w-10 flex flex-row">
          {props.logo ? <img src={props.logo} alt={props.title} /> : <></>}
          <Link
            to="/"
            hrefLang="#"
            className="text-3xl text-cTextDark no-underline hover:text-cMain"
          >
            {props.title}
          </Link>{" "}
        </div>

        {/* menu  */}

        <div className="hidden sm:flex flex-row space-x-6 ">
          {props.links.map((link) => {
            return (
              <a
                key={link}
                href={`#${link} `}
                className="text-xl text-cTextDark no-underline hover:text-cMain"
              >
                {link}
              </a>
            );
          })}
        </div>
        <div className="block sm:hidden text-3xl mx-3 ">
          <button className="text-black" onClick={toggleExpand}>
            <i className="fa-solid fa-bars text-3xl "></i>
          </button>
        </div>
      </div>
      {expand ? (
        <div className="block sm:hidden flex-column">
          <ul>
            {props.links.map((link) => {
              return (
                <li className="m-3 border-b-2">
                  <a
                    key={link}
                    href={`#${link} `}
                    className="text-xl text-cTextDark no-underline hover:text-cMain"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default ReusableNav;
