'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import Link from 'next/link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartContext } from '@/context/CartConetxt';
import { deleteSpecificItem, UpdateSpecificItem } from '@/lib/services/cart.services';
import Loading from '@/app/loading';
import { ICartResponse } from '@/lib/interfaces/cart';

export default function Cart() {
  const cartContext = React.useContext(CartContext);

  if (!cartContext) return <Loading />; 

  const { cartItems, setNoCartItems, setCartItems, setPrice, price } = cartContext;

  // نوع محلي للـ product item بدل ICartItem
  type CartProductItem = NonNullable<ICartResponse['data']>['products'][0];

  const handleDeleteProduct = async (id: string) => {
    const data = await deleteSpecificItem(id);
    if (data?.status === 'success') {
      setNoCartItems(data.numOfCartItems);
      setCartItems(data);
      setPrice(data.data?.totalCartPrice ?? 0);
    }
  };

  const handleUpdateProduct = async ({ productId, count }: { productId: string; count: number }) => {
    if (count < 1) return; // منع العدادات من النزول للصفر
    const data = await UpdateSpecificItem({ productId, count });
    if (data?.status === 'success') {
      setNoCartItems(data.numOfCartItems);
      setCartItems(data);
      setPrice(data.data?.totalCartPrice ?? 0);
    }
  };

  if (!cartItems) return <Loading />;

  if (!cartItems.data?.products || cartItems.data.products.length === 0)
    return <p className="text-center mt-10">No items added</p>;

  return (
    <div className="container mt-10">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">SubTotal</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.data.products.map((row: CartProductItem) => (
              <TableRow key={row._id}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Image src={row.product.imageCover} alt={row.product.title} width={80} height={80} />
                    <p className="font-bold">{row.product.title}</p>
                  </div>
                </TableCell>
                <TableCell align="center">{row.price} EGY</TableCell>
                <TableCell align="center">
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleUpdateProduct({ productId: row.product._id, count: row.count + 1 })}
                      className="px-3 py-1 border-2 border-gray-400 text-center"
                    >
                      +
                    </button>
                    <div className="px-3 py-1 border-2 border-gray-400 text-center w-12">{row.count}</div>
                    <button
                      onClick={() => handleUpdateProduct({ productId: row.product._id, count: row.count - 1 })}
                      className="px-3 py-1 border-2 border-gray-400 text-center"
                    >
                      -
                    </button>
                  </div>
                </TableCell>
                <TableCell align="center">{row.price * row.count} EGY</TableCell>
                <TableCell align="center">
                  <button
                    className="px-3 py-1 flex justify-center items-center hover:cursor-pointer"
                    onClick={() => handleDeleteProduct(row.product._id)}
                  >
                    <DeleteForeverIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-6 flex justify-end">
        <div className="border-2 border-gray-300 w-4/12 p-4">
          <p className="text-2xl font-bold mb-4">Cart Total</p>
          <div className="flex justify-between mb-2 border-b-2">
            <span>Sub Total</span>
            <span>{price} EGY</span>
          </div>
          <div className="flex justify-between mb-2 border-b-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-4 border-b-2">
            <span>Total</span>
            <span>{price} EGY</span>
          </div>
          <Link
            href="/checkOut"
            className="block text-center w-full p-3 bg-red-400 text-white hover:bg-red-600"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
