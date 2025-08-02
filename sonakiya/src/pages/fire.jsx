

 import a1 from "../images/fire/a1.jpg"
 import a2 from "../images/fire/a2.jpg"
 import a3 from "../images/fire/a3.jpg"
 import a4 from "../images/fire/a4.jpg"
 import a5 from "../images/fire/a5.jpg"
 import a6 from "../images/fire/a6.jpg"
 import a7 from "../images/fire/a7.jpg"
 import a8 from "../images/fire/a8.jpg"
 import a9 from "../images/fire/a9.jpg"
 import a10 from "../images/fire/a10.jpg"
 import a11 from "../images/fire/a11.jpg"
 import a12 from "../images/fire/a12.jpg"
 import a13 from "../images/fire/a13.jpg"
 import a14 from "../images/fire/a14.jpg"
 import a15 from "../images/fire/a15.jpg"
 import a16 from "../images/fire/a16.jpg"
 import React from 'react';
 // import { Swiper, SwiperSlide } from 'swiper/react';
 // import { Autoplay, EffectFade } from 'swiper/modules';
 import { motion } from 'framer-motion';
 import 'swiper/css';
 import 'swiper/css/effect-fade';
 import { useEffect } from "react"
 // import { motion } from "framer-motion";
//  import { useEffect } from 'react';
const fireSafetyProducts = [
  {
    img: a1,
    name: "Fire Extinguisher",
    age: "Portable device that quickly extinguishes small fires using chemical agents. Essential for homes, offices, and industries. Simple to use and maintain, it provides immediate response to control fire until professionals arrive."
  },
  {
    img: a2,
    name: "Fire Extinguisher Spares",
    age: "Includes hoses, nozzles, gauges, and pins that maintain extinguisher performance. Regular replacement ensures reliability and safety, extending extinguisher lifespan and compliance with fire safety standards."
  },
  {
    img: a3,
    name: "Fire Hydrant Valve",
    age: "Controls water flow from hydrants during firefighting. Built for durability and high pressure, these valves ensure fast, reliable water access in buildings and industrial zones."
  },
  {
    img: a4,
    name: "Fire Hydrant Spares",
    age: "Consists of gaskets, seals, and valve parts critical for hydrant operation. Enables quick repairs, maintaining functionality and readiness during fire emergencies in commercial and industrial settings."
  },
  {
    img: a5,
    name: "Fire Hose Reel",
    age: "A rotating drum with a durable hose, allowing quick water deployment. Provides steady water flow for firefighting in buildings and factories. Easy to handle and essential for emergency response."
  },
  {
    img: a6,
    name: "Fire Hose Box",
    age: "Weather-resistant cabinet storing hoses and accessories. Ensures equipment protection and quick access in emergencies. Crucial for organization and readiness in fire safety systems."
  },
  {
    img: a7,
    name: "Fire Hose Pipe",
    age: "High-pressure, heat-resistant hoses delivering water during firefighting. Connects to hydrants or pumps, offering flexibility and durability for effective fire control."
  },
  {
    img: a8,
    name: "Fire Branch Nozzle",
    age: "Directs water flow with adjustable spray patterns. Ergonomic, corrosion-resistant, and pressure-resistant for precise firefighting in various settings."
  },
  {
    img: a9,
    name: "Fire Male Female Coupling",
    age: "Durable fittings connecting hoses to nozzles and pumps. Ensure leak-proof, secure connections, enabling fast deployment and smooth water delivery under pressure."
  },
  {
    img: a10,
    name: "Fire Monitor",
    age: "High-volume water or foam cannon used to control large fires. Mounted on trucks or platforms, offering powerful, directional flow for industrial firefighting."
  },
  {
    img: a11,
    name: "Fire Nozzle",
    age: "Controls hose water flow with adjustable sprays from jet to fog. Made for durability and reliable firefighting in residential, commercial, and industrial environments."
  },
  {
    img: a12,
    name: "Triple Purpose Nozzle",
    age: "Multi-functional nozzle switching between jet, spray, and shut-off modes. Corrosion-resistant and ergonomic, it supports versatile firefighting and quick fire suppression."
  },
  {
    img: a13,
    name: "Fire Blanket",
    age: "Fire-resistant fabric used to smother small fires by cutting oxygen supply. Lightweight, compact, and easy to use for quick first-response fire safety."
  },
  {
    img: a14,
    name: "Water Gel Blanket",
    age: "Cooling gel-infused blanket providing burn relief and protection. Sterile and easy to apply, it reduces burn severity until professional medical care is available."
  },
  {
    img: a15,
    name: "First Aid Box",
    age: "Contains essential medical supplies for treating injuries quickly. Organized and clearly labeled to support immediate first aid in homes, offices, and vehicles."
  },
  {
    img: a16,
    name: "FR Fire Fighting Suit",
    age: "Fire-resistant protective gear for firefighters. Includes gloves, boots, helmet, and reflective strips. Provides heat protection, mobility, and safety during firefighting missions."
  }
];

   

const Fire = () => {
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
     <header className="hero-section scroll-animate fade-up">
         <div className="hero product" style={{width:"100%"}}>
             <h1></h1>
      </div>
     </header>


<div className="testimonial-section scroll-animate slide-left" style={{width:'100%'}}>
  <div className="testimonial-card">
    <h1 className="testimonial-text" style={{textAlign:"center",width:'100%'}}>
        Fire Safety Measurements
    </h1>
    <p className="testimonial-author">— Fire safety encompasses practices designed to reduce fire damage and loss of life. It includes measures to prevent fires, detect them early, and limit their spread and impact. Key aspects include installing and maintaining smoke alarms, creating escape plans, and being aware of common fire hazards.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>Fire Protection</h2>
  <div className="zoom-grid">
    {fireSafetyProducts.map((item, i) => (
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

    <div className="testimonials scroll-animate zoom-in">
            <h1>Our Vision</h1>
            <p>At SONAKIYA & SONS, our vision extends far beyond merely supplying safety equipment. We aspire to become the leading beacon of safety innovation and excellence in Madhya Pradesh and beyond. We envision a future where every industrial and commercial entity is equipped with the most advanced safety solutions, ensuring not only the protection of their workforce but also the sustainability of their operations. Innovate Continuously: By investing in cutting-edge technology and research, we strive to bring the latest advancements in safety equipment to our clients. Our goal is to anticipate future safety challenges and develop proactive solutions that set industry standards. Expand Our Reach: We seek to broaden our presence throughout the nation, making our top-tier safety products accessible to a wider audience. We plan to establish strategic partnerships and collaborations that enhance our distribution network and service capabilities. Promote Sustainability: Safety and sustainability go hand in hand. We endeavor to provide eco-friendly safety solutions that minimize environmental impact. By advocating for sustainable practices and products, we contribute to a healthier planet for future generations. Foster Community Engagement: We believe in giving back to the community. Our vision includes active involvement in community safety initiatives, supporting local causes, and contributing to the overall well-being of the regions we serve. Enhance Customer Experience: Our customers are at the heart of everything we do. We aim to continually improve our customer service, ensuring that every interaction is positive and that our clients receive the best possible support and guidance. Lead with Integrity: Integrity and ethical business practices are the foundation of our operations. We are committed to maintaining transparency, honesty, and accountability in all our dealings, building trust and long-term relationships with our clients.</p>
         
        </div>
    </>
  );
};

export default Fire;
