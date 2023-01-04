import React from "react";
import CardList from "../components/jobcard/cardlist";
import ProjectCards from "../components/jobcard/projectcard";
import TeamCards from "../components/jobcard/teamcards";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import "./homepage.css";
import { services, team, projects } from "../hooks/data";

const HomePage = () => {
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  return (
    <>
      <div
        className="flex flex-column h-screen text-center justify-center text-cTextDark"
        id="section-1 "
      >
        <div className="mx-auto w-3/5 md:w-1/6 flex justify-center align-center ">
          <img alt="logo" src="/assets/epslogo.png"></img>
        </div>
        <p className="text-2xl font-bold">
          Electrical Testing & Measurements.{" "}
        </p>

        <p className="text-2xl font-bold">Electric Utility Provider</p>

        <button className="buton">
          <a href="#Contact">
            <i className="fa-sharp fa-solid fa-paper-plane"></i>{" "}
            <span className="hide">CONTACT</span>
          </a>
        </button>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////// */}

      <div
        className=" h-screen flex flex-column jusify-center align-center"
        id="Services"
      >
        <div className="block jusify-center">
          <p className="text-3xl text-center font-bold">
            Our <span className="header2">Services</span>
          </p>
          <p className="text-2xl text-center font-semibold">
            Example of Measuring Instruments
          </p>
        </div>

        <div className="flex flex-row  w-5/6 mx-auto justify-between overflow-x-auto ">
          <CardList list={services} />
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div
        className="h-screen flex flex-column justify-center align-center"
        id="section-4"
      >
        <p className="text-2xl text-center font-bold">
          Meet <span className="header2">Our Team</span>
        </p>

        <div className="flex flex-row w-5/6 mx-auto justify-between overflow-x-auto">
          <TeamCards list={team} />
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div
        className="h-screen flex flex-column justify-center align-center md:m-5"
        id="section-5"
      >
        <div className="flex flex-column mx-auto justify-center w-3/5">
          <p className="font-bold text-3xl text-cDarkGrey">Clients</p>
        </div>
        <div className=" flex flex-wrap w-5/6 md:w-4/6 mx-auto justify-center  overflow-x-auto">
          <ProjectCards list={projects} />
        </div>
      </div>
      <div id="Contact">
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
