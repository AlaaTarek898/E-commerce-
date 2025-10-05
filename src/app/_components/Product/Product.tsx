'use client'
import Image from "next/image";
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IProduct } from "@/lib/interfaces/product";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { addToCart } from "@/lib/services/cart.services";
import { CartContext } from "@/context/CartConetxt";
import { addToWishList, deleteFromWishList } from "@/lib/services/wishlist.services";
import { WishList } from "@/context/WishListContext";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
interface WishItem {
  _id: string;
}

export default function Products({ data }: { data: IProduct[] }) {
  const [favourites, setFavourites] = useState<{ [key: string]: boolean }>({});
  const { setNoCartItems, setCartItems, setPrice } = useContext(CartContext);
  const { setNoWishItems, setWishItems, wishItems } = useContext(WishList)!;

  const { data: session } = useSession(); 
  const isLoggedIn = !!session?.user; 

  useEffect(() => {
   if (wishItems?.data) {
  const favMap: { [key: string]: boolean } = {};
  wishItems.data.forEach((item: WishItem) => {
    favMap[item._id] = true;
  });
  setFavourites(favMap);
}

  }, [wishItems]);

  const toggleFavourite = async (id: string) => {
    if (favourites[id]) {
      const data = await deleteFromWishList(id);
      if (data?.status === "success") {
        setNoWishItems(data.count ?? data.data?.length ?? 0);
        setWishItems(data);
      }
    } else {
      const data = await addToWishList(id);
      if (data?.status === "success") {
        setNoWishItems(data.count ?? data.data?.length ?? 0);
        setWishItems(data);
      }
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {data.map((ele) => (
          <div key={ele._id} className="border-2 rounded-xl group overflow-hidden">
            <div className="relative w-full h-70">
              <Image
                src={ele.imageCover}
                alt={ele.title}
                fill
                className="object-cover bg-gray-400 transition duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>

            {isLoggedIn && (
              <button
                className="bg-black text-white p-2 w-full hover:cursor-pointer transition-transform group-hover:scale-110 transition-colors duration-500 ease-in-out hover:bg-red-500"
                onClick={() =>
                  addToCart(ele._id).then((res) => {
                    if (res?.status === "success") {
                      setCartItems(res);
                      setNoCartItems(res.numOfCartItems);
                      setPrice(res.data.totalCartPrice);
                      toast.success("Successfully Added to Cart!");
                    } else {
                      toast.error("This didn't work.");
                    }
                  })
                }
              >
                Add to Cart..
              </button>
            )}

            <div className="p-3">
              <p className="text-xl font-bold line-clamp-1">{ele.title}</p>
              <p className="text-sm line-clamp-2">{ele.description}</p>

              <div className="flex justify-between items-center">
                <p>
                  <span className="text-xl font-bold">Price: </span>
                  {ele.price}
                </p>
                <div className="flex items-center">
                  <Link
                    href={`/ProductDetails/${ele._id}`}
                    className="hover:cursor-pointer m-3 hover:scale-110 transition-transform duration-300 ease-in-out"
                  >
                    <VisibilityIcon />
                  </Link>

                  <button
                    onClick={() => toggleFavourite(ele._id)}
                    className="hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                  >
                    {favourites[ele._id] ? (
                      <FavoriteIcon className="text-red-500" />
                    ) : (
                      <FavoriteBorderOutlinedIcon className="text-red-500" />
                    )}
                  </button>
                </div>
              </div>

              <Rating
                name="half-rating-read"
                defaultValue={ele.ratingsAverage}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
