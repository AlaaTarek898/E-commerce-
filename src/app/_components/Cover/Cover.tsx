"use client"; 
import React from 'react'

import { useState, useRef, useEffect, ChangeEvent } from "react"; 
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import Link from 'next/link';

export default function Cover() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // حددي التاريخ اللي الكاونت داون يوصله
    const targetDate = new Date("2026-12-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))),
          hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)),
          seconds: String(Math.floor((difference / 1000) % 60)),
        });
      } else {
        // لو خلص الوقت
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
   <div className="w-11/12 m-auto mt-10">
      <div className="bg-[url('/cover.jpg')] relative bg-contain bg-no-repeat md:bg-cover bg-center w-full h-[500px] flex items-center justify-center p-10">
        <div className="text-center p-5 rounded-lg absolute top-6/12 left-1/3 md:left-1/4 -translate-x-1/2 -translate-y-1/2 md:top-3/4">
    
          <div className="flex gap-5 justify-center mt-5 text-3xl font-mono ">
            <div className='bg-white  hidden  md:block    rounded-full md:flex flex-col justify-center items-center text-black md:w-[80px] md:h-[80px] '>
              <p className='text-[10px]  md:text-xl'>{timeLeft.days}</p>
              <p className="text-[6px] md:text-l">Days</p>
            </div>
            <div className="bg-white  hidden md:block   rounded-full md:flex flex-col justify-center items-center text-black md:w-[80px] md:h-[80px]">
              <p  className='text-[10px] md:text-xl'>{timeLeft.hours}</p>
              <p className="text-[6px] md:text-l">Hours</p>
            </div>
            <div className="bg-white hidden md:block     rounded-full md:flex flex-col justify-center items-center text-black md:w-[80px] md:h-[80px]">
              <p className='text-[10px] md:text-xl'>{timeLeft.minutes}</p>
              <p  className="text-[6px] md:text-l">Minutes</p>
            </div>
            <div className="bg-white hidden  md:block  rounded-full  md:flex flex-col justify-center items-center text-black md:w-[80px] md:h-[80px]">
              <p className='text-[10px] md:text-xl'>{timeLeft.seconds}</p>
              <p  className="text-[6px] md:text-l">Seconds</p>
            </div>
          </div>
           <Link href={'/products'} className='bg-green-400 mt-20 block text-white md:text-2xl md:px-10 md:mt-2 py-2 rounded-lg block m-5 '>Buy now</Link>
        </div>
       
      </div>
    </div>

  )
}
