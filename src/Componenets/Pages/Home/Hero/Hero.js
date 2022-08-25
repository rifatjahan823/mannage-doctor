import React from 'react';
import slider1 from '../../../Image/Home/slider-1.jpg';
import slider2 from '../../../Image/Home/slider-2.jpg';
import slider3 from '../../../Image/Home/slider-3.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import './Hero.css'

const Hero = () => {

    return (
        <div className='carusel'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                navigation={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                loop={true}
                autoplay={{ delay: 3000 }}
            >

                <SwiperSlide>
                    <img  className='w-100' src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img  className='w-100' src={slider3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;