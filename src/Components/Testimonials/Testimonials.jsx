import React from "react";
import "./Testimonials.css";
import { BsPersonCircle } from "react-icons/bs";
import AVTR1 from "../../Assets/prnv.jpg";
import AVTR2 from "../../Assets/khushu.jpg";
import AVTR3 from "../../Assets/sukham.jpg";
import AVTR4 from "../../Assets/swastik.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Pranav Tyagi",
    review:
      "Its my privilegde to work with you.It was great experience.This site helped me a lot to learn the concepts.",
  },
  {
    avatar: AVTR2,
    name: "Khushal Mehta",
    review:
      "Its my privilegde to work with you.It was great experience.This site helped me a lot to learn the concepts.",
  },
  {
    avatar: AVTR3,
    name: "Sukham",
    review:
      "Its my privilegde to work with you.It was great experience.This site helped me a lot to learn the concepts.",
  },
  {
    avatar: AVTR4,
    name: "Swastik Gupta",
    review:
      "Its my privilegde to work with you.It was great experience.This site helped me a lot to learn the concepts.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
    // install Swiper modules
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}>
        {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <div className="client_name-icon">
                <BsPersonCircle className="client-icon" />
                <h5 className="client_name">{name}</h5>
              </div>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
