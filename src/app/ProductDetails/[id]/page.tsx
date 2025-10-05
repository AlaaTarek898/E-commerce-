
import ProductDetails_show from "@/app/_components/ProductDetails/ProductDetails_show";
import { getProductDetails } from "@/lib/services/productDetails.services";

export default async function ProductsPage({ params }: { params: { id: string } }) {
  const { data } = await getProductDetails(params.id)
console.log(data)
  return (
    <div className="p-5">
  <ProductDetails_show data={data} />
    </div>
  );
}
