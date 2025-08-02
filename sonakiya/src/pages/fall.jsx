// import { Link } from "react-router-dom"
import a1 from "../images/fall/a1.jpg"
import a2 from "../images/fall/a2.jpeg"
import a3 from "../images/fall/a3.jpeg"
import a4 from "../images/fall/a4.jpeg"
import a5 from "../images/fall/a5.jpeg"
import a6 from "../images/fall/a6.jpeg"
import a7 from "../images/fall/a7.jpeg"
import a8 from "../images/fall/a8.jpeg"
import a9 from "../images/fall/a9.jpeg"
import a10 from "../images/fall/a10.jpeg"
import a11 from "../images/fall/a11.jpeg"
import a12 from "../images/fall/a12.jpeg"
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import { useEffect } from "react"
import { useEffect } from "react"
const Fall = ()=>{
  const fallSafetyProducts = [
    {
      img: a1,
      name: "Full Body Safety Harness",
      age: "A vital fall protection device worn to evenly distribute fall force across the body. It keeps the user upright in case of a fall and is used in construction, maintenance, and tower climbing."
    },
    {
      img: a2,
      name: "Scaffolding Safety Gear",
      age: "Used by workers operating on high scaffolds, this gear includes harnesses, helmets, and lanyards for secure anchorage and fall prevention during elevation-based tasks."
    },
    {
      img: a3,
      name: "Rope Grab Fall Arrester",
      age: "Attached to a lifeline, this device allows free movement along the rope and locks instantly during a fall. Ideal for vertical work positioning and fall arrest."
    },
    {
      img: a4,
      name: "Retractable Fall Arrest Block (SRL)",
      age: "A self-retracting lifeline that automatically adjusts length and locks during a fall. It provides mobility with high fall protection for industrial and tower work."
    },
    {
      img: a5,
      name: "Safety Belt with Double Hook",
      age: "Designed for work positioning, this belt includes two secure hooks to anchor the user, offering support and partial fall prevention while allowing task performance at height."
    },
    {
      img: a6,
      name: "Safety Net (Fall Protection Net)",
      age: "Durable mesh netting installed at construction sites to catch falling objects or personnel. It minimizes injury risk and enhances overall site safety."
    },
    {
      img: a7,
      name: "Tower Climbing Harness",
      age: "Specialized harness offering maximum security and comfort for tower and utility climbers. Equipped with padding and multiple D-rings for tool lanyards and fall arrest."
    },
    {
      img: a8,
      name: "Polypropylene Safety Rope",
      age: "Heavy-duty, braided rope used in fall protection systems for anchorage and climbing. Strong and abrasion-resistant, it supports lifelines and harness attachments."
    },
    {
      img: a9,
      name: "Ascender Rope Device",
      age: "Mechanical tool that allows upward movement on a rope while preventing downward slippage. Commonly used in rescue, mountaineering, and industrial climbing."
    },
    {
      img: a10,
      name: "Cut-Resistant Safety Gloves",
      age: "High-grip gloves with durable material to protect hands from cuts and abrasions. Ideal for handling ropes, tools, and rough surfaces at elevated worksites."
    },
    {
      img: a11,
      name: "Industrial Safety Shoes",
      age: "Sturdy footwear with steel toes and anti-slip soles to protect against falling objects and slips. Essential PPE for all industrial and construction environments."
    },
    {
      img: a12,
      name: "Rubber Safety Gumboots",
      age: "Waterproof and chemical-resistant boots offering protection against wet surfaces, chemicals, and heavy impacts. Used in construction, factories, and cleaning tasks."
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


<div className="testimonial-section scroll-animate slide-left" style={{width:'100%'}}>
  <div className="testimonial-card">
    <h1 className="testimonial-text" style={{textAlign:"center"}}>
        Fall Safety Measurements
    </h1>
    <p className="testimonial-author">— Fall safety measurement involves assessing and quantifying the likelihood of a fall occurring and the potential consequences of a fall. This includes identifying risk factors, measuring fall-related behaviors, and evaluating the effectiveness of fall prevention interventions. </p>
  </div>
</div>
<section className="carousel-section">
  <h2>Fall Protection</h2>
  <div className="zoom-grid">
    {fallSafetyProducts.map((item, i) => (
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


export default Fall