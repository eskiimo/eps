import React from "react";
import CardList from "../components/jobcard/cardlist";
import ProjectCards from "../components/jobcard/projectcard";
import TeamCards from "../components/jobcard/teamcards";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import "./homepage.css";
import { services, team, projects } from "../hooks/data";
import JobCard from "../components/jobcard/jobcard";

const HomePage = () => {
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  return (
    <>
      <div className="section section-1" id="section-1">
        <p className="txt-primary">Electrical testing </p>

        <p className="txt-primary">and measurements.</p>
        <p className="txt-secondary">Electric Utility Provider</p>
        <p className="txt-desc">
          Electric power service Company for Testing Services
        </p>
        <button className="buton">
          <NavLink to="/contact">
            <i className="fa-sharp fa-solid fa-paper-plane"></i>{" "}
            <span className="hide">CONTACT</span>
          </NavLink>
        </button>
      </div>

      <div className="section section-2" id="section-2">
        <p className="header1">
          Our <span className="header2">Services</span>
        </p>
        <p className="txt-desc">Example of Measuring Instruments</p>

        <div className=" row center">
          <JobCard
            jobImage="/assets/services/power-equality.jpg"
            jobTitle="Power quality study"
            jobDesc=" Analysis for ( Voltage- Current- Harmonics-Active & Reactive Power- P.F) The purpose of the electrical distribution system is to support proper operation of the loads. ... Whether it's used for troubleshooting purposes or to obtain baseline data, measuring/analyzing electrical system parameters is called power quality analysis"
          />
          <JobCard
            jobImage="/assets/services/hi-pot.jpg"
            jobTitle="HI Pot Test"
            jobDesc=" Hi pot Test is short name of high potential (high voltage) Test and it is also known as Dielectric Withstand Test. A hi pot test checks for “good isolation"
          />
        </div>
        <NavLink className="more-services" to="/services">
          More services ..
        </NavLink>
      </div>

      <div className="section section-4" id="section-4">
        <p className="header1">
          Meet <span className="header2">Our Team</span>
        </p>

        <div className=" row center">
          <TeamCards list={team} />
        </div>
      </div>

      <div className="section section-5 " id="section-5">
        <div className="col col-md-12">
          <p className="header5">Clients</p>
          <p className="desc">
            Which digital and sustainable transformations will Sweden
            <br /> await in 2030? Find out how the country <br /> can change for
            the better if we multiply our impact!
          </p>
        </div>
        <div className=" row center">
          <ProjectCards list={projects} />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default HomePage;
