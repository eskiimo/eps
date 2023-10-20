import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./home.css";
import Main from "./main";
import Services from "./services";
import Testimonials from "./testimonials";
import About from "./about";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Main />

      <Services />
      <Testimonials />
      <About />

      {/* //////////////////////////////////////////////////////////////////////// */}

      <div className=" flex flex-col md:w-[50%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.3879251321703!2d31.288821536252033!3d30.00986638741495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838c8918452c3%3A0x3bb807663e26a326!2sStreet%2020%2C%20Al%20Abageyah%2C%20El%20Khalifa%2C%20Cairo%20Governorate%204412104!5e1!3m2!1sen!2seg!4v1684753203667!5m2!1sen!2seg"
          width="100%"
          height="80%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* //////////////////////////////////////////////////////////////////////// */}

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
          <button className="bg-cMain" onClick={toggleModal}>
            OK
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default HomePage;
