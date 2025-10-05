import { IWishListResponse } from '@/lib/interfaces/wishList'
import { getLoggedWishList } from '@/lib/services/wishlist.services'
import React from 'react'
import Products from '../_components/Product/Product'

export default async function WishList() {
                const wish:IWishListResponse= await getLoggedWishList()
                console.log('wish',wish.data)

  return (
  <>
  <Products data={wish.data} />
  </>
  )
}
