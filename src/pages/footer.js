import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-column relative h-[50vh] p-5 bg-cDarkGrey justify-evenly ">
      <div className="block text-center md:flex  md:flex-row justify-between mb-16">
        <div className="block md:flex md:w-1/3 mx-auto md:mx-5  justify-start  ">
          <i className="fa-sharp fa-solid fa-map-location-dot mr-1 text-2xl text-cMain">
            {" "}
          </i>
          <p className="text-white  text-lg">
            Block 19 Atlas Building, St. 9, Mokattam
          </p>
        </div>
        <div className="block md:flex md:w-1/3 mx-auto md:mx-5  justify-start  ">
          <i className="fa-sharp fa-solid fa-square-phone mr-1 text-2xl text-cMain">
            {" "}
          </i>
          <p className="text-white text-lg">+201154773599</p>
        </div>

        <div className="block md:flex md:w-1/3 mx-auto md:mx-5  justify-start  ">
          <i className="fa-sharp fa-solid fa-envelope mr-1 text-2xl text-cMain">
            {" "}
          </i>
          <p className="text-white text-lg">info@eps.com.eg</p>
        </div>
      </div>

      <div className="flex flex-row justify-center mb-5 ">
        <div className="mx-3 md:mx-5 text-4xl ">
          <Link to="/contact" rel="noreferrer">
            {" "}
            <i className="fab fa-whatsapp text-cMain"> </i>{" "}
          </Link>
        </div>
        <div className="mx-3 md:mx-5 text-4xl ">
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohamed-el-hosary-19180a66%3Ffbclid%3DIwAR2xHXh4DBBt40nMm0gIFVkhwzicpMcQLVj079zyaRwSqFbiu3djp_gWmUE&h=AT3S3Oa6t4I9AvW3J1VheUmQ9XG0F0c7V4_mNHlF9YG9JLgdW76GuPWU6pCt5AwywPDseUzYCia7JV6aylAn5WhfOv-T_WYAdHMcVsysW0DfxW_RfIoqSMR8lNS5Kg"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fab fa-linkedin text-cMain"> </i>{" "}
          </a>
        </div>

        <div className="mx-3 md:mx-5 text-4xl ">
          <a
            href="https://www.facebook.com/EPSHOSARY"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fab fa-facebook text-cMain"> </i>{" "}
          </a>
        </div>
      </div>

      <div className=" absolute bottom-2 justify-center text-center text-white">
        {" "}
        <p>
          {" "}
          &#169; 2022<span> EPS. </span> All rightes reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
