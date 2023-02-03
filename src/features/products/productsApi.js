import axios from "../../utils/axios.config";
export const fetchProducts = async () => {
  const data = await axios.get("/products");

  return data.data;
};

export const postProducts = async(productData) =>{
    await axios.post("/product" , productData)
}