import React from 'react'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Banner() {
  return (
    <>
    <div className='banner_container'>
      <div className='banner_bgblue'></div>
      <Swiper 
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }} 
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination, Autoplay]} 
        className="mySwiper">
            <SwiperSlide className='px-4 sm:px-4 md:px-0'>
              <div className='banner_imgContainer'>
                <Image
                  className='banner_img'
                  alt="GOYA"
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                  src={`/images/hotel1.jpg`}
                  />
              </div>
            </SwiperSlide>
            <SwiperSlide className='px-4 sm:px-4 md:px-0'>
              <div className='banner_imgContainer'>
                <Image
                className='banner_img'
                alt="GOYA"
                priority={true}
                layout="fill"
                objectFit="cover"
                src={`/images/hotel2.jpg`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='px-4 sm:px-4 md:px-0'>
              <div className='banner_imgContainer'>
                <Image
                className='banner_img'
                alt="GOYA"
                priority={true}
                layout="fill"
                objectFit="cover"
                src={`/images/hotel3.jfif`}
                />
              </div>
            </SwiperSlide>
          </Swiper>
    </div>
    </>
  )
}
