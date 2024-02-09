import axios from "axios";

export const getProducts = async () => {
  const products = await axios.get("/api/products");
  if (!products) return [];
  return products.data;
}