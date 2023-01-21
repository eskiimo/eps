import React, { useState } from "react";

import "./jobcard.css";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
const CardList = (props) => {
  return props.list.map((card, index) => (
    <div key={index} className=" whole-card m-2 overflow-x-none">
      <Card
        className="bg-cDarkGrey border-none overflow-hidden"
        onClick={() => {
          props.toggle(index);
        }}
      >
        <CardImg alt="Card image cap" src={card.image} top width="100%" />
        <CardBody className=" border-l-2 border-cMain bg-cDarkGrey">
          <CardTitle className="text-white text-lg ">{card.title}</CardTitle>

          <CardText className="text-white text-md">
            {card.desc.substring(0, 50) + "...."}
          </CardText>
          <div className="text-white flex flex-row justify-between align-center">
            {" "}
            <p className="m-1 text-semibold">See more</p>
            <i className="fa-solid fa-arrow-right h-fit my-auto"></i>
          </div>
        </CardBody>
      </Card>
    </div>
  ));
};

export default CardList;
