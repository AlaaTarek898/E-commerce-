'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"

import { useForm } from 'react-hook-form';
import { ILogin, IRegister } from '@/lib/interfaces/Auth';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
 export   default function Login() {
    const [errormsg, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

const router=useRouter()
  //handle validation
  const schema = zod
    .object({
 
      email: zod
        .email("not valid")
        .nonempty("reauired")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "not valid"),
      password: zod.string().regex(/(?=.*?[A-Z])/, "at least one Upper case"),
    
    })
   

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
  
      email: "alaatarek2040@gmail.com",
      password: "Alaa@123",
     
    },
    resolver: zodResolver(schema),
    mode: 'all'
  })


  
 async function handleLogin(values: ILogin) {
  setLoading(true)
const res=await signIn('credentials',{
  redirect:false,
  email:values.email,
  password:values.password
})

if(res?.ok){
  router.push('/')
  setLoading(false)
}else{
    setError(res?.error ?? null); 
  toast.error(res?.error ?? "Login failed");
    setLoading(false)
}


  }

  return (
    <main className="container  w-full flex flex-col justify-center md:flex-row md:justify-between items-center ">
      <div className='w-11/12 md:w-7/12 h-50 md:h-svh relative'>
        <Image src="/Side Image.png" alt='register' fill className=' object-fill ' />
      </div>
      <div className='w-11/12 md:w-4/12 flex flex-col justify-start items-start gap-3'>
        <h1 className="  text-4xl mb-3">Log in to Exclusive</h1>
        <p className='text-xl mb-4'>Enter your details below</p>
        <form onSubmit={handleSubmit(handleLogin)} className=' flex flex-col gap-3 w-2/3' >
          {errormsg? <p className='text-red-500'>{errormsg}</p> : null}
   
          <div>
            <Input type='email' placeholder='enter your email' {...register('email')} />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div>
            <Input type='password' placeholder='enter your password' {...register('password')} />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
        

     
          <div className=' w-full flex justify-between'>
          <button type='submit' disabled={loading} className='bg-red-500 text-white px-4 py-2 rounded-sm'>{loading? 'loading' : 'Log in'}</button>
          <button  className=' text-black border-2 text-red-500 border-none px-4 py-2 rounded-sm'>Forget Password?</button>
</div>
        </form>
      </div>
    </main>
  );
}
