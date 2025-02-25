interface Product {
  id: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number;  // Có thể không có
  discount?: number;  // Có thể không có
  image: string;
  rating: number;
}

export type Category = {
  _id: string;
  name: string;
  description: string;
};

export type ProductFormParams = {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isShow: boolean;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = {
  _id: string;
  user: string;
  products: CartItem[];
};
