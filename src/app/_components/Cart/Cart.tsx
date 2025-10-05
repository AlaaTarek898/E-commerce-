'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ICartResponse } from '@/lib/interfaces/cart';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext, CartContextProvider } from '@/context/CartConetxt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteSpecificItem, UpdateSpecificItem } from '@/lib/services/cart.services';
import Loading from '@/app/loading';

export default function Cart() {
    const [loading, setLoading] = React.useState(true);

   const{cartItems,setNoCartItems,setCartItems,setPrice}= React.useContext(CartContext)

     const handleDeleteProduct=async(id:string)=>{
      const data=await deleteSpecificItem(id)
          if (data?.status === 'success') {
      setNoCartItems(data.numOfCartItems);
      setCartItems(data);
      setPrice(data?.data?.totalCartPrice
)
     }
    }
  const handleUpdateProduct=async({productId,count}:{productId:string,count:number})=>{
      const data=await UpdateSpecificItem({productId,count})
          if (data?.status === 'success') {
      setNoCartItems(data.numOfCartItems);
      setCartItems(data);
      setPrice(data?.data?.totalCartPrice
)
     }
    }


//    console.log(cartItems?.data?.products)
    return (<>
        {!cartItems?(<Loading/>):
        cartItems.data?.products?.length === 0 ?(<p>no items add</p>):
       (<div className=' container'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='w-3/12 '>Product</TableCell>
                            <TableCell align="center" className='w-3/12'>Price</TableCell>
                            <TableCell align="center" className='w-2/12'>Quantity</TableCell>
                            <TableCell align="center" className='w-3/12'>SubTotal</TableCell>
                                <TableCell align="center" className='w-3/12'>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems?.data?.products.map((row) => (
                          
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className='\'>
                                    <div className='flex items-center'>
                                        <Image src={row.product.imageCover} alt={row.product.title} width={80} height={80} />

                                        <p className=' font-bold'>{row.product.title}</p>
                                    </div>
                                </TableCell>
                                <TableCell align="center" ><p>{row.price} EGY</p></TableCell>
                                <TableCell align="center" >
                                    <div className=' flex '>
                                        <button onClick={()=> handleUpdateProduct({productId:row.product._id,count:row.count+1})
                                        } className='px-3 py-1 border-2 border-gray-400 w-3/12 text-center flex justify-center items-center'>+</button>
                                        <div className='px-3 py-1  border-2 border-gray-400 w-5/12  text-center'>{row.count}</div>
                                        <button onClick={()=> handleUpdateProduct({productId:row.product._id,count:row.count-1})} className='px-3 py-1 border-2 border-gray-400 w-3/12  text-center flex justify-center items-center'>-</button>
                                    </div>
                                </TableCell>
                                <TableCell align="center" ><p>{row.price * row.count}</p></TableCell>
                                <TableCell align="center" ><button className='px-3 py-1 border-none w-3/12  text-center flex justify-center items-center hover:cursor-pointer'onClick={()=>(handleDeleteProduct(row.product._id))}> <DeleteForeverIcon/> </button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <div className=' flex justify-between mt-3'>
                <div className=' border-2 border-gray-300 p-3 h-fit'>
                    <Link href='/Products'>Back to shop</Link>
                </div>
               <div className='mt-3 border-2 border-gray-300 w-4/12 p-3 float-right  '>
                <p className='text-2xl'>Cart total</p>
                <div className=' flex justify-between  m-3 border-b-2'><p>Sub total</p> <p>{cartItems?.data?.totalCartPrice}EGY</p></div>
<div className=' flex justify-between  m-3 border-b-2'><p>Shipping</p> <p>free</p></div>
                
       
       
                <div className=' flex justify-between  m-3 border-b-2'><p>Total</p> <p>{cartItems?.data?.totalCartPrice}EGY</p></div>
     <div className='w-full flex justify-center'>
       <Link href='/checkOut' className='block text-center w-6/12 p-3 bg-red-400 text-white hover:bg-red-600 hover:cursor-pointer  '>Procees to checkout</Link>
</div>

            </div>
            </div> */}
           
        </div>)}
        </>
    )

}