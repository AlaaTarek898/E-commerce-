'use client';

import { useState } from "react";
import { IProduct } from "@/lib/interfaces/product";
import FilterProduct from "./FilterProduct";
import Products from "./Product";

export default function Productbridge({ data }: { data: IProduct[] }) {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(data);


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const handleFilter = ({
    brand,
    category,
    sort,
  }: {
    brand?: string;
    category?: string;
    sort?: string;
  }) => {
    let filtered = [...data];

    if (brand) {
      filtered = filtered.filter((item) => item.brand?.name === brand);
    }

    if (category) {
      filtered = filtered.filter((item) => item.category?.name === category);
    }

    if (sort === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="w-11/12 m-auto mt-10">
      <FilterProduct onFilter={handleFilter} />

    
      <Products data={currentProducts} />

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-red-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
