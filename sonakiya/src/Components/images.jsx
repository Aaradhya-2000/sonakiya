import React from 'react';
import b1 from "../images/products/a1.png";
import b2 from "../images/products/a2.png";
import b3 from "../images/products/a3.png";
import b4 from "../images/products/a4.png";
import b5 from "../images/products/a5.png";
import b6 from "../images/products/a6.png";
import b7 from "../images/products/a7.png";
import b8 from "../images/products/a8.png";

const productImages = [
  {
    src: b1,
    alt: "Welding Mask",
    name: "Welding Mask",
    description: "Protect your face and eyes from sparks and UV rays during welding. This durable welding mask ensures maximum safety, visibility, and comfort for prolonged industrial use."
  },
  {
    src: b2,
    alt: "Fire Blanket",
    name: "Fire Blanket",
    description: "A compact and essential safety tool for extinguishing small fires quickly. Stored in a convenient canister, it's ideal for homes, kitchens, and industrial spaces to prevent fire spread instantly."
  },
  {
    src: b3,
    alt: "Fire Hose Nozzle",
    name: "Fire Hose Nozzle",
    description: "High-quality brass nozle designed for precision water flow control during firefighting. Built to handle intense water pressure, it's a reliable tool in any fire emergency setup or training."
  },
  {
    src: b4,
    alt: "Safety Rope",
    name: "Safety Rope",
    description: "Heavy-duty rope designed for rescue, climbing, or safety support. Its thick build and reinforced grip offer excellent durability and resistance during physically demanding tasks or emergency responses."
  },
  {
    src: b5,
    alt: "Safety Helmet",
    name: "Safety Helmet",
    description: "Impact-resistant yellow helmet offering superior head protection in construction or industrial environments. Lightweight and adjustable, it ensures safety without compromising on comfort during long work hours."
  },
  {
    src: b6,
    alt: "Reflective Safety Vest",
    name: "Reflective Safety Vest",
    description: "Fluorescent vest with reflective strips ensures high visibility for workers in low-light or roadside conditions. Comfortable and breathable, it's essential for traffic, construction, and nighttime safety operations."
  },
  {
    src: b7,
    alt: "Searchlight",
    name: "Searchlight",
    description: "High-powered handheld searchlight provides strong illumination for outdoor use, emergencies, or industrial tasks. Rechargeable and durable, it’s perfect for dark zones, power cuts, or nighttime work."
  },
  {
    src: b8,
    alt: "Safety Shoes",
    name: "Safety Shoes",
    description: "Tough leather safety shoes with steel toes offer protection against heavy impacts. Comfortable design with firm grip sole makes them ideal for construction, factories, or warehouse environments."
  },
];

const Images = () => {
  return (
    <div className="products py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wide">
        Our Product Showcase
      </h1>
      <div className="product-img grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {productImages.map((image, index) => (
          <div key={index} className="product-item relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-[350px] h-[350px] object-cover mx-auto"
            />
            <div className="overlay">
              <div className="overlay-content">
                <span className="overlay-highlight">{image.name}</span>
                <span className="overlay-text">{image.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;