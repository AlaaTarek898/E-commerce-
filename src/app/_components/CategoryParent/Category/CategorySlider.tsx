"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IcategoryResponse } from "@/lib/interfaces/Category";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function CategorySlider({
  data,

}: {
  data: IcategoryResponse["data"];

}) {
 

  const router = useRouter()
  return (
    <div className="container w-11/12 m-auto flex flex-col ali">
     <p className="flex items-center text-2xl font-bold my-8">
  <span className="w-5 h-10 rounded-l bg-red-500  mr-3" />
Browse By Category
</p>
      <div className=" flex justify-center items-center">
        <div className="w-11/12 mt-5  m-auto">
          <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
  navigation
  centeredSlides={true}
  centerInsufficientSlides={true}

 

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },}} 
            className="custom-swiper"



          >
            {data.map((item) => (
              <SwiperSlide key={item._id} className="flex justify-center"> 
                <button className=" border-2 border-gray-400 w-30 h-30 hover:cursor-pointer hover:border-blue-400 hover:bg-red-300 hover:text-white "
                  onClick={() => {
                    console.log("🖱️ Clicked ID in Slider:", item._id);

                
                    localStorage.setItem("selectedCategoryId", item._id);

                   
                    router.push("/Product_category");
                  }}
                >

               
                  <div>{item.name}</div>

                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
