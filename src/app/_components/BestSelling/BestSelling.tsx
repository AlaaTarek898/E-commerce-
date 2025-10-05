'use client'

import { getAllProduct } from '@/lib/services/product.services'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { IProduct } from '@/lib/interfaces/product';
import Link from 'next/link';
import Products from '../Product/Product';

export default function BestSelling({ items }: { items?: number }) {
  const [top, setTop] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllProduct();

        if (!data || !Array.isArray(data)) return;

        const sorted: IProduct[] = data.sort((a: IProduct, b: IProduct) => {
          const soldA = a.sold ?? -Infinity;
          const soldB = b.sold ?? -Infinity;
          return soldB - soldA;
        });

        setTop(sorted);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='w-11/12 m-auto mt-10'>
      <div className='flex justify-between items-center'>
        <p className="flex items-center text-2xl font-bold my-8">
          <span className="w-5 h-10 rounded-l bg-red-500 mr-3" />
          Best Selling Products
        </p>
        <Link href={'/bestSelling'} className='bg-red-500 text-white px-2 py-3 rounded-xl h-fit items-baseline md:px-6 hover:cursor-pointer'>
          View All
        </Link>
      </div>
      <div>
        <Products data={top.slice(0, items ?? top.length)} />
      </div>
    </div>
  )
}
