import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../hooks/data";
import "./servicePage.css";

const ServicePage = () => {
  const index = useParams().id;
  const service = services[index];
  console.log();
  return (
    <section id="service-page">
      <h2>EPS Services</h2>
      <div className="ser-grid">
        <div className="ser-txt">
          <h1>{service.title}</h1>
          <article>{service.desc}</article>
        </div>
        <div>
          <img src={service.image} alt={service.title} />
        </div>
      </div>
    </section>
  );
};
export default ServicePage;
