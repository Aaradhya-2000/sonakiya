import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import { motion } from "framer-motion";
import { useEffect } from 'react';


import a1 from "../images/ProductPage/a1.jpeg"
import a2 from "../images/ProductPage/a2.jpeg"
import a3 from "../images/ProductPage/a3.jpeg"
import a4 from "../images/ProductPage/a4.jpeg"
import a5 from "../images/ProductPage/a5.jpeg"
import a6 from "../images/ProductPage/a6.jpeg"
import a7 from "../images/ProductPage/a7.jpeg"
import a8 from "../images/ProductPage/a8.jpeg"
import a9 from "../images/ProductPage/a9.jpeg"
import a10 from "../images/ProductPage/a10.jpeg"
import a11 from "../images/ProductPage/a11.jpeg"
import a12 from "../images/ProductPage/a12.jpeg"

const Head = ()=>{

    const images = [
      a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12
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
        Safety Measures Taken
    </h1>
    <p className="testimonial-author">— In workplaces where there are potential hazards, both head and hand protection are crucial for safety. Proper head protection, such as hard hats, can prevent serious injuries from impacts and falling objects. Hand protection, like safety gloves, is essential to prevent cuts, burns, bruises, and other injuries from handling tools, materials, and machinery.</p>
  </div>
</div>
       
<section className="carousel-section">
  <h2>Fall Protection</h2>
  <div className="zoom-grid">
    {images.map((src, i) => (
      <div className="zoom-img" key={i}>
        <motion.img
          src={src}
          alt={`zoom-${i}`}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="hover-text">View More</div>
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

export default Head