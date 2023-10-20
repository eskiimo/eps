import React from "react";
import ServiceCard from "../components/jobcard/service-card";
import { services } from "../hooks/data";
import "./services.css";

export default function Services() {
  return (
    <section id="services">
      <h1>What we Do.</h1>
      <h3>Services ...</h3>
      <div className="capsolls">
        {services.map((i, index) => (
          <p className="capsole" key={index}>
            {i.title}
          </p>
        ))}
      </div>
      <div className="projects">
        <ServiceCard
          image="/assets/services/residual-current.jpg"
          title="Residual current Device testing"
          desc="Some electrical appliances and old wiring may have a normal small amount of earth leakage which can trip a RCD. Earth leakage increases with each additional electrical appliance that is plugged in, and if RCD keeps tripping out it may be an overloaded circuit. Any faults we recommend that you have your wiring and appliances checked by an electrician to ascertain the fault if a RCD keeps tripping. The majority of electrical fatalities could have been prevented by the use of a properly installed RCD, and regular testing to ensure they are working correctly"
        />
        <ServiceCard
          image="/assets/services/primary-injection.jpg"
          title="Primary injection test"
          desc="This powerful test system is designed for primary injection testing of protective relay equipment and circuit breakers. It is also used to test the turns ratio of current transformers and for other applications that require high variable currents."
        />
      </div>
    </section>
  );
}
