import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
// import './ClientSection.css'; // 👈 Create this CSS file

import client1 from "../images/client/client_1.jpeg";
import client2 from "../images/client/client_2.jpeg";
import client3 from "../images/client/client_3.jpeg";
import client4 from "../images/client/client_4.jpeg";
import client5 from "../images/client/client_5.jpeg";
import client6 from "../images/client/client_6.jpeg";
import client7 from "../images/client/client_7.jpeg";
import client8 from "../images/client/client_8.jpeg";
import client9 from "../images/client/client_9.jpeg";

const ClientSection = () => {
  const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9];

  return (
    <section className="client-section">
      <h2 className="client-heading">Our Trusted Clients</h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="client-swiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {clients.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="client-logo-container">
              <img src={img} alt={`Client ${index + 1}`} className="client-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientSection;
