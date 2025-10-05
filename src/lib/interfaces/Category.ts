export interface IcategoryResponse {
  results: number;
  metadata: Imetadata;
  data: Icategory[];
}

export interface Icategory {
  createdAt: string;
  image: string;
  name: string;
  slug: string;
  updatedAt: string;
  _id: string;
}
export interface Imetadata {
  currentPage: number;
  limit: number;
  numberOfPages: number;
}
export interface ISubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISubCategoryResponse {
  data: ISubCategory[];
}
