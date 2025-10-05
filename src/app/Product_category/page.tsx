"use client";

import { useEffect, useState } from "react";
import { IProduct } from '@/lib/interfaces/product';
import { getAllProduct } from '@/lib/services/product.services';
import Products from "../_components/Product/Product";
import Image from "next/image";

export default function CategoriesPage() {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("selectedCategoryId");
    setCategoryId(id);
  }, []);

  useEffect(() => {
    async function fetchFilteredProducts() {
      if (!categoryId) return;

      setLoading(true); 
      try {
        const { data }: { data: IProduct[] } = await getAllProduct();
        const filtered = data.filter((product) => product.category._id === categoryId);
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false); 
      }
    }

    fetchFilteredProducts();
  }, [categoryId]);

  return (
    <div>
      {loading ? (
           <div className="loader m-auto h-dvh"></div>

      ) : products.length > 0 ? (
        <Products data={products} />
      ) : (
        <div className="flex flex-col items-center">
          <Image src="/noProduct.jpg" alt="No products" width={200} height={500} />
          <p className="text-center text-gray-500">No products yet in this Category</p>
        </div>
      )}
    </div>
  );
}
