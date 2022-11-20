import React from "react";
import { Card, CardImg } from "reactstrap";

import "./projectcard.css";

const ProjectCards = (props) => {
  return props.list.map((item) => (
    <div key={item.title} className="col-xs-12 col-md-3 projectcard">
      <Card>
        <CardImg alt="Card image cap" src={item.image} top />

        <div className="detail">
          <div className="row">
            <p>see more</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </Card>
    </div>
  ));
};

export default ProjectCards;
