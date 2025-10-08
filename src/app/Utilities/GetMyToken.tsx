'use server'
import { decode } from 'next-auth/jwt'
import { cookies } from 'next/headers'
import React from 'react'

// export default async function GetMyToken() {
//     const session=(await cookies()).get('next-auth.session-token')?.value
//     const data=await decode({
//         token:session,
//         secret:process.env.AUTH_SECRET!
       
//     })
//  return(data?.token)
// }




export default async function getAuthToken() {
  const cookieStore = await cookies();

  
  const authToken =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  if (!authToken) {
    console.warn("⚠️ No auth token found in cookies");
    return null;
  }

  const decodedToken = await decode({
    token: authToken,
    secret: process.env.AUTH_SECRET!, 
  });

  console.log("✅ Decoded token:", decodedToken?.token);

  return decodedToken?.token;
}
