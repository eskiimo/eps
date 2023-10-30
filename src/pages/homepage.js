import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./home.css";
import Main from "../components/main";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import About from "../components/about";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="home">
      <Main />
      <br />
      <Services />
      <br />
      <Testimonials />
      <br />
      <About />
      <br />

      {/* //////////////////////////////////////////////////////////////////////// */}

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
    </div>
  );
};
export default HomePage;
