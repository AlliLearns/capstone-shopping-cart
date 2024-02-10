import axios from "axios";

/* product {
  title: String
  quantity: integer
  price: float
}
*/ 

export const getProducts = async () => {
  const products = await axios.get("/api/products");
  if (!products?.data) return [];
  return products.data;
}

export const createProduct = async (newProduct) => {
  const result = await axios.post("/api/products", { ...newProduct });
  if (!result?.data) return {};
  return result.data;
};

export const updateProduct = async (productId, newProduct) => {
  const result = await axios.put(`/api/products/${productId}`, { ...newProduct });
  if (!result?.data) return "";
  return result.data;
}

export const deleteProduct = async (productId) => {
  const result = await axios.delete(`/api/products/${productId}`);
  if (!result?.data) return "";
  return result.data;
} 

// cart
export const getCart = async () => {
  const cart = await axios.get("/api/cart");
  if (!cart?.data) return [];
  return cart.data;
}

export const addToCart = async (productId) => {
  const result = await axios.post("/api/add-to-cart", { productId });
  if (!result) return "";
  return result.data;
}