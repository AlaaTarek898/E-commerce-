'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"

import { useForm } from 'react-hook-form';
import { IRegister } from '@/lib/interfaces/Auth';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default function Register() {
    const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

const router=useRouter()
  //handle validation
  const schema = zod
    .object({
      name: zod
        .string("must be string")
        .nonempty("reauired")
        .min(3, "must be at least 3"),
      email: zod
        .email("not valid")
        .nonempty("reauired")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "not valid"),
      password: zod.string().regex(/(?=.*?[A-Z])/, "at least one Upper case"),
      rePassword: zod.string(),
      telephone: zod.string().regex(/^01[0125][0-9]{8}$/, "not valid"),
    })
    .refine(
      function (value) {
        if (value.password == value.rePassword) {
          return true;
        } else {
          return false;
        }
      },
      { message: "password not match", path: ["rePassword"] }
    );

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "alaatarek2040@gmail.com",
      password: "Alaa@123",
      rePassword: "Alaa@123",
      telephone: "01122334455"
    },
    resolver: zodResolver(schema),
    mode: 'all'
  })


  
 async function handleRegister(values: IRegister) {

    setLoading(true)
  const data= await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
      method:'POST',
       body:JSON.stringify(values),
      headers:{
        'Content-Type':'application/json'
      },
     
    })
   
    const res=await data.json()

     if(data.ok){
      setLoading(false)
      toast.success('Congartulation!')
      router.push('/login')

     }else{
      setLoading(false)
      setError(res.message)
      toast.error(res.message)

     }
   
  }

  return (
    <main className="container  w-full flex flex-col md:flex-row justify-between items-center ">
      <div className='w-full md:w-7/12 h-50 md:h-svh relative'>
        <Image src="/Side Image.png" alt='register' fill className=' object-fill ' />
      </div>
      <div className='w-full md:w-4/12 m-auto flex flex-col justify-center items-center gap-3'>
        <h1 className="  text-4xl mb-3">Create an account</h1>
        <p className='text-xl mb-4'>Enter your details below</p>
        <form onSubmit={handleSubmit(handleRegister)} className=' flex flex-col gap-3 w-2/3' >
          {error? <p className='text-red-500'>{error}</p> : null}
          <div>
            <Input className='!input_custom ' type='text' placeholder='enter your name' {...register('name')} />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>
          <div>
            <Input type='email' placeholder='enter your email' {...register('email')} />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div>
            <Input type='password' placeholder='enter your password' {...register('password')} />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <div>
            <Input type='password' placeholder='enter your rePassword' {...register('rePassword')} />
            {errors.rePassword && <p className='text-red-500'>{errors.rePassword.message}</p>}
          </div>

          <div>
            <Input type='tel' placeholder='enter your phone' {...register('telephone')} />
            {errors.telephone && <p className='text-red-500'>{errors.telephone.message}</p>}
          </div>
          <button type='submit' disabled={loading} className='bg-red-500 text-white px-4 py-2 rounded-sm'>{loading? 'loading' : 'Create an account'}</button>
          <button className=' text-black border-2 border-black px-4 py-2 rounded-sm'>sign in with Google</button>

        </form>
        <p > Already have account? <Link href='/login' className=' font-bold ms-3'> Log in</Link></p>
      </div>
    </main>
  );
}
