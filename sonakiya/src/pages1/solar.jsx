import { useEffect } from "react";
import { motion } from 'framer-motion';
import 'swiper/css';

import 'swiper/css/effect-fade';

import a1 from "../images/solar/a1.jpeg"
import a2 from "../images/solar/a2.jpeg"
import a3 from "../images/solar/a3.jpeg"
import a4 from "../images/solar/a4.jpeg"
import a5 from "../images/solar/a5.jpeg"
import a6 from "../images/solar/a6.jpeg"
import a7 from "../images/solar/a7.jpeg"
import a8 from "../images/solar/a8.jpeg"
import a9 from "../images/solar/a9.jpeg"
import a10 from "../images/solar/a10.jpeg"
import a11 from "../images/solar/a11.jpeg"
import a12 from "../images/solar/a12.jpeg"


const Solar = () => {
    const SolarImage = [
        {
          img: a1,
          name: "Solar PV Panels",
          age: "Photovoltaic panels that convert sunlight into direct current (DC) electricity. They are the core component of any solar power plant and come in monocrystalline, polycrystalline, or thin-film types, designed for high efficiency and long-term durability."
        },
        {
          img: a2,
          name: "Solar Inverters",
          age: "Devices that convert DC electricity from solar panels into alternating current (AC) used by homes and the grid. Types include string inverters, central inverters, and microinverters depending on the size and design of the system."
        },
        {
          img: a3,
          name: "Solar Mounting Structures",
          age: "Strong metallic frames that support and position the solar panels. Designed to withstand wind, snow, and seismic loads, they ensure optimal panel orientation for maximum sunlight capture."
        },
        {
          img: a4,
          name: "Battery Storage Systems",
          age: "Store excess electricity generated during the day for use at night or during outages. Lithium-ion and lead-acid batteries are commonly used in solar energy systems for efficient energy backup."
        },
        {
          img: a5,
          name: "Charge Controllers",
          age: "Regulate the voltage and current coming from solar panels to the batteries. They prevent overcharging or deep discharging, thus extending the battery lifespan in off-grid or hybrid solar systems."
        },
        {
          img: a6,
          name: "DC & AC Combiner Boxes",
          age: "These enclosures consolidate input from multiple solar panels or inverters. They house protective fuses, circuit breakers, and surge protectors for safe and efficient power distribution."
        },
        {
          img: a7,
          name: "Cables & Connectors",
          age: "Specialized weather-resistant and UV-protected cables and MC4 connectors are essential for efficient and safe transmission of electricity between solar panels, inverters, and batteries."
        },
        {
          img: a8,
          name: "Monitoring System",
          age: "Digital systems and software that track solar power generation, consumption, efficiency, and fault alerts in real-time. They help in optimizing performance and maintaining the solar plant."
        },
        {
          img: a9,
          name: "Junction Boxes",
          age: "Protective enclosures that serve as the meeting point for electrical wiring. They simplify system maintenance and protect components from environmental damage and electrical faults."
        },
        {
          img: a10,
          name: "Lightning Arresters",
          age: "Devices installed to protect the solar system from lightning strikes. They divert surge currents safely into the ground, preventing damage to sensitive components."
        },
        {
          img: a11,
          name: "Grounding Systems",
          age: "Ensures electrical safety by preventing shock hazards. Grounding rods and conductors safely dissipate fault currents and stabilize system voltage levels."
        },
        {
          img: a12,
          name: "Transformers",
          age: "Used in large-scale solar plants to step up the voltage for transmission or step down for local distribution. Ensures efficient integration with the power grid."
        }
      ];
      
    
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-animate');
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
              } else {
                entry.target.classList.remove('active');
              }
            });
          },
          {
            threshold: 0.3, // adjust visibility threshold
          }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => {
          elements.forEach((el) => observer.unobserve(el));
        };
      }, []);
    
  return (
   <>
     <div className="testimonial-section scroll-animate zoom-in" style={{width:'100%'}}>
  <div className="testimonial-card">
    <h1 className="testimonial-text" style={{textAlign:"center"}}>
            Solar Power
    </h1>
    <p className="testimonial-author">— Solar power is a renewable energy source that harnesses sunlight using photovoltaic panels or solar thermal systems to generate electricity or heat. It is eco-friendly, reduces carbon emissions, and lowers electricity bills. Widely used in homes, industries, and solar farms, solar power supports sustainable development. With advancements in battery storage and grid integration, it plays a crucial role in the global shift toward clean, reliable, and independent energy solutions.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>Solar Power Plant</h2>
  <div className="zoom-grid">
    {SolarImage.map((item, i) => (
      <div className="zoom-img" key={i}>
        <motion.img
          src={item.img}
          alt={item.name}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="hover-overlay" style={{display:"flex",flexDirection:"column",paddingTop:"20px"}}>
          <h4>{item.name}</h4>
          <p>{item.age}</p>
        </div>
      </div>
    ))}
  </div>
</section>
   </>
  );
};

export default Solar;
