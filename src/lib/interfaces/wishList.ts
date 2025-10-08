export interface ISubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface IProduct {
  sold: number;
  images: string[];
  subcategory: ISubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: ICategory;
  brand: IBrand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface IWishListResponse {
  status: string;
  count: number;
  data: IProduct[];
}
