import GetMyToken from "@/app/Utilities/GetMyToken";

export async function cashOnDelivery(cartid: string, form: any) {
  const token = await GetMyToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token ? String(token) : "", // حولنا token لـ string
    },
    body: JSON.stringify({
      shippingAddress: form,
    }),
  });
  const data = await res.json();
  console.log(data);
  if (data.status === 'success') {
    return data;
  } else {
    console.log('error');
  }
}

export async function online(cartid: string, form: any) {
  const token = await GetMyToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token ? String(token) : "", // هنا برضه
    },
    body: JSON.stringify({
      shippingAddress: form,
    }),
  });
  const data = await res.json();
  console.log(data);
  if (data.status === 'success') {
    return data;
  } else {
    console.log('error');
  }
}
