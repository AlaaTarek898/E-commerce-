export async function getProductDetails(id: string) {
const res =await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
// console.log(res)
if(res.ok){
   const data=await res.json()
//    console.log(data)
   return data}
else{
    throw new Error('not found')
}

}
