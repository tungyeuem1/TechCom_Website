import axios from "axios";
export type Product = {
  _id: number; // MongoDB thường dùng string thay vì number
  title: string;
  image: string;
  description: string;
  price: number;
  category?: string;
  discount?: number;
  featured?: boolean;
};
type Products = {
    title: string;
    image:string
    price:number
    description:string
    category:string
  };
export const getAllProduct = () =>{
    return axios.get("/products")
}
export const getProductDetail = (id:string) =>{
    return axios.get("/products/" +id)
}
export const deleteProduct = (id: number) => {
    return axios.delete("/products/" + id);
  };
  export const addProduct = (data: Products) => {
    return axios.post("/products", data);
  };
  export const editProductDetail = (id: string, data: Products) => {
    return axios.put("/products/" + id, data);
  };
  