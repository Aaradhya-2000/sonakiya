import { NavLink, Outlet } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import v1 from "../images/a1.jpeg";
import v2 from "../images/a2.jpeg";
import v3 from "../images/a3.jpeg";
import v4 from "../images/a4.jpeg";

const Other = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={v1} alt="" style={{ width: "100%", height: "100vh" }} />
          <Carousel.Caption>
            <p style={{ fontSize: "25px", marginLeft: "450px", color: "navyBlue" }}>
              +91-9755920636 / +91-8103953176
            </p>
            <h1 style={{ fontSize: "48px", marginBottom: "200px", marginLeft: "400px", color: "white" }}>
              Call Us Now & Save Extra!
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={v3} alt="" style={{ width: "100%", height: "100vh" }} />
          <Carousel.Caption>
            <h1 style={{ fontSize: "48px", marginBottom: "40px", marginLeft: "400px", color: "black" }}>
              Equipments-in-offer
            </h1>
            <p style={{ fontSize: "48px", marginBottom: "100px", marginLeft: "400px", color: "white" }}>
              Super Value Deals <br /> On All Products
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={v2} alt="" style={{ width: "100%", height: "100vh" }} />
          <Carousel.Caption>
            <h3 style={{ fontSize: "48px", marginBottom: "40px", marginLeft: "400px", color: "black" }}>
              Third slide label
            </h3>
            <p style={{ fontSize: "48px", marginBottom: "100px", marginLeft: "400px", color: "white" }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={v4} alt="" style={{ width: "100%", height: "100vh" }} />
          <Carousel.Caption>
            <h3 style={{ fontSize: "48px", marginBottom: "40px", marginLeft: "400px", color: "black" }}>
              Office Equipments
            </h3>
            <p style={{ fontSize: "48px", marginBottom: "100px", marginLeft: "400px", color: "white" }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="other">
        <NavLink
          to="road"
          className={({ isActive }) => (isActive ? "a active-link" : "a")}
        >
          Road Safety Equipments
        </NavLink>
        <NavLink
          to="electric"
          className={({ isActive }) => (isActive ? "a active-link" : "a")}
        >
          Electrical ARC Protection
        </NavLink>
        <NavLink
          to="respiratory"
          className={({ isActive }) => (isActive ? "a active-link" : "a")}
        >
          Respiratory Protection
        </NavLink>
        <NavLink
          to="industry"
          className={({ isActive }) => (isActive ? "a active-link" : "a")}
        >
          Industrial Safety
        </NavLink>
        <NavLink
          to="solar"
          className={({ isActive }) => (isActive ? "a active-link" : "a")}
        >
          Solar Panel 
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};

export default Other;
