import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "./Books.css"

function Books() {
    return (
        <div className="book">
            <h5 className="book__heading">Featured Novels</h5>
            <Swiper freeMode={true} slidesPerView={'auto'} spaceBetween={30} className="swiper">
            
                <SwiperSlide className="book__slider" >
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Zero To One Notes By Peter Thiel</p>
                        <span className="book__price">&#8377; 275 <span className="book__actualPrice">&#8377; 550 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/61ZgWfRAYbL._SX317_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Harry Potter & The curse Child</p>
                        <span className="book__price">&#8377; 449 <span className="book__actualPrice">&#8377; 899 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/41kyKfkReiL._SX322_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Dollar Bahu by Sudha Murty</p>
                        <span className="book__price">&#8377; 150 <span className="book__actualPrice">&#8377; 250 </span></span>
                        <span className="book__off">40.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/519jixVbxgL._SX323_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Will you still love me? by Raviner</p>
                        <span className="book__price">&#8377; 139 <span className="book__actualPrice">&#8377; 199 </span></span>
                        <span className="book__off">30.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">The Power Of Your Subconscious Mind By Joseph Murphy</p>
                        <span className="book__price">&#8377; 275 <span className="book__actualPrice">&#8377; 550 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/519qFuoZtrL._SX324_BO1,204,203,200_.jpg" alt="" />
                    </div>

                    <div className="book__discription">
                        <p className="book__name">Till the Last Breath By Durjoy Datta</p>
                        <span className="book__price">&#8377; 275 <span className="book__actualPrice">&#8377; 550 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

            </Swiper>

            <h5 className="book__heading">Term 1 Exams 2021</h5>
            <Swiper freeMode={true} slidesPerView={'auto'} spaceBetween={30} className="swiper">
            
                <SwiperSlide className="book__slider" >
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/51QH6woqINL._SX348_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Oswaal CBSE Class 10 Englis Lang</p>
                        <span className="book__price">&#8377; 99 <span className="book__actualPrice">&#8377; 199 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/51BnC4yEDiL._SX348_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Oswaal CBSE Class 10 Math</p>
                        <span className="book__price">&#8377; 90 <span className="book__actualPrice">&#8377; 179 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/51qzbiPz1IL._SX387_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Oswaal CBSE Class 10 MCQ Question</p>
                        <span className="book__price">&#8377; 99 <span className="book__actualPrice">&#8377; 199 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/51qzbiPz1IL._SX387_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">Oswaal CBSE Class 10 1 MCQ</p>
                        <span className="book__price">&#8377; 270 <span className="book__actualPrice">&#8377; 537 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>


            </Swiper>

            <h5 className="book__heading">ISC Board Best Pack</h5>
            <Swiper freeMode={true} slidesPerView={'auto'} spaceBetween={30} className="swiper">
            
                <SwiperSlide className="book__slider" >
                    <div className="book__box">
                        <img className="book__image" src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/regionalbooks/h/c/t/nootan-isc-physics-class-xii-original-imafyrfjxz8f78b9.jpeg?q=70" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">ISC Physics Class 12 Kumar Mittal</p>
                        <span className="book__price">&#8377; 450 <span className="book__actualPrice">&#8377; 900 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://rukminim1.flixcart.com/image/416/416/jbgtnrk0/regionalbooks/t/g/3/nootan-isc-chemistry-class-xi-original-imafyrfzhwwr2vbn.jpeg?q=70" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">ISC Chemistry Class 11 HC Srivastava</p>
                        <span className="book__price">&#8377; 450 <span className="book__actualPrice">&#8377; 900 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://images-na.ssl-images-amazon.com/images/I/51BNZHLqdaL._SX378_BO1,204,203,200_.jpg" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">ISC Mathematics Class 12</p>
                        <span className="book__price">&#8377; 570 <span className="book__actualPrice">&#8377; 1135 </span></span>
                        <span className="book__off">49.78 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://github.com/Yugalgithub/nogozoimages/blob/main/WhatsApp%20Image%202021-07-03%20at%2000.12.16.jpeg?raw=true" alt="" />
                    </div>
                    <div className="book__discription">
                        <p className="book__name">ISC Class 11 Mathematics ML Aggarwal</p>
                        <span className="book__price">&#8377; 400 <span className="book__actualPrice">&#8377; 800 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="book__slider">
                    <div className="book__box">
                        <img className="book__image" src="https://rukminim1.flixcart.com/image/416/416/j687jbk0/regionalbooks/7/u/v/nootan-isc-chemistry-class-12-for-2018-exams-original-imaewpr8jmpdbgqa.jpeg?q=70" alt="" />
                    </div>

                    <div className="book__discription">
                        <p className="book__name">Nootan ISC Chemistry Class 12</p>
                        <span className="book__price">&#8377; 450 <span className="book__actualPrice">&#8377; 900 </span></span>
                        <span className="book__off">50.0 % off </span>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Books
