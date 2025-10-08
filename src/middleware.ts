import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request })

//   // Pages that don’t need auth
//   const publicPaths = ['/login', '/register', '/']

//   if (publicPaths.includes(request.nextUrl.pathname)) {
//     return NextResponse.next()
//   }

//   if (!token) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/checkOut', '/Profile', '/Cart', '/WishList'] }

// This function can be marked `async if using `await inside





export async function middleware(request: NextRequest) {
  const cookieName =
    process.env.NODE_ENV === 'production'
      ? '__Secure-next-auth.session-token'
      : 'next-auth.session-token'

  const token = await getToken({ req: request, cookieName })

  console.log(token)

  if (token) {
    return NextResponse.next()
  }

 
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/checkOut', '/Profile', '/Cart', '/WishList'],
}