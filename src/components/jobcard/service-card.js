import React from "react";

import "./service-card.css";
const ServiceCard = (props) => {
  return (
    <div className="card">
      <div className="img-div">
        <img alt="service" src={props.image} />
      </div>
      <div className="card-body">
        <h1 className="">{props.title}</h1>

        <p className=" ">{props.desc}</p>

        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default ServiceCard;
