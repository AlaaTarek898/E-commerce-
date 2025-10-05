'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getBrand } from '@/lib/services/brand.services';
import { getAllCategories } from '@/lib/services/category.services';

interface Brand {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
}

interface FilterProps {
  onFilter: (filters: { brand?: string; category?: string; sort?: string }) => void;
}

export default function FilterProduct({ onFilter }: FilterProps) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    async function fetchData() {
      const brandRes = await getBrand();
      if (brandRes?.length > 0) setBrands(brandRes);

      const catRes = await getAllCategories();
      if (catRes?.data?.length > 0) setCategories(catRes.data);
    }
    fetchData();
  }, []);

  const handleChangeBrand = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setSelectedBrand(value);
    onFilter({ brand: value, category: selectedCategory });
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setSelectedCategory(value);
    onFilter({ brand: selectedBrand, category: value });
  };

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      {/* Brand filter */}
      <div className="w-11/12 md:w-3/12">
        <Box sx={{ minWidth: 120, marginBottom: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="brand-select-label">Filter By Brand</InputLabel>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              value={selectedBrand}
              label="Brand"
              onChange={handleChangeBrand}
            >
              <MenuItem value="">All</MenuItem>
              {brands.map((ele) => (
                <MenuItem key={ele._id} value={ele.name}>
                  {ele.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* Category filter */}
      <div className="w-11/12 md:w-3/12">
        <Box sx={{ minWidth: 120, marginBottom: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Filter By Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={selectedCategory}
              label="Category"
              onChange={handleChangeCategory}
            >
              <MenuItem value="">All</MenuItem>
              {categories.map((ele) => (
                <MenuItem key={ele._id} value={ele.name}>
                  {ele.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* Sort filter */}
      <div className="w-11/12 md:w-3/12">
        <Box sx={{ minWidth: 120, marginBottom: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="sort-select-label">Sort By Price</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={selectedSort}
              label="Sort"
              onChange={(e) => {
                const value = e.target.value as string;
                setSelectedSort(value);
                onFilter({ brand: selectedBrand, category: selectedCategory, sort: value });
              }}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="asc">Price: Low to High</MenuItem>
              <MenuItem value="desc">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
