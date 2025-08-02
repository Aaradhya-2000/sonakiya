import "../css/AboutUs.css";
import React, { useState, useEffect } from "react";
import image from "../images/about/back.jpg";

import client1 from "../images/client/client_1.jpeg";
import client2 from "../images/client/client_2.jpeg";
import client3 from "../images/client/client_3.jpeg";
import client4 from "../images/client/client_4.jpeg";
import client5 from "../images/client/client_5.jpeg";
import client6 from "../images/client/client_6.jpeg";
import client7 from "../images/client/client_7.jpeg";
import client8 from "../images/client/client_8.jpeg";
import client9 from "../images/client/client_9.jpeg";

const AboutUs = () => {
  const clientImages = [
    client1, client2, client3, client4, client5,
    client6, client7, client8, client9,
  ];

  const slides = [
    { id: 1, type: "text", text: "Empowering Your Digital Presence", bgColor: "#111" },
    { id: 2, type: "text", text: "Innovative Design Meets Reliable Code", bgColor: "#222" },
    { id: 3, type: "text", text: "We Build, You Shine", bgColor: "#333" },
    { id: 4, type: "image", imgUrl: image },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current === slides.length - 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      <div className="carousel-container-1">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === current ? 'active' : ''}`}
            style={{
              backgroundColor: slide.bgColor || "#000",
              
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 1s ease-in-out",
            }}
          >
            {slide.type === "text" ? (
              <h1 className="carousel-text">{slide.text}</h1>
            ) : (
              <div className="client-carousel-3d-container">
      <div className="carousel-3d">
        {clientImages.map((img, index) => (
          <div
            className="carousel-item-3d"
            key={index}
            style={{
              transform: `rotateY(${index * (360 / clientImages.length)}deg) translateZ(400px)`,
            }}
          >
            <img src={img} alt={`Client ${index}`} />
          </div>
        ))}
      </div>
      <h1 className="carousel-heading">Our Clients</h1>
    </div>
            )}
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="about-us">
        <div className="about-container">
          <h2 className="about-title">About Us</h2>
          <p className="about-desc">
            <strong>Welcome to SONAKIYA & SONS</strong> <br />
            Since our inception in 2021, SONAKIYA & SONS has rapidly emerged as a leading name in the field of industrial safety, personal protective equipment, road safety equipment, and firefighting solutions across Madhya Pradesh.
          </p>

          <div className="about-highlights">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>✅ High-quality, reliable products</li>
              <li>✅ Transparent pricing and ethical service</li>
              <li>✅ Timely delivery and support</li>
              <li>✅ Years of industry experience</li>
              <li>✅ Eco-conscious and innovative</li>
            </ul>
          </div>

          <div className="about-mission-vision">
            <div>
              <h3>Our Mission</h3>
              <p>
              At Sonakiya & Sons, our mission is to provide high-quality safety and industrial solutions that ensure protection, efficiency, and peace of mind. We are committed to delivering reliable products and exceptional service, building long-term relationships based on trust and performance. Through innovation and dedication, we aim to support industries in creating safer environments across sectors.
              </p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
              Our vision is to become a trusted leader in safety and industrial supply solutions, recognized for excellence, innovation, and customer satisfaction. We strive to set new standards in the industry by continuously evolving, embracing technology, and upholding our values of integrity, responsibility, and service. Sonakiya & Sons envisions a future where every workplace is safer, smarter, and supported by our expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
