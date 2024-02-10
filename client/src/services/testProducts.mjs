import axios from "axios";

/* product {
  title: String
  quantity: integer
  price: float
}
*/ 

// to run file with `node`, axios must be told where to proxy the request:
// https://www.zenrows.com/blog/axios-proxy#how-to-use-axios-proxies

const proxy = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 5001,
};

export const getProducts = async () => {
  const products = await axios.get("/api/products", { proxy });
  if (!products) return [];
  return products.data;
}

export const createProduct = async (newProduct) => {
  const result = await axios.post("/api/products", {...newProduct}, { proxy });
  if (!result) return {};
  return result.data;
};

export const updateProduct = async (productId, newProduct) => {
  const result = await axios.put(`/api/products/${productId}`, { ...newProduct }, { proxy });
  console.log("result of updated product is: ", result.data);
  if (!result) return "";
  return result.data;
}

export const deleteProduct = async (productId) => {
  const result = await axios.delete(`/api/products/${productId}`, { proxy });
  if (!result) return "";
  return result.data;
} 

// runProductsTests();

async function runProductsTests() {
  const newProduct = await testCreateProduct();
  await printGetProducts();
  await testUpdateProduct(newProduct);
  await printGetProducts();
  await testDeleteProduct(newProduct._id);
  await printGetProducts();
}

async function printGetProducts() {
  const products = await getProducts();
  console.log("existing products: ", products);
}

async function testCreateProduct() {
  const newProduct = {
    title: 'default01',
    quantity: 3, 
    price: 11.99,
  };

  const result = await createProduct(newProduct);
  return result;
}

async function testUpdateProduct(product) {
  await updateProduct(product._id, { ...product, title: "default02" });

}

async function testDeleteProduct(productId) {
  await deleteProduct(productId);
}

/* cart {

}

*/