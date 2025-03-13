import axios from "axios";

export const getAllProduct = () =>{
    return axios.get("/products")
}
export const getProductDetail = (id:string) =>{
    return axios.get("/products/" +id)
}