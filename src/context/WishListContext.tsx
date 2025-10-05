'use client'
import { IWishListResponse } from "@/lib/interfaces/wishList";
import { getLoggedWishList } from "@/lib/services/wishlist.services";
import { createContext, useEffect, useState } from "react";

interface IWishListContext {
  noWishItems: number;
  setNoWishItems: React.Dispatch<React.SetStateAction<number>>;
  wishItems: IWishListResponse | null;
  setWishItems: React.Dispatch<React.SetStateAction<IWishListResponse | null>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const WishList = createContext<IWishListContext | null>(null);

export function WishListContextProvider({ children }: { children: React.ReactNode }) {
  const [noWishItems, setNoWishItems] = useState(0);
  const [wishItems, setWishItems] = useState<IWishListResponse | null>(null);
  const [price, setPrice] = useState(0); 

  async function getWishListItems() {
    const data = await getLoggedWishList();
    if (data?.status === 'success') {
      setNoWishItems(data.count);
      setWishItems(data);
      setPrice(data.data?.totalPrice ?? 0); // لو عندك totalPrice في wishlist
    }
  }

  useEffect(() => {
    getWishListItems();
  }, []);

  return (
    <WishList.Provider value={{ noWishItems, setNoWishItems, wishItems, setWishItems, price, setPrice }}>
      {children}
    </WishList.Provider>
  );
}
