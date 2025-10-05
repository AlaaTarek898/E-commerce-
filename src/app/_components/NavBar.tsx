'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'
import { Button } from '@/components/ui/button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartContext } from '@/context/CartConetxt'
import { WishList } from '@/context/WishListContext'

export default function NavBar() {
  const { noCartItems } = useContext(CartContext)
  const { noWishItems } = useContext(WishList)

  // ✅ استخدام useSession بدون authOptions
  const { data: session } = useSession()

  const path: string = usePathname()
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Product', path: '/Products' },
  ]

  return (
    <>
      {/* Announcement Bar */}
      <div className='bg-black d-flex justify-center align-items-center w-full p-3'>
        <p className='text-white text-center'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <Link href={'/Products'} className="underline ml-1">Shop now</Link>
        </p>
      </div>

      {/* Navbar */}
      <div className="navbar bg-white shadow-sm">
        <div className='container flex justify-center m-auto'>

          {/* Logo */}
          <div className="navbar-start">
            <Image src='/Logo.png' width={100} height={100} alt='logo'/>
          </div>

          {/* Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {routes.map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Auth & Cart/Wishlist */}
          {session ? (
            <div className="navbar-end flex items-center gap-4">
              <div className='flex gap-3 justify-center items-center'>
                <Link href={'/Cart'} className="relative">
                  <ShoppingCartIcon />
                  {noCartItems > 0 && (
                    <small className='absolute -top-2 -right-2 bg-black text-white rounded-full w-4 h-4 flex justify-center items-center text-xs'>
                      {noCartItems}
                    </small>
                  )}
                </Link>
                <Link href={'/WishList'} className="relative">
                  <FavoriteIcon />
                  {noWishItems > 0 && (
                    <small className='absolute -top-2 -right-2 bg-black text-white rounded-full w-4 h-4 flex justify-center items-center text-xs'>
                      {noWishItems}
                    </small>
                  )}
                </Link>
              </div>

              <Button className="btn" onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="navbar-end flex gap-2">
              <Link href={'/login'} className="btn">Login</Link>
              <Link href={'/register'} className="btn">Register</Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
