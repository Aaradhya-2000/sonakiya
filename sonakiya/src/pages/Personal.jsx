
import a1 from "../images/others/personal/a1.png"
import a2 from "../images/others/personal/a2.png"
import a3 from "../images/others/personal/a3.png"
import a4 from "../images/others/personal/a4.png"
import a5 from "../images/others/personal/a5.png"
import a6 from "../images/others/personal/a6.png"
import a7 from "../images/others/personal/a7.png"
import a8 from "../images/others/personal/a8.png"
import a9 from "../images/others/personal/a9.png"
import a10 from "../images/others/personal/a10.png"
import a11 from "../images/others/personal/a11.png"
import a12 from "../images/others/personal/a12.png"
import { useEffect } from "react"
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
const Personal = ()=>{
  const personalSafetyProducts = [
    {
      img: a1,
      name: "Leather Apron",
      age: "A protective apron made from heat-resistant leather, used during welding and grinding tasks. It shields the torso from sparks, splashes, and sharp debris."
    },
    {
      img: a2,
      name: "Leather Leg Guard",
      age: "Durable guards worn on the legs to protect against welding sparks, molten metal, and heat exposure. Essential for welding and industrial fabrication environments."
    },
    {
      img: a3,
      name: "Welding Goggle",
      age: "Protective eyewear designed to shield eyes from intense light, UV radiation, and flying debris during welding and cutting operations."
    },
    {
      img: a4,
      name: "Welding Helmet",
      age: "Head-mounted helmet with a dark lens to protect the face and eyes from welding arc, sparks, and heat. Provides full facial coverage and visibility."
    },
    {
      img: a5,
      name: "Multi Gas Detection",
      age: "A portable device used to detect hazardous gases like carbon monoxide, methane, and oxygen levels in confined spaces or chemical plants."
    },
    {
      img: a6,
      name: "Sound Level Meter",
      age: "Used to measure noise levels in industrial and construction zones. Helps maintain a safe hearing environment and ensures compliance with safety norms."
    },
    {
      img: a7,
      name: "Airline System",
      age: "Supplies clean, breathable air to workers in hazardous environments through a hose and regulator setup. Common in painting, tank cleaning, and chemical plants."
    },
    {
      img: a8,
      name: "Emergency Eye Wash",
      age: "A safety device that provides immediate eye irrigation in case of exposure to harmful chemicals, dust, or debris. Commonly installed in laboratories and factories."
    },
    {
      img: a9,
      name: "Emergency Safety Shower",
      age: "Delivers a high-flow water stream to decontaminate the entire body after chemical spills or fire exposure. Essential for labs and industrial workplaces."
    },
    {
      img: a10,
      name: "Air Breathing Compressor",
      age: "Provides high-pressure, breathable air to airline systems. Used for continuous air supply in confined or hazardous work areas."
    },
    {
      img: a11,
      name: "Oil Moisture Filter",
      age: "Filters out oil and moisture from compressed air systems to ensure clean air supply. Used in breathing air systems and pneumatic tools."
    },
    {
      img: a12,
      name: "Manual Resuscitator",
      age: "Hand-operated breathing device used during medical emergencies to provide ventilation to individuals who are not breathing or are under respiratory distress."
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
        Welding, Gas & Personal Safety Equipments
    </h1>
    <p className="testimonial-author">— If you carry a self defense weapon with you, you may never have to use it, but if there's one time you have to use it, you'll be happy you had it.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>Personal Protection</h2>
  <div className="zoom-grid">
    {personalSafetyProducts.map((item, i) => (
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

export default Personal;