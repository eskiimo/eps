import React from "react";
import "./testimonials.css";

import { clients } from "../hooks/data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      {clients.map((client, index) => (
        <div className="client" key={index}>
          <img src={client.image} alt={client.name} />
        </div>
      ))}
    </section>
  );
}
