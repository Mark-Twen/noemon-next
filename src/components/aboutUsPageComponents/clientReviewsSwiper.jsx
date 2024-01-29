"use client";
import reviewsText from "../../../public/json/textReviews.json";
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
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";


export default function ReviewsSwiper() {

  const [data, setData] = useState(reviewsText);
  
  return (
    <>
     <div className="bg-[##F8F9FA] mt-[120px]">
     <h1 className={`${fonts.rewiesText} pt-[80px] pb-[50px] pl-[80px] !text-start` }>Our clients say</h1>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5500,          
        }}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        scrollbar={true}
        modules={[Scrollbar, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <div key={item.id} className="" >            
            <SwiperSlide >            
              <div className="flex flex-col">
                <div className="flex flex-row pl-[19%]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <p className={`${fonts.reviewsName} pl-[20px]`}>{item.name}
                  <Image 
                  src={item.mark}
                  alt="stars"
                  width={120}
                  height={15}               
                  />
                  </p>
                 
                </div> 

                <p className={`${fonts.reviewsText} w-[1166px] pt-[20px] pb-[20px] mx-auto`}>{item.text}</p></div>               
              
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
     </div>
    </>
  );
}