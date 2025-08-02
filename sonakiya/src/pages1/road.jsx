import a1 from "../images/road/a1.jpeg"
import a2 from "../images/road/a2.jpeg"
import a3 from "../images/road/a3.jpeg"
import a4 from "../images/road/a4.jpeg"
import a5 from "../images/road/a5.jpeg"
import a6 from "../images/road/a6.jpeg"
import a7 from "../images/road/a7.jpeg"
import a8 from "../images/road/a8.jpeg"
import a9 from "../images/road/a9.jpeg"
import a10 from "../images/road/a10.jpeg"
import a11 from "../images/road/a11.jpeg"
import a12 from "../images/road/a12.jpeg"
import a13 from "../images/road/a13.jpeg"
import a14 from "../images/road/a14.jpeg"
import a15 from "../images/road/a15.jpeg"
import a16 from "../images/road/a16.jpeg"
import a17 from "../images/road/a17.jpeg"
import a18 from "../images/road/a18.jpeg"
import { useEffect } from "react";
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
const Road = ()=>{
    const roadSafetyEquipments = [
        {
          img: a1,
          name: "Traffic Cone",
          age: "Traffic cones are used to direct vehicles and pedestrians away from construction zones or hazards. They are lightweight, portable, and highly visible for temporary use."
        },
        {
          img: a2,
          name: "Spring Post",
          age: "Spring posts are flexible lane markers that rebound after impact. Used for lane division and road guidance, they are ideal in tight curves or high-traffic areas."
        },
        {
          img: a3,
          name: "Speed Bumps",
          age: "Speed bumps are raised strips installed across roads to slow down vehicles in areas with pedestrian activity, improving safety in residential or school zones."
        },
        {
          img: a4,
          name: "Road Studs",
          age: "Road studs, or cat’s eyes, reflect headlights at night to improve lane visibility. They guide drivers on curves and poorly lit roads."
        },
        {
          img: a5,
          name: "Road Barriers",
          age: "Road barriers block or redirect vehicle flow in construction zones or during accidents. Made of plastic or concrete, they ensure area safety."
        },
        {
          img: a6,
          name: "Convex Mirror",
          age: "Convex mirrors are used at blind spots, driveways, and parking areas to provide a wide-angle view, helping drivers avoid collisions."
        },
        {
          img: a7,
          name: "Dome Mirror",
          age: "Dome mirrors are installed in indoor environments like warehouses or offices to monitor activities and prevent collisions in blind corners."
        },
        {
          img: a8,
          name: "Warning Bollards",
          age: "Warning bollards are portable markers placed on roads or events for visibility and guidance. Often used by police or traffic control units."
        },
        {
          img: a9,
          name: "Search Light",
          age: "Search lights are powerful handheld lights used in emergency or night-time operations to provide visibility in low-light road scenarios."
        },
        {
          img: a10,
          name: "Truck Stopper",
          age: "Truck stoppers are heavy-duty speed humps placed at loading docks to prevent trucks from moving during loading or unloading."
        },
        {
          img: a11,
          name: "Safety Barricades with Fence",
          age: "These lightweight plastic fences with barricades are used in construction zones to prevent entry and guide foot or vehicle traffic."
        },
        {
          img: a12,
          name: "Vehicle Reflective Tape",
          age: "Reflective tapes are applied on vehicle edges for better visibility at night, reducing chances of collision by alerting nearby drivers."
        },
        {
          img: a13,
          name: "Speed Radar Gun",
          age: "Radar guns are used by traffic police to monitor vehicle speeds and enforce speed limits, ensuring safer roads and compliance."
        },
        {
          img: a14,
          name: "Poly Ramp for Pallet",
          age: "Poly ramps help in smooth movement of wheeled equipment over curbs or pallets, useful in temporary roadwork or events."
        },
        {
          img: a15,
          name: "Spark Arrestor",
          age: "A spark arrestor prevents flammable particles from escaping vehicle exhausts, reducing fire hazards in dry or wooded road environments."
        },
        {
          img: a16,
          name: "Wheel Chock",
          age: "Wheel chocks are wedges placed against wheels to prevent accidental vehicle movement, especially useful in slopes or repairs."
        },
        {
          img: a17,
          name: "Delineator Posts",
          age: "Delineator posts are vertical road markers used to guide vehicles along curves, medians, or parking lanes, enhancing night-time safety."
        },
        {
          img: a18,
          name: "Anti-skid Tape",
          age: "Anti-skid tape is applied on roads, stairs, or ramps to prevent slips, especially in wet or high-traffic zones for pedestrian safety."
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
            Road Safety Equipment
    </h1>
    <p className="testimonial-author">— Road safety equipment plays a crucial role in preventing accidents and ensuring smooth traffic flow. Common tools include traffic cones, barricades, speed breakers, and reflective road signs that alert and guide drivers. Convex mirrors improve visibility at blind turns, while safety vests and helmets protect workers and riders. Warning lights and rumble strips enhance night-time safety. Proper use of these tools minimizes risks for drivers, pedestrians, and construction workers, promoting safer roads and reducing the chances of injuries and fatalities.</p>
  </div>
</div>
<section className="carousel-section">
  <h2>Road Safety Equipments</h2>
  <div className="zoom-grid">
    {roadSafetyEquipments.map((item, i) => (
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

export default Road