"use client";
import slideImg from "../../../public/json/partners.json";
import Image from "next/image";
import fonts from "../fonts/fonts.module.scss"

import React, { useRef, useState } from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Scrollbar } from "swiper/modules";

export default function App() {
  const [data, setData] = useState(slideImg);
  return (
    <>
     <div className="bg-[#565A5C] mt-[120px]">
     <h1 className={`${fonts.partnersSlider} pt-[80px] pb-[50px] pl-[80px]` }>Partners</h1>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        scrollbar={true}
        modules={[Scrollbar, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <div key={item.id} >
            
            <SwiperSlide >
            
              <div className="flex align-center justify-center pb-[60px] ">
                <div>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
     </div>
    </>
  );
}