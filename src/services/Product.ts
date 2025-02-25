import axios from "axios";

export const getAllProduct = () =>{
    return axios.get("/products")
}
