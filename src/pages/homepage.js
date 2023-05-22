import React, { useState } from "react";
import ProjectCards from "../components/jobcard/projectcard";
import TeamCards from "../components/jobcard/teamcards";
import { services, team, projects } from "../hooks/data";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Carousel from "../components/carousel";
import MyForm from "../components/jobcard/myform";

const HomePage = () => {
  const [showModal,setShowModal]=useState(false)
  const toggleModal=()=>{
    setShowModal(prev=>!prev)
  }
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


        <div className="flex flex-row p-3 w-11/12 mx-auto justify-between  z-10">

          <Carousel items={services} />
        </div>
       
      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div
        className="my-[150px] flex flex-column justify-center align-center"
        id="section-4"
      >
        <div className="w-[100%] h-full overflow-hidden  skew-y-n6 bg-slate-200 absolute z-1"></div>

        <div className="z-10">
        <div className="flex flex-column mx-auto my-3 justify-center w-5/6 z-10">
          <h1 className="mb-5 font-extrabold	 text-cDarkGrey ml-[10%]">Meet The Team</h1>
        </div>

          <div className="flex flex-wrap w-5/6 mx-auto sm:mx-5 justify-center">
            <TeamCards list={team} />
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div
        className=" flex flex-column justify-center align-center my-[100px] md:mx-5 z-10 "
        id="section-5"
      >
        <div className="flex flex-column mx-auto my-3 justify-center w-5/6 z-10">
          <h1 className="mb-5 font-extrabold	 text-cDarkGrey ml-[10%]">Projects</h1>
        </div>
        <div className=" flex flex-wrap w-5/6  mx-auto justify-center  overflow-x-auto z-10">
          <ProjectCards list={projects} />
        </div>
      </div>


      {/*  ///////////////////////////////////////////////////////////////////// */}
      <div id="Contact"  className="h-screen flex flex-column justify-center w-full  md:w-[75%] md:mx-auto z-10 ">
         <div className="flex flex-column mx-auto my-3 justify-center w-5/6 z-10">
          <p className="mb-5 font-extrabold	 text-3xl text-cDarkGrey">Contact Us</p>
        </div>
      <div className="w-[60%] mx-auto" >
      <MyForm toggle={toggleModal}/>
      </div>
      </div>



      {/* //////////////////////////////////////////////////////////////////////// */}
      <div  className="min-h-[50vh] flex flex-col md:flex-row justify-between mx-[20%] ">
        <div className=" flex flex-col">
          <h1 className="font-black tracking-wide mb-8">VISIT US</h1>
        <div className="justify-start flex flex-row mb-2 ">
          <i className="fa-sharp fa-solid fa-map-location-dot mr-3 text-2xl text-cMain">
            {" "}
          </i>
          <p className="text-black  text-lg">
            St 20, Mokattam, Cairo
          </p>
        </div>
        <div className="justify-start flex flex-row mb-2 ">
          <i className="fa-sharp fa-solid fa-square-phone mr-3 text-2xl text-cMain">
            {" "}
          </i>
          <p className="text-black text-lg">+201154773599</p>
        </div>

        <div className="justify-start flex flex-row  mb-2 ">
          <i className="fa-sharp fa-solid fa-envelope mr-3 text-2xl text-cMain">
            {" "}
          </i>
          <p className="text-black text-lg">info@eps.com.eg</p>
        </div>
        </div>
        <div className=" flex flex-col md:w-[50%]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.3879251321703!2d31.288821536252033!3d30.00986638741495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838c8918452c3%3A0x3bb807663e26a326!2sStreet%2020%2C%20Al%20Abageyah%2C%20El%20Khalifa%2C%20Cairo%20Governorate%204412104!5e1!3m2!1sen!2seg!4v1684753203667!5m2!1sen!2seg" width="100%" height="80%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>



      {/* //////////////////////////////////////////////////////////////////////// */}
      <div className="flex  p-2 text-white bg-cDarkGrey justify-center items-center text-center">
        <p>
          &#169; 2022<span className="text-cMain"> EPS. </span> All rightes reserved.
        </p>
      </div>



      <Modal
          backdrop={true}
          centered
          fullscreen="sm"
          size="md"
          toggle={toggleModal}
          isOpen={showModal}
        >
          <ModalHeader toggle={toggleModal}>
            <h3> Sent </h3>{" "}
          </ModalHeader>
          <ModalBody>
            <div className=" ">
             <h5>thank you for your message, we'll get back to you asap!</h5>
            
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="bg-cMain" onClick={toggleModal} >OK</button>
          </ModalFooter>
        </Modal>
    </>
  );
};
export default HomePage;
