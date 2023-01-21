import React, { useEffect, useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./servicepage.css";

const ServicePage = (props) => {
  useEffect(() => {
    console.log(props);
  });
  return (
    <div className="section service-page">
      <div className="row ">
        <div className="col col-md-5 scol">
          <img src={props.service.jobImage} />
          <button
            onClick={() => {
              alert("will open Modal");
              //   props.toggle();
              console.log(props);
            }}
          >
            {" "}
            Calculate
          </button>
        </div>
        <div className="col col-md-6">
          <h1>{props.service.jobTitle}</h1>
          <h3>{props.service.jobDesc}</h3>
        </div>
      </div>
    </div>
  );
};
export default ServicePage;
