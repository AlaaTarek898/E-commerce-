export async function getAllProduct() {
const res =await fetch('https://ecommerce.routemisr.com/api/v1/products')
// console.log(res)
if(res.ok){
   const data=await res.json()
   return data}
else{
    throw new Error('not found')
}

}