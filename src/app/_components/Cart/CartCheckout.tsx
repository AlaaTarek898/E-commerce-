'use client'
import * as React from 'react';

import Link from 'next/link';
import { CartContext, CartContextProvider } from '@/context/CartConetxt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteSpecificItem, UpdateSpecificItem } from '@/lib/services/cart.services';
import Loading from '@/app/loading';

export default function CartCheckout() {
    // const [loading, setLoading] = React.useState(true);

   const{cartItems,setNoCartItems,setCartItems,setPrice}= React.useContext(CartContext)


//    console.log(cartItems?.data?.products)
    return (<>
        {!cartItems?(<Loading/>):
        cartItems.data?.products?.length === 0 ?(<p>no items add</p>):
       (<div className=' container'>
         
            <div className=' flex flex-col-reverse justify-between mt-3 md:flex-row'>
                <div className=' border-2 border-gray-300 p-3 h-fit'>
                    <Link href='/Products'>Back to shop</Link>
                </div>
               <div className='mt-3 border-2 border-gray-300 w-full md:w-4/12 p-3 float-right  '>
                <p className='text-2xl'>Cart total</p>
                <div className=' flex justify-between  m-3 border-b-2'><p>Sub total</p> <p>{cartItems?.data?.totalCartPrice}EGY</p></div>
<div className=' flex justify-between  m-3 border-b-2'><p>Shipping</p> <p>free</p></div>
                
       
       
                <div className=' flex justify-between  m-3 border-b-2'><p>Total</p> <p>{cartItems?.data?.totalCartPrice}EGY</p></div>
     <div className='w-full flex justify-center'>
       <Link href='/checkOut' className='block text-center w-6/12 p-3 bg-red-400 text-white hover:bg-red-600 hover:cursor-pointer  '>Procees to checkout</Link>
</div>

            </div>
            </div>
           
        </div>)}
        </>
    )

}