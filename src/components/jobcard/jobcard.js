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
    <div className=" whole-card m-2 overflow-x-none">
      <Card
        className="bg-cDarkGrey border-none overflow-hidden"
        onClick={() => {
          nav(`/services/${props.jobTitle}`, { state: { props } });
        }}
      >
        <CardImg alt="Card image cap" src={props.jobImage} top width="100%" />
        <CardBody className=" border-l-2 border-cMain bg-cDarkGrey">
          <CardTitle className="text-white text-lg ">
            {props.jobTitle}
          </CardTitle>

          <CardText className="text-white text-md">{cropped}</CardText>
          <div className="text-white flex flex-row justify-between align-center">
            {" "}
            <p className="m-1 text-semibold">See more</p>
            <i class="fa-solid fa-arrow-right h-fit my-auto"></i>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;
