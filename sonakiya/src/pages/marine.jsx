


import a1 from "../images/marine/a1.jpeg"
import a2 from "../images/marine/a2.jpeg"
import a3 from "../images/marine/a3.jpeg"
import a4 from "../images/marine/a4.jpeg"
import a5 from "../images/marine/a5.jpeg"
import a6 from "../images/marine/a6.jpeg"
import a7 from "../images/marine/a7.jpeg"
import a8 from "../images/marine/a8.jpeg"
import a9 from "../images/marine/a9.jpeg"
import a10 from "../images/marine/a10.jpeg"
import a11 from "../images/marine/a11.jpeg"
import a12 from "../images/marine/a12.jpeg"


import { useEffect } from "react"
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
const Office = ()=>{
    const marineSafetyEquipments = [
        {
          img: a1,
          name: "Life Jacket",
          age: "A life jacket is a personal flotation device worn around the torso to keep individuals afloat in water. It helps prevent drowning by keeping the head above water, even when unconscious. Life jackets are mandatory on most vessels and are essential in emergencies or rough seas for both swimmers and non-swimmers."
        },
        {
          img: a2,
          name: "Life Buoy",
          age: "A life buoy is a ring-shaped flotation device thrown to a person who has fallen overboard. It allows the individual to stay afloat until help arrives. Usually brightly colored for visibility, life buoys are commonly mounted on ships, boats, and docks to enable quick deployment in water emergencies."
        },
        {
          img: a3,
          name: "Life Raft",
          age: "A life raft is an inflatable boat used for emergency evacuation at sea. It deploys automatically when needed and provides flotation and shelter to survivors. Equipped with survival supplies and signaling tools, life rafts are vital in the event of ship abandonment due to fires, collisions, or sinking."
        },
        {
          img: a4,
          name: "EPIRB (Emergency Beacon)",
          age: "An EPIRB is a distress radio beacon used in marine emergencies. When activated, it transmits a signal via satellite to rescue authorities, including GPS location. EPIRBs are waterproof and float, making them essential for survival at sea where communication and visibility may be limited or lost."
        },
        {
          img: a5,
          name: "Marine Flares",
          age: "Marine flares are used to signal distress and attract help. They emit bright lights or smoke and are visible from long distances. They are especially helpful during night or low-visibility emergencies and are mandatory on most vessels for alerting rescuers to the vessel’s location."
        },
        {
          img: a6,
          name: "Survival Suit",
          age: "A survival suit is a waterproof and insulated suit worn in cold water emergencies. It helps retain body heat and keeps the wearer dry, increasing survival time in freezing conditions. Survival suits are required for crew on ships operating in cold climates and offshore environments."
        },
        {
          img: a7,
          name: "Fire Extinguisher",
          age: "A marine fire extinguisher is designed to combat onboard fires, including electrical and fuel-based fires. Compact and easy to use, it is a legal requirement on most boats. Regular maintenance ensures it functions in emergencies, making it a crucial part of onboard safety equipment."
        },
        {
          img: a8,
          name: "First Aid Kit",
          age: "Marine first aid kits contain essential medical supplies like antiseptics, bandages, seasickness tablets, and tools for treating injuries or illnesses onboard. These kits are designed to withstand marine conditions and are critical for stabilizing health issues while awaiting professional help or reaching shore."
        },
        {
          img: a9,
          name: "Whistle or Horn",
          age: "Marine whistles or air horns are sound-signaling devices used to alert other vessels or signal emergencies. They are important in poor visibility or crowded waters. Required on all boats, these devices are loud, compact, and easy to use for communication or distress signaling."
        },
        {
          img: a10,
          name: "Navigation Lights",
          age: "Navigation lights are used on vessels to indicate position, direction, and activity. Red, green, and white lights ensure visibility to others during night or fog. They help prevent collisions by communicating the boat’s orientation and movement, making them a legal safety requirement on all vessels."
        },
        {
          img: a11,
          name: "Throwable Rescue Device",
          age: "A throwable rescue device, such as a heaving line or floating cushion, is used to aid someone overboard. It provides flotation until rescue and is easily thrown from the vessel. Quick deployment and simplicity make it vital for man-overboard situations on boats and ships."
        },
        {
          img: a12,
          name: "Bilge Pump",
          age: "A bilge pump removes water from a boat’s bilge area to prevent flooding. It can be manual or electric and is essential during rough seas or in case of leaks. By keeping the boat dry and afloat, it maintains stability and safety onboard."
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
         <header className="hero-section scroll-animate fade-up">
         <div className="hero product" style={{width:"100%"}}>
             <h1></h1>
      </div>
     </header>

        <div className="testimonial-section scroll-animate zoom-in" style={{width:'100%'}}>
  <div className="testimonial-card">
    <h1 className="testimonial-text" style={{textAlign:"center"}}>
        Marine Safety Equipments
    </h1>
    <p className="testimonial-author">— Marine safety equipment is essential for protecting lives at sea. Key items include life jackets, life buoys, and life rafts for flotation and rescue, while EPIRBs and flares ensure quick emergency signaling. Fire extinguishers, survival suits, and first aid kits handle onboard hazards. Navigation lights, whistles, and bilge pumps help prevent accidents, making every voyage safer and better prepared.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>Marine Safety Equipments</h2>
  <div className="zoom-grid">
    {marineSafetyEquipments.map((item, i) => (
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
    )
}

export default Office;