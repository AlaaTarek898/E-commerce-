'use client';

'use client';

'use client';

import { getSession } from 'next-auth/react';

export async function getLoggedCart() {
  try {
    const session = await getSession();
    const token = session?.user?.token;

    if (!token) {
      console.warn('⚠️ No token found in session');
      return null;
    }

    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
      method: 'GET',
      headers: {
        token,
      },
      cache: 'no-store',
    });

    const data = await res.json();
    if (data.status === 'success') return data;

    console.log('error', data);
    return null;
  } catch (error) {
    console.error('failed to fetch cart:', error);
    return null;
  }
}

export async function deleteSpecificItem(productId: string) {
  const session = await getSession();
  const token = session?.user?.token;
  if (!token) return;

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
    method: 'DELETE',
    headers: { token },
  });

  const data = await res.json();
  if (data.status === 'success') return data;
  console.log('error', data);
}

export async function UpdateSpecificItem({ productId, count }: { productId: string; count: number }) {
  const session = await getSession();
  const token = session?.user?.token;
  if (!token) return;

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      token,
    },
    body: JSON.stringify({ count }),
  });

  const data = await res.json();
  if (data.status === 'success') return data;
  console.log('error', data);
}




