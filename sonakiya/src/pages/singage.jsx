// import { Link } from "react-router-dom"
import a1 from "../images/singage/a1.jpg"
import a2 from "../images/singage/a2.jpg"
import a3 from "../images/singage/a3.jpg"
import a4 from "../images/singage/a4.jpg"
import a5 from "../images/singage/a5.jpg"
import a6 from "../images/singage/a6.jpg"
import a7 from "../images/singage/a7.jpg"
import a8 from "../images/singage/a8.jpg"
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import { useEffect } from "react"
import { useEffect } from "react"

const Singage = ()=>{
  const safetySignageProducts = [
    {
      img: a1,
      name: "Electric Shock Poster",
      age: "An educational chart illustrating first aid management for electric shock. It outlines symptoms, safety steps, and rescue techniques to help prevent fatalities."
    },
    {
      img: a2,
      name: "Fire Exit Signs",
      age: "Directional signage used to indicate safe escape routes during emergencies. Glow-in-the-dark and highly visible, essential for workplace and building safety compliance."
    },
    {
      img: a3,
      name: "Workplace Safety Rules Poster",
      age: "Poster displaying 10 key safety rules for maintaining a secure work environment. Promotes awareness and safe behavior among employees."
    },
    {
      img: a4,
      name: "No Right Turn Sign",
      age: "Traffic or facility signage indicating a prohibited right turn. Used to control movement and improve traffic or workplace safety."
    },
    {
      img: a5,
      name: "Traffic & Safety Signs",
      age: "Collection of signs that guide, regulate, and inform drivers and pedestrians. Vital for traffic control and workplace navigation."
    },
    {
      img: a6,
      name: "Electrical Arc Suit",
      age: "Full-body suit designed to protect against electrical arc flash hazards. Flame-resistant and insulated, used by electricians and power industry professionals."
    },
    {
      img: a7,
      name: "Electrical Safety Gloves",
      age: "Insulated rubber gloves used for electrical work. They protect against shocks and are mandatory for high-voltage environments."
    },
    {
      img: a8,
      name: "Insulated Rubber Mat",
      age: "Placed near electrical panels and machinery, this mat insulates workers from electric shock. Ideal for substations and industrial electrical rooms."
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
        Singage Safety Signs
    </h1>
    <p className="testimonial-author">— Safety signs and signage play a crucial role in workplace safety, and their effectiveness depends on factors like size, readability, and placement. Key measurements for safety signs include letter height, viewing distance, and sign placement to ensure they are easily seen and understood by workers. Regulations and standards like ANSI Z535.2-2011 and ISO 7010 provide guidance on these measurements.  </p>
  </div>
</div>
<section className="carousel-section">
  <h2>Personal Protection</h2>
  <div className="zoom-grid">
    {safetySignageProducts.map((item, i) => (
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


export default Singage