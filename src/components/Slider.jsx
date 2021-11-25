import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Pagination} from 'swiper';

import './Slider.css'

// import "swiper/css/free-mode"
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'



SwiperCore.use([Autoplay, Pagination]);

function AddSlider() {
    return (
        <div className="slider">

            <Swiper freeMode={true} slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} className="swiper">
                <SwiperSlide className="swiper__slide"><img className="swiper__image" src="https://nogozo.com/static/book/images/neet.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="swiper__slide"><img className="swiper__image" src="https://nogozo.com/static/book/images/iit.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="swiper__slide"><img className="swiper__image" src="https://nogozo.com/static/book/images/all.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="swiper__slide"><img className="swiper__image" src="https://nogozo.com/static/book/images/sell.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="swiper__slide"><img className="swiper__image" src="https://nogozo.com/static/book/images/iit.webp" alt="" /></SwiperSlide>

                <SwiperSlide className="swiper__slide"><img className="swiper__image" src="https://nogozo.com/static/book/images/all.webp" alt="" /></SwiperSlide>

                {/* <SwiperSlide className="swiper__slide"><img className="swiper__image" src="https://nogozo.com/static/book/images/sell.webp" alt="" /></SwiperSlide> */}

            </Swiper>

        </div>
    )
}

export default AddSlider
