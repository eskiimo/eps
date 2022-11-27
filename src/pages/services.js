import React from "react";
import "./services.css";
import CardList from "../components/jobcard/cardlist";
import { services } from "../hooks/data";
const Services = () => {
  return (
    <div className="row center services-page">
      <CardList list={services} />
    </div>
  );
};

export default Services;
