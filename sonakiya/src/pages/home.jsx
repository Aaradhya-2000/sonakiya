import a1 from "../images/home/a1.png"
import v1 from "../images/a1.jpeg"
import v2 from "../images/a2.jpeg"
import v3 from "../images/a3.jpeg"
import v4 from "../images/a4.jpeg"

import a2 from "../images/home/a2.png"
import a3 from "../images/home/a3.png"
import a4 from "../images/home/a4.png"
import a5 from "../images/home/a5.png"
import a6 from "../images/home/a6.png"
// import styles from './Images.module.css';

import logo from '../images/logo.jpeg'
// import a7 from "../images/home/a7.png"
// import a8 from "../images/home/a8.png"
// import a9 from "../images/home/a9.png"
// import a10 from "../images/home/a10.png"
// import a11 from "../images/home/a11.png"
// import a12 from "../images/home/a12.png"
// import a13 from "../images/home/a13.png"
// import a14 from "../images/home/a14.png"
// import a15 from "../images/home/a15.png"


// import b1 from "../images/products/a1.png"
// import b2 from "../images/products/a2.png"
// import b3 from "../images/products/a3.png"
// import b4 from "../images/products/a4.png"
// import b5 from "../images/products/a5.png"
// import b6 from "../images/products/a6.png"
// import b7 from "../images/products/a7.png"
// import b8 from "../images/products/a8.png"
// import a1 from "../images/products/a1.jpeg"
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Link } from "react-router-dom"
import { useEffect ,useRef,useState } from "react"
import Carousel from 'react-bootstrap/Carousel';
// import Carouse2 from "./caurosel"
import Images from "../Components/images"
import Carousel1 from "./caurosel1"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BelowNav from "../Components/belowHero"
import ClientSection from "../Components/cleint"
// import Carousel1 from "./caurosel1"

const Home = ()=>{
  const wrappersRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);
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
      useEffect(() => {
        const handleScroll = () => {
          const newVisibleItems = wrappersRef.current.map((el) => {
            if (!el) return false;
            const top = el.getBoundingClientRect().top;
            return top <= window.innerHeight * 0.85; // adjust trigger point here
          });
          setVisibleItems(newVisibleItems);
        };
    
        handleScroll(); // check on mount
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      const items = [
        {
          img: a1,
          text: `We offer fast and secure shipping to ensure your order reaches safely and on time. With standard, express, and same-day delivery in select areas, plus real-time tracking, your satisfaction is our top priority.`
        },
        {
          img: a2,
          text: `Order quickly with just a phone call! Our on-call ordering service makes shopping easy, with personal support, flexible payment options, and updates via WhatsApp or SMS. Convenient and fast for everyone.`
        },
        {
          img: a3,
          text: `Saving money helps build a strong financial future. Create a budget, avoid impulse spending, and set aside monthly savings. Even small efforts lead to big benefits, peace of mind, and long-term success.`
        },
        {
          img: a4,
          text: `Promotion boosts visibility for products or careers. In business, it means more sales and recognition; in life, it means career growth. Smart promotion opens opportunities, builds trust, and drives lasting success.`
        },
        {
          img: a5,
          text: `Happy selling means creating a great buying experience. When sellers are positive and helpful, customers feel valued and return again. It builds trust, loyalty, and a friendly, successful business relationship.`
        },
        {
          img: a6,
          text: `Our 24×7 service ensures support anytime, anywhere. Whether placing orders or getting help, customers enjoy round-the-clock convenience and reliability. It’s perfect for busy lives and builds trust with every interaction.`
        },
      ];
      
    return(
        <>
        <header className="hero-section scroll-animate fade-up">
         {/* <div className="hero" style={{width:"100%"}}>
            <div className="hero1">
                
                    <p id="p1">Equipments-in-offer</p>
                    
                    <h1 id="h1">Super value deals</h1>
                    <h1>On all products</h1>
                     <h3 style={{fontSize:"28px"}}>
                     Call Us Now & Save Extra!</h3>
                     <p style={{width:"100%",textAlign:"left",color:"black",fontSize:"25px",fontWeight:"900",marginTop:"8px"}}>
                     +91-9755920636 /+91-8103953176</p>
                    {/* <button><a href="#">OUR SERVICES</a></button> */}
                
            {/* </div> */}
        {/* </div> */} 
        <Carousel >
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={v1} alt="" style={{width:"100%",height:"100vh"}} />
        <Carousel.Caption>
        <p style={{fontSize:"25px",marginLeft:"450px",color:"navyBlue"}}>+91-9755920636 / +91-8103953176</p>
        <h1  style={{fontSize:"48px",marginBottom:"200px",marginLeft:"400px",color:"white"}}>  Call Us Now & Save Extra! </h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={v3} alt="" style={{width:"100%",height:"100vh"}} />
        <Carousel.Caption>
           <h1  style={{fontSize:"48px",marginBottom:"40px",marginLeft:"400px",color:"black"}}>  Equipments-in-offer </h1>
           {/* <h2 style={{fontSize:"60px",marginBottom:"400px",marginLeft:"400px",color:"black"}}>Super value deals
           </h2> */}
          <p  style={{fontSize:"48px",marginBottom:"100px",marginLeft:"400px",color:"white"}}> Super Value Deals <br /> On All Products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={v2} alt="" style={{width:"100%",height:"100vh"}} />
        <Carousel.Caption>
          <h3 style={{fontSize:"48px",marginBottom:"40px",marginLeft:"400px",color:"black"}}>Third slide label</h3>
          <p style={{fontSize:"48px",marginBottom:"100px",marginLeft:"400px",color:"white"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={v4} alt="" style={{width:"100%",height:"100vh"}} />
        <Carousel.Caption>
          <h3 style={{fontSize:"48px",marginBottom:"40px",marginLeft:"400px",color:"black"}}>Office Equipments</h3>
          <p style={{fontSize:"48px",marginBottom:"100px",marginLeft:"400px",color:"white"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </header>
       
       <div className="s">
         <img src={logo} alt="" style={{height:"350px",width:"350px"}} />
         <div className="testimonial-section scroll-animate zoom-in">
  <div className="testimonial-card">
    <h1 className="testimonial-text" style={{textAlign:"center"}}>
    About Us
    </h1>
    <p className="testimonial-author">— Sonakiya and Sons, based in Bhopal, Madhya Pradesh, is a company that specializes in providing a range of safety solutions and equipment. They deal with various types of Personal Protective Equipment (PPE), including head, hand, and foot protection, fire protection, and fall protection. Beyond PPE, they also offer road safety equipment, marine safety products, industrial safety equipment, and life-saving/rescue equipment. The company emphasizes innovation, sustainability, and customer experience. </p>
  </div>
</div>

          
       </div>
      
           <BelowNav/>
      
      
            <Images/>

        <div className="testimonial-section scroll-animate zoom-in">
  <div className="testimonial-card">
    <h1 className="testimonial-text" style={{textAlign:"center"}}>
    WHO WE ARE
    </h1>
    <p className="testimonial-author">— We feel immense pleasure to introduce ourselves as SONAKIYA & SON'S (Since, 2021) dealing in "Industrial Safety, Personal Protective Equipment, Road Safety Equipment & Fire Fighting Equipments" for the entire region of Madhya Pradesh having our registered offices at Bhopal Madhya Pradesh We are fast growing Establishment, serving in the field of various Industrial Safety Equipments, Fire Fighting Equipments, House Keeping Chemicals and Equipments.</p>
  </div>
</div>

<ClientSection/>
        
        </>
    )
}


export default Home;