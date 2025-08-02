

import { useEffect } from "react";
import { motion } from 'framer-motion';
import 'swiper/css';

import 'swiper/css/effect-fade';
import a1 from "../images/respiratory/a1.jpeg"
import a2 from "../images/respiratory/a2.jpeg"
import a3 from "../images/respiratory/a3.jpeg"
import a4 from "../images/respiratory/a4.jpeg"
import a5 from "../images/respiratory/a5.jpeg"
import a6 from "../images/respiratory/a6.jpeg"
import a7 from "../images/respiratory/a7.jpeg"
import a8 from "../images/respiratory/a8.jpeg"
import a9 from "../images/respiratory/a9.jpeg"
import a10 from "../images/respiratory/a10.jpeg"
import a11 from "../images/respiratory/a11.jpeg"
const Respiratory = ()=>{
    const respiratoryProtectionEquipment = [
        {
          img: a1,
          name: "N95 Respirator Mask",
          age: "The N95 respirator mask filters out 95% of airborne particles. It fits snugly on the face, offering reliable protection in medical and industrial settings. Widely used in healthcare, it guards against viruses, dust, and other contaminants, promoting safe breathing in polluted or infectious environments."
        },
        {
          img: a2,
          name: "Half Face Respirator",
          age: "This mask covers the nose and mouth and uses replaceable filters. It provides protection against gases, vapors, and particles, making it ideal for paint jobs, chemical exposure, or sanding work. Its ergonomic design ensures long-term comfort and safety."
        },
        {
          img: a3,
          name: "Full Face Respirator",
          age: "Offering full facial protection, this mask seals the eyes, nose, and mouth. It is suited for chemical plants and hazardous workplaces. The clear shield maintains visibility, while the tight seal keeps out toxic fumes and airborne particles."
        },
        {
          img: a4,
          name: "PAPR (Powered Air Purifying Respirator)",
          age: "PAPRs use battery power to push clean air into a facepiece or hood. These are great for extended use and reduce breathing strain. They are commonly used in healthcare, labs, and manufacturing environments for added comfort."
        },
        {
          img: a5,
          name: "SCBA (Self-Contained Breathing Apparatus)",
          age: "SCBAs supply breathable air from a tank worn on the back. They are essential in fire rescue and confined spaces. The full-face mask and secure harness allow safe work in oxygen-deficient or toxic atmospheres."
        },
        {
          img: a6,
          name: "Dust Mask",
          age: "Dust masks are lightweight and disposable. They offer basic protection from non-toxic particles like pollen, dirt, or sawdust. Used in construction and DIY work, these masks are not for hazardous gases but reduce inhalation of large particulates."
        },
        {
          img: a7,
          name: "Surgical Mask",
          age: "Surgical masks are loose-fitting, disposable masks used to block droplets and reduce infection. Worn by doctors and patients, they provide a barrier during surgeries, checkups, or everyday health protection in crowded places."
        },
        {
          img: a8,
          name: "Escape Respirator",
          age: "Escape respirators are used for emergencies like fires or gas leaks. They are easy to wear quickly and provide temporary protection. Compact and reliable, they are essential in factories, chemical labs, and enclosed workplaces."
        },
        {
          img: a9,
          name: "Airline Respirator",
          age: "This respirator delivers clean air from a separate air source via a hose. It is used in confined or toxic environments where portable air is required. Common in paint booths and chemical facilities, it allows for long-duration use."
        },
        {
          img: a10,
          name: "Respirator Cartridge Filters",
          age: "These attachable filters trap gases, vapors, or particulates based on their rating. Workers can customize their respirator based on the threat. They are used in painting, welding, and chemical industries for targeted protection."
        },
        {
          img: a11,
          name: "Respirator Cleaning Wipes",
          age: "These wipes sanitize respirators by removing dirt, sweat, and bacteria. Used after each shift, they maintain hygiene and extend respirator life. Ideal in hospitals and industrial sites for proper respirator care."
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
            Respiratory Safety Equipment
    </h1>
    <p className="testimonial-author">— Respiratory safety equipment protects against harmful airborne substances. Key devices include N95 respirators, filtering 95% of particles, ideal for dust and pathogens; half/full-face respirators with cartridges for chemical vapors; and PAPRs (Powered Air-Purifying Respirators) for enhanced comfort in high-risk environments. Regular fit-testing ensures effectiveness. Used in healthcare, construction, and industrial settings, these tools prevent respiratory illnesses by ensuring clean air intake, safeguarding workers from pollutants, fumes, and infectious agents.</p>
  </div>
</div>

<section className="carousel-section">
  <h2>Electrical Safety Equipments</h2>
  <div className="zoom-grid">
    {respiratoryProtectionEquipment.map((item, i) => (
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

export default Respiratory