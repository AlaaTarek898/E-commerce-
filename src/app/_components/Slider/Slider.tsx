'use client'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import {  EffectCreative} from 'swiper/modules';

export default function Slider() {
    const images = [{ path: '/img13.jpg', alt: 'image1' },
    { path: '/img14.jpg', alt: 'image2' },
    { path: '/img15.jpg', alt: 'image3' },
    { path: '/img16.jpg', alt: 'image4' }]
    return (
        <div className=' flex flex-col md:flex-row' >
            <div className='w-fit  m-auto md:w-2/3 '>
                <Swiper
                
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
          
      
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
  
                 
                   className='!w-full'
                >
                    {
                        images.map((item) => {
                            return <SwiperSlide key={item.alt} className="relative !w-full ">
                                <Image
                                    src={item.path}
                                    alt={item.alt}
                                    width={900}
                                    height={300}

                                    className="w-full  h-120 object-contain "
                                />
                            </SwiperSlide>
                        }
                        )
                    }
                </Swiper>

</div>

                <div className='w-full m-auto md:w-1/3'>
                    <Image src='/img2.jpg' className='h-60 m-auto' width={300} height={300} alt=' image1' />
                    <Image src='/img3.jpg' className='h-60 m-auto' width={300} height={300} alt=' image2' />


                </div>
            </div>
  
 )}
