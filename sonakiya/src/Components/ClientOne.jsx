import React from "react";
// import "./ClientSection.css";
import clientLogos from "./clientLogos"; // Your array of logo objects

const ClientSection = () => {
  return (
    <div className="client-section-1">
      <div className="background-blur" />
      <div className="overlay-text">SONAKIYA & SONS</div>
      <h1 className="client-heading">Our Clients</h1>
      <div className="client-carousel-wrapper">
        <div className="client-carousel">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div className="client-slide" key={index}>
              <img src={logo.img} alt={`Client ${logo.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
