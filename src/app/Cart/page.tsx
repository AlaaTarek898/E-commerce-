import { getLoggedCart } from "@/lib/services/cart.services";
import Cart from "../_components/Cart/Cart";
import { ICartResponse } from "@/lib/interfaces/cart";
import CartCheckout from "../_components/Cart/CartCheckout";


export default async function page() {

       
            //const cart:ICartResponse = await getLoggedCart()
        
 
   
  return (
<>
<Cart  />
<CartCheckout/>
</>
  );
}
