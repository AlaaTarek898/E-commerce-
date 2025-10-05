import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    //1-ageeb el token fn btgeeb el token lw mogood
    const token=await getToken({req:request}) 
    //another way url from application enspect
    // const token2=request.cookies.get('next-auth.session-token')
  //23ml condition lw 3yzah ykml or no 

  if(token){
    //next hna m3naha kml 
    return NextResponse.next
  } else{
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

 //4-27dd el sfhat elly 3yzha trg3 prtected fr array of pages 
// See "Matching Paths" below to learn more
export const config = {
  matcher: []
}