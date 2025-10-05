export async function getBrand() {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
  const data = await res.json();



  if (data) {
    return data.data; 
  } else {
    console.log('error');
  }
}
