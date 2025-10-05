'use client'

import React, { FormEvent, useContext } from 'react';
import Input from '@mui/material/Input';
import Link from 'next/link';
import Cart from '../_components/Cart/Cart';
import { CartContext } from '@/context/CartConetxt';
import { cashOnDelivery, online } from '@/lib/services/payment.services';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function CheckOut() {
    const[payment,setPayment]=React.useState<'cash'|'online'>('cash')
    const[form,setForm]=React.useState({
        firstName:'',
        details:'',
          phoneNumber:'',
        townCity:'',
      
    
    }) 
     const route=useRouter()
    const { cartid ,cartItems,setNoCartItems,setPrice, setCartid,setCartItems } = useContext(CartContext);
    async function submit(e:FormEvent){
     e.preventDefault()
     if(payment==='cash'){
      const res= await cashOnDelivery( cartid,form)
      if(res?.status==='success'){
        setNoCartItems(0)
        setCartItems([])
        setPrice(0)
       setCartid()
       route.push('/')
       toast.success('Orderd Placed Succeffly!')

      }
     }
     else{
              const res= await online( cartid,form)
              console.log(res)
              if(res?.status==='success'){
                location.href=res?.session?.url
            //     setNoCartItems(0)
            //     setCartItems([])
            //     setPrice(0)
            //    setCartid()
           
              }
     }
    }
    console.log(form)
 

  return (
    <div className="w-11/12 m-auto mt-10">
      <main className="flex flex-col justify-between md:flex-row">
        {/* Billing details form */}
        <div className="w-full md:w-5/12">
          <h3 className="text-2xl font-bold my-5">Billing details</h3>
          <form className="flex flex-col gap-8 w-full" onSubmit={submit}>
            <Input fullWidth type="text" placeholder="First Name" required onChange={(e)=>setForm({...form,firstName:e.target.value})} />
            <Input fullWidth type="text" placeholder="Details" required  onChange={(e)=>setForm({...form,details:e.target.value})} />
            <Input fullWidth type="tel" placeholder="Phone Number" required  onChange={(e)=>setForm({...form,phoneNumber:e.target.value})} />
            <Input fullWidth type="text" placeholder="Town/City*" required  onChange={(e)=>setForm({...form,townCity:e.target.value})} />
           
          
                   <div className="w-full flex justify-center ">
                  <button type='submit' className="block text-center w-6/12 p-3 bg-red-400 text-white hover:bg-red-600 hover:cursor-pointer ">
                    Place Order
                  </button>
                </div>
          </form>
        </div>

        {/* Cart & summary */}
        <div className="w-full md:w-6/12">
          <div className="w-11/12">
            <Cart />
          </div>

          <div className="container mt-5">
            <div className="flex justify-between mt-3">
            

              <div className="mt-3 border-2 border-gray-300 w-full p-3">
                <p className="text-2xl">Cart total</p>

                <div className="flex justify-between m-3 border-b-2">
                  <p>Sub total</p>
                  <p>{cartItems?.data?.totalCartPrice} EGP</p>
                </div>

                <div className="flex justify-between m-3 border-b-2">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>

                <div className="flex justify-between m-3 border-b-2">
                  <p>Total</p>
                  <p>{cartItems?.data?.totalCartPrice} EGP</p>
                </div>
    {/* Payment options */}
            <div className="mt-4 flex flex-col ms-5">
              <label htmlFor="cash">
                <input id="cash" type="radio" name="payment" value={payment} checked={payment==='cash'} onChange={()=>setPayment('cash')} /> Cash
              </label>
              <label htmlFor="online" className="">
                <input id="online" type="radio" name="payment" value={payment} checked={payment==='online'} onChange={()=>setPayment('online')} /> Online
              </label>
            </div>
         
              </div>
            </div>

        
          </div>
        </div>
      </main>
    </div>
  );
}
