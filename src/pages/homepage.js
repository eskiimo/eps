import React from "react";
import CardList from "../components/jobcard/cardlist";
import ProjectCards from "../components/jobcard/projectcard";
import TeamCards from "../components/jobcard/teamcards";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import "./homepage.css";

const HomePage = () => {
  const jobs = [
    {
      image: "https://picsum.photos/318/180",
      title: "Residual current Device testing",
      desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD. Earth leakage increases with each additional electrical appliance that is plugged in, and if RCD keeps tripping out it may be an overloaded circuit. Any faults we recommend that you have your wiring and appliances checked by an electrician to ascertain the fault if a RCD keeps tripping. The majority of electrical fatalities could have been prevented by the use of a properly installed RCD, and regular testing to ensure they are working correctly",
    },
    {
      image: "https://picsum.photos/318/180",
      title: "Residual current Device testing",
      desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD. Earth leakage increases with each additional electrical appliance that is plugged in, and if RCD keeps tripping out it may be an overloaded circuit. Any faults we recommend that you have your wiring and appliances checked by an electrician to ascertain the fault if a RCD keeps tripping. The majority of electrical fatalities could have been prevented by the use of a properly installed RCD, and regular testing to ensure they are working correctly",
    },
    {
      image: "https://picsum.photos/318/180",
      title: "Residual current Device testing",
      desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD. Earth leakage increases with each additional electrical appliance that is plugged in, and if RCD keeps tripping out it may be an overloaded circuit. Any faults we recommend that you have your wiring and appliances checked by an electrician to ascertain the fault if a RCD keeps tripping. The majority of electrical fatalities could have been prevented by the use of a properly installed RCD, and regular testing to ensure they are working correctly",
    },
    {
      image: "https://picsum.photos/318/180",
      title: "Residual current Device testing",
      desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD. Earth leakage increases with each additional electrical appliance that is plugged in, and if RCD keeps tripping out it may be an overloaded circuit. Any faults we recommend that you have your wiring and appliances checked by an electrician to ascertain the fault if a RCD keeps tripping. The majority of electrical fatalities could have been prevented by the use of a properly installed RCD, and regular testing to ensure they are working correctly",
    },
  ];
  const team = [
    {
      image: "https://picsum.photos/318/420",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD.",
    },
    {
      image: "https://picsum.photos/318/420",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
    {
      image: "https://picsum.photos/318/420",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
  ];
  const projects = [
    {
      image: "/logos/Citycenter.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
    {
      image: "/logos/GCH.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD.",
    },
    {
      image: "/logos/GPC.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
    {
      image: "/logos/QNB.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
    {
      image: "/logos/NDC.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
    {
      image: "/logos/mallAR.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD.",
    },
    {
      image: "/logos/EGPost.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
    {
      image: "/logos/DPWORLD.jpg",
      name: "Mohamad Kamal",
      title: "CEO & Founder",
      desc: "sdsdjskdjskdjskdjskdj",
    },
  ];
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
          <i className="fa-sharp fa-solid fa-paper-plane"></i>{" "}
          <NavLink to="/contact">CONTACT</NavLink>
        </button>
      </div>

      <div className="section section-2" id="section-2">
        <p className="header1">
          Our <span className="header2">Services</span>
        </p>
        <p className="txt-desc">Example of Measuring Instruments</p>

        <div className=" row center">
          <CardList list={jobs} />
        </div>
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
        <div className="row">
          <div className="col col-md 6">
            <p className="header5">Success Partners</p>
            <p className="desc">
              Which digital and sustainable transformations will Sweden
              <br /> await in 2030? Find out how the country <br /> can change
              for the better if we multiply our impact!
            </p>
          </div>
          <div className="col col-md-6">
            <div className=" row center">
              <ProjectCards list={projects} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default HomePage;
