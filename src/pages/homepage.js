import React, { useEffect, useState } from "react";
import CardList from "../components/jobcard/cardlist";
import ProjectCards from "../components/jobcard/projectcard";
import TeamCards from "../components/jobcard/teamcards";
import Footer from "./footer";
import { services, team, projects } from "../hooks/data";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Carousel from "../components/carousel";

const HomePage = () => {
  const [isToast, setIsToast] = useState(false);
  const [index, setIndex] = useState(0);
  const [displayedService, setDisplayedService] = useState(services[0]);
  const handleClick = (index) => {
    toggleModal();
    // setDisplayedService(services[index]);
  };

  const toggleModal = () => {
    setIsToast((prev) => !prev);
  };
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <>
      <div
        className="  flex flex-column h-screen text-center justify-center text-cTextDark"
        id="section-1 "
      >
        <div className="w-[100%] h-full overflow-hidden  skew-y-6 bg-slate-200 absolute z-1"></div>
        <div className="z-10">
          <div className="mx-auto w-2/5 md:w-1/6 flex justify-center align-center ">
            <img alt="logo" src="/assets/epslogo.png"></img>
          </div>
          <p className="block text-2xl font-bold">
            Electrical Testing & Measurements.{" "}
          </p>

          <p className="block text-2xl font-bold">Electric Utility Provider</p>
        </div>
        {/* <button className="buton">
          <a href="#Contact">
            <i className="fa-sharp fa-solid fa-paper-plane"></i>{" "}
            <span className="hide">CONTACT</span>
          </a>
        </button> */}
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////// */}

      <div
        className=" my-[150px] h-screen flex flex-column jusify-center align-center z-10"
        id="Services"
      >
        <div className="  block jusify-center">
          <p className="text-3xl text-center font-bold">
            Our <span className="header2">Services</span>
          </p>
          <p className="text-2xl mb-5 text-center font-semibold">
            Example of Measuring Instruments
          </p>
        </div>

        <div className="flex flex-row p-5 w-5/6 mx-auto justify-between overflow-x-auto z-10">
          <CardList list={services} toggle={toggleModal} handle={handleClick} />
        </div>

        <Modal
          backdrop={true}
          centered
          fullscreen="sm"
          size="xl"
          toggle={toggleModal}
          isOpen={isToast}
        >
          <ModalHeader toggle={toggleModal}>
            <h3> info</h3>{" "}
          </ModalHeader>
          <ModalBody>
            <div className="col ">
              <div className="  justify-center mx-5">
                <img src={displayedService.image} />
                <button
                  className="block bg-cDarkGrey text-lg text-white my-3 py-2 px-5"
                  onClick={() => {
                    alert("will open Modal");
                  }}
                >
                  {" "}
                  Calculate
                </button>
              </div>
              <div className="w-full">
                <h1 className="my-3">{displayedService.title}</h1>
                <h3 className="m-5">{displayedService.desc}</h3>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button text="Close" onClick={toggleModal} />
          </ModalFooter>
        </Modal>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div
        className="my-[150px] flex flex-column justify-center align-center"
        id="section-4"
      >
        <div className="w-[100%] h-full overflow-hidden  skew-y-n6 bg-slate-200 absolute z-1"></div>

        <div className="z-10">
          <div className="flex flex-column mx-auto my-3 justify-center w-5/6">
            <p className=" font-bold text-3xl text-cDarkGrey">Meet our team</p>
          </div>

          <div className="flex flex-wrap w-5/6 mx-auto sm:mx-5 justify-center">
            <TeamCards list={team} />
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div
        className="my-[150px] h-screen flex flex-column justify-center align-center md:mx-5 z-10 "
        id="section-5"
      >
        <div className="flex flex-column mx-auto my-3 justify-center w-5/6 z-10">
          <p className="mb-5 font-extrabold	 text-3xl text-cDarkGrey">Clients</p>
        </div>
        <div className=" flex flex-wrap w-5/6  mx-auto justify-center  overflow-x-auto z-10">
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
