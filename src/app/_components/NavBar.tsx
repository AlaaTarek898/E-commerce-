'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '@/context/CartConetxt'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { WishList } from '@/context/WishListContext'
// import { options } from '../api/auth/[...nextauth]/route'

export default function NavBar() {
  const {noCartItems}=useContext(CartContext)
    const {noWishItems}=useContext(WishList)
  // console.log(noWishItems)
  const register=useSession(authOptions)
  // const router=useRouter()
  // console.log(register)
    const path:string = usePathname()
    // console.log(path)
    const routes=[
        {name:'Home' , path:'/'},
               
        // {name:'contact' , path:'/contact'},
        {name:'About' , path:'/About'},
 
        {name:'Product' , path:'/Products'},
 
    ]

  return (<>
   <div className='bg-black d-flex justify-center align-items-center w-full p-3'>
    <p className='text-white text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href={'/Product'}>Shop noe</Link></p>

   </div>
<div className="navbar bg-base-100 shadow-sm  ">
  <div className='container flex justify-center m-auto'>
  <div className="navbar-start   ">
   
   <div >
        <Image src='/logo.png' width={100} height={100} alt='logo'/>
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 
      

    
              {routes.map((item)=>{
                return (
    <li key={item.name}>
        <a key={item.name} href={item.path}>{item.name}</a></li>
                )
            })}
         
 

    </ul>
  </div>
  {register.data?<div className="navbar-end">
    <div className='flex gap-3 justify-center items-center'>
<Link href={'/Cart'}>
  <small className='bg-black text-white rounded-full w-4 h-4 flex justify-center items-center'>{noCartItems}</small>
  <ShoppingCartIcon />
</Link>
<Link href={'/WishList'}>
  <small className='bg-black text-white rounded-full w-4 h-4 flex justify-center items-center'>{noWishItems}</small>
  <FavoriteIcon />
</Link>
</div>
    <Button  className="btn" onClick={()=>{
      signOut({
        redirect: true,
        callbackUrl: '/login'})
      }}>Logout</Button>

  </div>:  
  <div className="navbar-end">
     <Link href={'/login'} className="btn">Login</Link>
    <Link href={'/register'} className="btn">Register</Link>
    </div>}
  </div>
</div>
</>
  )
}
