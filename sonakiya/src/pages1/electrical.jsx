import { useEffect } from "react";
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';

import a1 from "../images/electrical/a1.jpeg"
import a2 from "../images/electrical/a2.jpeg"
import a3 from "../images/electrical/a3.jpeg"
import a4 from "../images/electrical/a4.jpeg"
import a5 from "../images/electrical/a5.jpeg"
import a6 from "../images/electrical/a6.jpeg"
import a7 from "../images/electrical/a7.jpeg"
import a8 from "../images/electrical/a8.jpeg"
import a9 from "../images/electrical/a9.jpeg"
import a10 from "../images/electrical/a10.jpeg"
import a11 from "../images/electrical/a11.jpeg"
import a12 from "../images/electrical/a12.jpeg"

const Electrical = ()=>{
    const arcProtectionEquipment = [
        {
          img: a1,
          name: "Arc Flash Protection Suit",
          age: "This arc-rated suit includes a coat, pants, and accessories for full-body protection. It shields workers from intense heat and burns caused by arc flash events, and is used widely in high-voltage electrical environments for safety."
        },
        {
          img: a2,
          name: "Arc Rated Coveralls",
          age: "These one-piece flame-resistant coveralls protect workers from burns during arc flashes. Lightweight and breathable, they’re ideal for utility workers and offer ease of movement during electrical tasks."
        },
        {
          img: a3,
          name: "Arc Flash Face Shield with Helmet",
          age: "A helmet and arc-rated face shield combo that protects from heat and flying debris. Offers clear visibility and vital face and head protection during electrical panel or switchgear work."
        },
        {
          img: a4,
          name: "Insulated Electrical Gloves",
          age: "Rubber gloves tested for electrical insulation. Used with leather protectors, they’re essential for handling live wires, ensuring safety from electric shock in energized areas."
        },
        {
          img: a5,
          name: "Arc Flash Hood (Balaclava)",
          age: "A flame-resistant hood worn under helmets for neck and head protection. It guards against radiant heat and debris and works well with face shields in arc-prone settings."
        },
        {
          img: a6,
          name: "Arc Rated Safety Glasses",
          age: "These glasses have arc-rated lenses to protect from thermal energy, flash, and particles. They ensure clear vision and safety during hazardous electrical work."
        },
        {
          img: a7,
          name: "Arc Flash Lab Coat",
          age: "Flame-resistant lab coats designed for light-duty electrical work. They offer protection against minor arc flashes and are suitable for labs and maintenance rooms."
        },
        {
          img: a8,
          name: "Arc Rated Switching Coat",
          age: "A protective coat for high-voltage switching. It shields the upper body from arc energy and is commonly used in power stations and substations."
        },
        {
          img: a9,
          name: "Arc Flash Overalls",
          age: "These overalls are flame-resistant and protect the legs and torso. They’re ideal for electricians handling high-energy electrical equipment in hazardous zones."
        },
        {
          img: a10,
          name: "Arc Rated Insulated Footwear",
          age: "Arc-rated boots with non-conductive soles protect workers from electrical shocks. Waterproof and rugged, they offer grip and insulation during energized work."
        },
        {
          img: a11,
          name: "Arc Flash PPE Kit",
          age: "A complete kit with suits, gloves, helmets, and shields. It ensures full protection during arc flash events and is essential for safe electrical operations."
        },
        {
          img: a12,
          name: "Arc Rated Rainwear",
          age: "Waterproof jackets and pants designed for electrical work in wet conditions. These garments maintain safety while protecting from arc flash hazards outdoors."
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
    return(
        <>
        
        <div className="testimonial-section scroll-animate zoom-in" style={{width:'100%'}}>
  <div className="testimonial-card">
    <h1 className="testimonial-text" style={{textAlign:"center"}}>
            Electrical Safety Equipment
    </h1>
    <p className="testimonial-author">— Electrical safety equipment protects against electrical hazards. Insulating gloves shield hands from shocks, while dielectric boots prevent grounding. Arc flash suits guard against burns in high-voltage environments. Insulated tools reduce risk during live work. Voltage testers ensure circuits are de-energized. Grounding equipment prevents stray currents. Used in construction, maintenance, and industrial settings, these tools ensure worker safety by minimizing shock, arc flash, and electrocution risks through proper insulation and testing.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>Electrical Safety Equipments</h2>
  <div className="zoom-grid">
    {arcProtectionEquipment.map((item, i) => (
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
    )
}

export default Electrical