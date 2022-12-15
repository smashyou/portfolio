import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Abby Loren",
    review: "Lorem ipsum dolor sequi itaque esse, officiis at?",
  },
  {
    avatar: AVTR2,
    name: "David Gutta",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ad necessitatibus omnis autem ab explicabo ea a dignissimos mollitia soluta provident assumenda aut nulla exercitationem sequi itaque esse, officiis at?",
  },
  {
    avatar: AVTR3,
    name: "Jermane Dingo",
    review:
      "Lorem ipsum dolor necessitatibus omnis autem ab explicabo ea a dignissimos mollitia soluta provident assumenda aut nulla exercitationem sequi itaque esse, officiis at?",
  },
  {
    avatar: AVTR4,
    name: "Angie Singh",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Suscipit ad necessitatibus omnis autem ab explicabo ea a dignissimos mollitia soluta provident assumenda aut nulla exercitationem sequi itaque esse, officiis at?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <div className="client__review-border">
                <small className="client__review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
