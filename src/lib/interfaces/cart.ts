export interface ICartResponse {
  status: string; // "success"
  numOfCartItems: number;
  cartId: string;
  data: ICartData;
}

export interface ICartData {
  _id: string;
  cartOwner: string;
  products: ICartProduct[];
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  __v: number;
  totalCartPrice: number;
}

export interface ICartProduct {
  count: number;
  _id: string;
  product: IProductInCart;
  price: number;
}

export interface IProductInCart {
  subcategory: ISubcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: ICategory;
  brand: IBrand;
  ratingsAverage: number;
  id: string;
}

export interface ISubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string; // categoryId as string
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
