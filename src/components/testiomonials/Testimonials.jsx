import React from "react";
import '../../index.css'
import "./testimonials.css";
import avatar1 from "../../asset/avatar1.jpg";
import avatar2 from "../../asset/avatar2.jpg";
import avatar3 from "../../asset/avatar3.jpg";
import avatar4 from "../../asset/avatar4.jpg";

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const testimonialData = [
  {
    image: avatar1,
    name: "Christine Peter",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed doloremque corrupti placeat ea, facilis quis neque velit fuga! Vero consequatur quisquam quis aliquam quibusdam eos assumenda a totam alias!"
  },
  {
    image: avatar2,
    name: "brown mike",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed doloremque corrupti placeat ea, facilis quis neque velit fuga! Vero consequatur quisquam quis aliquam quibusdam eos assumenda a totam alias!"
  },
  {
    image: avatar3,
    name: "John Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed doloremque corrupti placeat ea, facilis quis neque velit fuga! Vero consequatur quisquam quis aliquam quibusdam eos assumenda a totam alias!"
  },
  {
    image: avatar4,
    name: "Samira Khalid",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed doloremque corrupti placeat ea, facilis quis neque velit fuga! Vero consequatur quisquam quis aliquam quibusdam eos assumenda a totam alias!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonialData.map(({ image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="Avatar1" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
