import React from "react";
import ServiceCard from "./jobcard/service-card";
import { services } from "../hooks/data";
import "./services.css";
import { Link } from "react-router-dom";

export default function Services() {
  const rand1 = Math.floor(Math.random() * services.length);
  console.log(rand1);
  const service1 = services[rand1];
  const service2 = services[rand1 + 1] || services[rand1 - 1];
  return (
    <section id="services">
      <h1>What we Do.</h1>
      <h3>Services ...</h3>
      <div className="capsolls">
        {services.map((i, index) => (
          <Link to={"/service/" + index} key={index}>
            <p className="capsole">{i.title}</p>
          </Link>
        ))}
      </div>
      <div className="projects">
        <ServiceCard
          image={service1.image}
          title={service1.title}
          desc={service1.desc}
          index={rand1}
        />
        <ServiceCard
          image={service2.image}
          title={service2.title}
          desc={service2.desc}
          index={rand1 + 1}
        />
      </div>
    </section>
  );
}
