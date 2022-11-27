import React from "react";
import { Card, CardImg } from "reactstrap";

import "./projectcard.css";

const ProjectCards = (props) => {
  return props.list.map((item) => (
    <div key={item.title} className="col-xs-6 col-md-3 projectcard">
      <img alt="Card image cap" src={item.image} />
    </div>
  ));
};

export default ProjectCards;
