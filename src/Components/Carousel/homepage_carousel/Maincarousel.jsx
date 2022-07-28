import React from "react";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Maincarousel.scss";


// import required modules
import { Pagination , Navigation } from "swiper";

// Import Images
import promotionPic_1 from '../../../Assets/Images/Promotion/promotion_1.jpg';
import promotionPic_2 from '../../../Assets/Images/Promotion/promotion_2.jpg';
import promotionPic_3 from '../../../Assets/Images/Promotion/promotion_03.webp';

export default function Maincarousel() {
  return (
    <>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
        <SwiperSlide>
            <div className="promotion_carousel_box">
               <Link to="/">
                    <img src={promotionPic_1} alt="Promotion01" />
               </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="promotion_carousel_box">
              <Link to="/">
                <img src={promotionPic_2} alt="Promotion02" />
              </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="promotion_carousel_box">
              <Link to="/">
                <img src={promotionPic_3} alt="Promotion03" />
              </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="promotion_carousel_box">
                <Link to="/">
                    <img src={promotionPic_2} alt="Promotion04" />
                </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="promotion_carousel_box">
                <Link to="/">
                    <img src={promotionPic_3} alt="Promotion05" />
                </Link>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
