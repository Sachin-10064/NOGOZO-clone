import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import "./Slider.css";
import "./Novel_swiper.css"


function NovelSwiper() {
    return (
        <div className="novel_swiper">
        <h5 className="novel__heading">Novels For You</h5>
          <Swiper freeMode={true} slidesPerView={'auto'} spaceBetween={30}  className="swiper">
          
                <SwiperSlide className="novel__slider"><img className="novel__image" src="https://nogozo.com/static/book/images/neet.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="novel__slider"><img className="novel__image" src="https://nogozo.com/static/book/images/iit.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="novel__slider"><img className="novel__image" src="https://nogozo.com/static/book/images/all.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="novel__slider"><img className="novel__image" src="https://nogozo.com/static/book/images/sell.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="novel__slider"><img className="novel__image" src="https://nogozo.com/static/book/images/iit.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="novel__slider"><img className="novel__image" src="https://nogozo.com/static/book/images/all.webp" alt="" /></SwiperSlide>

            </Swiper>
            
        </div>
    )
}

export default NovelSwiper
