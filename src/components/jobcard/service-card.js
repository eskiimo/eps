import React from "react";
import { Link } from "react-router-dom";

import "./service-card.css";
const ServiceCard = (props) => {
  return (
    <Link className="card" to={"/service/" + props.index}>
      <div className="img-div">
        <img alt="service" src={props.image} />
      </div>
      <div className="card-body">
        <h1 className="">{props.title}</h1>

        <article>{props.desc.substring(0, 150) + " ..."}</article>

        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </Link>
  );
};

export default ServiceCard;
