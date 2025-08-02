import { useEffect } from "react";
import { motion } from 'framer-motion';
import 'swiper/css';

import 'swiper/css/effect-fade';
import a1 from "../images/industry/a1.jpeg"
import a2 from "../images/industry/a2.jpeg"
import a3 from "../images/industry/a3.jpeg"
import a4 from "../images/industry/a4.jpeg"
import a5 from "../images/industry/a5.jpeg"
import a6 from "../images/industry/a6.jpeg"
import a7 from "../images/industry/a7.jpeg"
import a8 from "../images/industry/a8.jpeg"
import a9 from "../images/industry/a9.jpeg"
import a10 from "../images/industry/a10.jpeg"
import a11 from "../images/industry/a11.jpeg"
import a12 from "../images/industry/a12.jpeg"
const Industry = ()=>{
    const industrialSafetyRequirements = [
        {
          img: a1,
          name: "Personal Protective Equipment (PPE)",
          age: "Essential gear like helmets, gloves, goggles, boots, and masks designed to safeguard workers from injuries and health hazards. PPE is customized based on the job’s risks and provides physical barriers against mechanical, chemical, electrical, and biological threats in industrial and construction environments."
        },
        {
          img: a2,
          name: "Hard Hats / Safety Helmets",
          age: "Hard hats protect workers from falling objects, bumps, and electrical shocks. They are crucial in construction, mining, and industrial settings where head injuries are common. Some models include visors or ear protection, and many are rated for impact and voltage resistance."
        },
        {
          img: a3,
          name: "Safety Goggles / Face Shields",
          age: "These protect eyes and face from dust, flying particles, chemicals, sparks, or intense light. Goggles form a seal around the eyes, while face shields cover a broader area. Widely used in welding, grinding, and chemical handling environments for maximum visual safety."
        },
        {
          img: a4,
          name: "Protective Gloves",
          age: "Gloves protect hands from hazards like cuts, burns, chemicals, and electricity. Different types include nitrile, latex, Kevlar, and rubber-insulated gloves. They are chosen based on tasks such as welding, electrical work, lab handling, or construction to ensure proper safety and dexterity."
        },
        {
          img: a5,
          name: "Steel-Toed Safety Boots",
          age: "These boots protect feet from crushing, punctures, and slips. Equipped with steel or composite toes, anti-slip soles, and insulation, they are vital in factories, warehouses, and construction. Some are waterproof or electrically resistant for specific environments."
        },
        {
          img: a6,
          name: "Fire Extinguishers",
          age: "Available in types A, B, C, D, and K, fire extinguishers are chosen based on the type of fire hazard—wood, liquid, gas, metal, or cooking oils. Every industrial area should have the appropriate extinguisher accessible and staff trained to use them safely."
        },
        {
          img: a7,
          name: "Fire Blankets",
          age: "Fire blankets are flame-resistant sheets used to smother small fires or wrap around individuals to extinguish burning clothes. Made of fiberglass or wool, they are useful in labs, kitchens, and chemical areas as a quick-response fire control tool."
        },
        {
          img: a8,
          name: "Emergency Exit Signage & Lighting",
          age: "Clearly visible signs and lights guide personnel during emergencies such as fires or power failures. These systems ensure safe evacuation by marking routes and exits. Powered by battery backups, they are essential in meeting safety regulations and reducing panic."
        },
        {
          img: a9,
          name: "First Aid Kits",
          age: "First aid kits provide immediate medical care in case of injury. They contain bandages, antiseptic, eye wash, burn ointments, scissors, and CPR shields. Industrial kits are more extensive than home kits and are customized for specific risks present in the workplace."
        },
        {
          img: a10,
          name: "Gas Detectors / Alarms",
          age: "Used to detect dangerous levels of toxic gases, flammable vapors, or lack of oxygen. These sensors trigger alarms and help evacuate or mitigate leaks. Portable and fixed systems are used in confined spaces, chemical factories, and hazardous environments."
        },
        {
          img: a11,
          name: "Fall Protection Systems",
          age: "Fall protection includes harnesses, anchor points, lanyards, and guardrails. It ensures worker safety when operating at heights. Common in construction, roofing, and maintenance work, these systems prevent life-threatening falls and must comply with OSHA and industry regulations."
        },
        {
          img: a12,
          name: "Safety Data Sheets (SDS)",
          age: "SDS provide critical safety information about chemical substances—covering handling, storage, disposal, and emergency actions. Required for all hazardous chemicals in workplaces, they help educate workers on risks, proper use, and what to do during spills or exposures."
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
            Industrial Safety Equipment
    </h1>
    <p className="testimonial-author">— Industrial safety refers to the management of all operations and events within an industry to protect employees, assets, and the environment from hazards. It involves the use of personal protective equipment (PPE), proper training, safety protocols, emergency procedures, and hazard detection systems. Its goal is to reduce accidents, ensure compliance, and promote a safe and healthy workplace for all.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>Electrical Safety Equipments</h2>
  <div className="zoom-grid">
    {industrialSafetyRequirements.map((item, i) => (
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

export default Industry