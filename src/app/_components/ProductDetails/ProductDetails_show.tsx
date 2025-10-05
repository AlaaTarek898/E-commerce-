'use client'
import Rating from '@mui/material/Rating';
import React, { useContext } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IcategoryResponse } from "@/lib/interfaces/Category";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from 'next/image';
import { addToCart, UpdateSpecificItem } from '@/lib/services/cart.services';
import { CartContext } from '@/context/CartConetxt';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

export default function ProductDetails_show({data}) {
   const{setNoCartItems,setCartItems,setPrice}= useContext(CartContext)
  const { data: session } = useSession(); 
  const isLoggedIn = !!session?.user; 
      const addProduct=async(id:string)=>{
     const data= await addToCart(id)
                if (data?.status === 'success') {
        setNoCartItems(data.numOfCartItems);
        setCartItems(data);
        setPrice(data?.data?.totalCartPrice) ;
          toast.success('Successfully toasted!')

  }

      }
 
    if (!data) {
        return null;
    }
// console.log(data)
  return (
    <div className='flex flex-col justify-between w-11/12 m-auto mt-4 md:flex-row'>
  <div className='w-full md:w-7/12'>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
          >
           {data.images.map((ele:string)=>{
            return(
                <SwiperSlide key={Math.random()}>
            

                  <div className=" relative w-full h-[500px]">
                    <Image src={ele} alt={ele} fill />
                  </div>
                 

            
              </SwiperSlide>
            )
           })}
          </Swiper>

  </div>
  <div className='w-full md:w-4/12 flex flex-col gap-3 p-5'>
<h1 className=' text-3xl font-bold'>{data.title}</h1> 
<div className=' flex'>
<Rating name="half-rating-read" defaultValue={data.ratingsAverage} precision={0.5} readOnly />
<p  className='text-gray-400'>({data.ratingsQuantity}<span> reviews</span>)</p>
</div>
<p className='text-l  text-green-300'>   <span className=' text-green-300'>In stoke:</span>{data.quantity}</p>
  <p className='text-xl'> <span className=' font-bold'>Price</span>{data.price} EGY</p>
    <p className='text-xl'><span className=' font-bold'>Brand:</span> {data.brand.name}</p>
  <p className='text-l'>{data.description}</p>
  <hr/>
<div className='flex w-full '>
 
   {isLoggedIn && ( <button 
    onClick={()=> addProduct(data._id)}
     className='px-3 py-1 border-2 border-none  text-white bg-red-400 hover:cursor-pointer hover:bg-red-500'  >
      Buy now</button>)}

  </div>
  <div className=' relative '>
  <Image src='/Frame 911.png' alt='delevry' width={400} height={100} />
  </div>
  </div>
</div>
  )
}
