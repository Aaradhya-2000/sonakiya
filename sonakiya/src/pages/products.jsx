import { Link,Outlet } from "react-router-dom"
// import { useState } from "react"
import { useNavigate,useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';


const Product = ()=>{
   
    const navigate =  useNavigate();
    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState("other");
   const handleChange = (e)=>{
    const select = e.target.value;
    if(select){
        navigate(`/product/${select}`)
    }
   }
   useEffect(() => {
    const path = location.pathname;
    const lastSegment = path.split("/").pop();
    if (!["v", "fire", "fall", "signage", "personal", "other"].includes(lastSegment)) {
      setSelectedOption("other");
    } else {
      setSelectedOption(lastSegment);
    }
  }, [location]);

    return(
        <>
         <header className="hero-section scroll-animate fade-up">
         <div className="hero product" style={{width:"100%"}}>
              <h1></h1>
        </div>
        </header>
        
       

        </>
    )
}

export default Product