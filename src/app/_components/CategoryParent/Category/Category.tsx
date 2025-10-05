// "use client";

import { IcategoryResponse } from '@/lib/interfaces/Category'
import { getAllCategories } from '@/lib/services/category.services'
import CategorySlider from './CategorySlider'


export default async function Category() {
  const data: IcategoryResponse = await getAllCategories()
  // console.log(data)
  return (
   <CategorySlider data={data.data} />
  )
}
