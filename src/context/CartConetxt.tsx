'use client'
import { ICartResponse } from "@/lib/interfaces/cart";
import { getLoggedCart } from "@/lib/services/cart.services";
import { createContext, useEffect, useState } from "react";
import { set } from "zod";

interface ICartContext {
  noCartItems: number;
  cartItems: ICartResponse | null;
}

export const CartContext = createContext<ICartContext | null>(null);

export function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [noCartItems, setNoCartItems] = useState(0);
  const [cartItems, setCartItems] = useState<ICartResponse | null>(null);
    const [price, setPrice] = useState(0);
    const [cartid, setCartid] = useState(null);


  async function getCartItems() {
   
    const data = await getLoggedCart();
    //  console.log('data',data)
    if (data?.status === 'success') {
      setNoCartItems(data.numOfCartItems);
      setCartItems(data);
      setPrice(data?.data?.totalCartPrice
)
setCartid(data?.cartId)
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ noCartItems, cartItems ,setCartItems,setNoCartItems,cartid ,setCartid ,price,setPrice}}>
      {children}
    </CartContext.Provider>
  );
}
