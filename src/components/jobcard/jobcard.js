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
    <div className=" whole-card">
      <Card
        className="bg-cDarkGrey border-none overflow-hidden"
        onClick={() => {
          nav(`/services/${props.jobTitle}`, { state: { props } });
        }}
      >
        <CardImg alt="Card image cap" src={props.jobImage} top width="100%" />
        <CardBody className=" border-l-2 border-cMain bg-cDarkGrey">
          <CardTitle className="text-white text-lg " tag="h5">
            {props.jobTitle}
          </CardTitle>

          <CardText className="text-white text-md">{cropped}</CardText>
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
