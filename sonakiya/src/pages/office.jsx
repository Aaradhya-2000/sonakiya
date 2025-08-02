
import a1 from "../images/office/a1.jpeg"
import a2 from "../images/office/a2.jpeg"
import a3 from "../images/office/a3.jpeg"
import a4 from "../images/office/a4.jpeg"
import a5 from "../images/office/a5.jpeg"
import a6 from "../images/office/a6.jpeg"
import a7 from "../images/office/a7.jpeg"
import a8 from "../images/office/a8.jpeg"
import a9 from "../images/office/a9.jpeg"
import a10 from "../images/office/a10.jpeg"
import a11 from "../images/office/a11.jpeg"
import a12 from "../images/office/a12.jpeg"

import { useEffect } from "react"
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
const Office = ()=>{
    const officeEquipments = [
      {
        img: a1,
        name: "Computer Table",
        age: "A sturdy wooden computer table designed to accommodate desktop setups and essential peripherals. It enhances workspace organization and provides a comfortable and spacious area for efficient work in both home and office settings."
      },
      {
        img: a2,
        name: "Dining Table (SS)",
        age: "A durable stainless steel dining table used commonly in office canteens and institutions. It offers hygienic and spacious communal dining with easy maintenance, ensuring long-term usability and comfort."
      },
      {
        img: a3,
        name: "Dual Desk",
        age: "A dual-seating desk ideal for classrooms and shared office environments. It encourages collaboration, saves space, and provides ample room for writing, reading, or using devices effectively."
      },
      {
        img: a4,
        name: "Executive Chair",
        age: "An ergonomic executive chair with high back support, adjustable features, and cushioning. It ensures comfort during extended work hours, making it ideal for executives and managers."
      },
      {
        img: a5,
        name: "Executive Table",
        age: "A sleek executive table with a modern finish and spacious surface area. Equipped with drawers and compartments, it offers functionality and style for any managerial office."
      },
      {
        img: a6,
        name: "File Cabinet",
        age: "A metal file cabinet designed for organizing files and documents. It features multiple compartments and enhances filing efficiency in office, school, or hospital settings."
      },
      {
        img: a7,
        name: "Glass Door Almirah",
        age: "A stylish glass-front almirah used for showcasing awards, books, or supplies. It blends aesthetics with utility, commonly found in reception areas or administrative rooms."
      },
      {
        img: a8,
        name: "Hostel Bed",
        age: "A strong metal-frame hostel bed built for durability in shared accommodations. It's suitable for hostels, staff housing, and dormitories due to its compact and sturdy design."
      },
      {
        img: a9,
        name: "Modular Work Station",
        age: "A modular workstation designed for collaborative workspaces. It offers personal space within open-plan offices and is optimized for productivity and organized workflow."
      },
      {
        img: a10,
        name: "Office Almirah",
        age: "A robust metal almirah used to secure documents, stationery, and valuables. It’s a staple in offices due to its reliability, spacious design, and locking features."
      },
      {
        img: a11,
        name: "Office Chair",
        age: "A mesh-back office chair with ergonomic support. Suitable for all-day desk use, it promotes healthy posture and ensures comfort in corporate and educational environments."
      },
      {
        img: a12,
        name: "Sofa Office",
        age: "A plush sofa set designed for office lobbies or executive lounges. It enhances visitor comfort and adds a welcoming ambiance to corporate interiors."
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
        Office Equipments
    </h1>
    <p className="testimonial-author">— Office equipment includes essential tools used to support day-to-day tasks in a workplace. Common items are computers, printers, photocopiers, scanners, telephones, and shredders. These devices enhance productivity, streamline communication, and support documentation. Additional equipment like projectors, laminators, and multifunction printers serve administrative and presentation needs. Ergonomic furniture and safety devices like UPS and fire extinguishers also fall under office equipment. Together, they create a functional, efficient, and safe work environment, enabling smooth business operations and professional workflow management.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>offiice Equioments</h2>
  <div className="zoom-grid">
    {officeEquipments.map((item, i) => (
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