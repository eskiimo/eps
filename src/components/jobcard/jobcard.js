import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import "./jobcard.css";

const JobCard = (props) => {
  const nav = useNavigate();
  var cropped = props.jobDesc.substring(0, 50) + "...";
  return (
    <div className="col-sm-10 col-md-5 whole-card">
      <Card
        onClick={() => {
          nav(`/services/${props.jobTitle}`, { state: { props } });
        }}
      >
        <CardImg alt="Card image cap" src={props.jobImage} top width="100%" />
        <CardBody>
          <CardTitle className="txt-secondary" tag="h5">
            {props.jobTitle}
          </CardTitle>

          <CardText className="card-text">{cropped}</CardText>
          <CardFooter>
            {" "}
            <p>see more</p>
            <i class="fa-solid fa-arrow-right"></i>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;
