'use client'

import { ICartResponse } from "@/lib/interfaces/cart";
import { getLoggedCart } from "@/lib/services/cart.services";
import { createContext, useEffect, useState } from "react";

interface ICartContext {
  noCartItems: number;
  cartItems: ICartResponse | null;
  setNoCartItems: (num: number) => void;
  setCartItems: (cart: ICartResponse | null) => void;
  price: number;
  setPrice: (price: number) => void;
  cartid: string | null;
  setCartid: (id: string | null) => void;
}

export const CartContext = createContext<ICartContext | null>(null);

export function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [noCartItems, setNoCartItems] = useState(0);
  const [cartItems, setCartItems] = useState<ICartResponse | null>(null);
  const [price, setPrice] = useState(0);
  const [cartid, setCartid] = useState<string | null>(null);

  async function getCartItems() {
    const data = await getLoggedCart();
    if (data?.status === 'success') {
      setNoCartItems(data.numOfCartItems);
      setCartItems(data);
      setPrice(data?.data?.totalCartPrice ?? 0);
      setCartid(data?.cartId ?? null);
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ noCartItems, cartItems, setCartItems, setNoCartItems, price, setPrice, cartid, setCartid }}>
      {children}
    </CartContext.Provider>
  );
}
