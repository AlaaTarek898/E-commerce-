'use client'
import { getAllProduct } from '@/lib/services/product.services'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { IProduct } from '@/lib/interfaces/product';
import Link from 'next/link';
import Products from '../Product/Product';


export default  function Explore() {
  const [top, setTop] = useState<IProduct[] >([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getAllProduct();


      setTop(data);
    }

    fetchData();
  }, []);

// console.log(sorted);

  return (
    <div className='w-11/12 m-auto mt-10'>
        <div className=' flex justify-between'>
<p className="flex items-center text-2xl font-bold my-8">
  <span className="w-5 h-10 rounded-l bg-red-500  mr-3" />
  Explore   Our Products
</p>
  
    </div>
    <div className=''>
   <Products data={top.slice(0,8)}/>
    </div>
<div className='w-full flex justify-center mt-5'>
      <Link href={'/Products'} className='block bg-red-500 text-white px-10 py-3 rounded-l h-fit items-baseline'>View All Products</Link>
   </div>
    </div>
   
  )
}
