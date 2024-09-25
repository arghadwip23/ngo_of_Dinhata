'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IKImage } from 'imagekitio-next';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <section>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-black  px-3 text-white md:w-2/3"
      >
        <SwiperSlide><IKImage urlEndpoint={urlEndpoint} path="Banner/2.png"  alt="Alt text" height={329} width={686} className='w-full h-auto' /></SwiperSlide>
        <SwiperSlide className=' h-6 bg-red-900'><IKImage urlEndpoint={urlEndpoint} path="Banner/5.png"  alt="Alt text" height={329} width={686} className='w-full h-auto' /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
}
