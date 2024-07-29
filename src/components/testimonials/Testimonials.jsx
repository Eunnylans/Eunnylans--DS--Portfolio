import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { testimonials } from "../../Data";

import Icon from "../../assets/quo.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "./testimonials.css";

const Testimonials = () => {

  return (
    <section className="testimonials section" id="testimonial">
      <h2 className="section__title text-cs">Recommendations</h2>
      <p className="section__subtitle">
        <span>Note</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="testimonials__container container mySwiper"
        style={{zIndex: 0}}
      >
        {testimonials.map(({ img, name, author, description, href }, index) => {
          return (
            <SwiperSlide
              className="testimonials__item card card-one"
              key={index}
            >
              <div className="testimonial__header">
                <div className="testimonial__icon">
                <img src={Icon} alt="" />
                </div>

                <img src={img} alt="" className="testimonial__img" />
              </div>

              <p className="testimonial__description">{description}</p>

              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__author">{author}</p>
              <a href={href} target="blank" className="home__social-link">
                <FaLinkedinIn />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right"></div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Notes</span>
      </div>
    </section>
  );
};

export default Testimonials;
