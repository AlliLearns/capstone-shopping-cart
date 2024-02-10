import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../services/products";
import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
import { useState, useEffect } from "react";
// import AddProduct from "./SrdAddProduct";
// import productData from "../mockData/data"; 

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const currProducts = await getProducts();
        setProducts(currProducts);
      } catch (err) {
        console.error(err); // TODO: want error component eventually
      }
    }

    fetchProducts();
  }, []);

  const handleSubmit = async (newProduct, handleReset) => {
    try {
      const product = await createProduct(newProduct);
      setProducts(products.concat(product));
      if (handleReset) handleReset();
    } catch (err) {
      console.error(err); // TODO: want error component eventually
    }
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      const idx = products.findIndex(item => item._id === productId);
      const productsCopy = [...products];
      productsCopy.splice(idx, 1);
      if (idx > -1) setProducts(productsCopy);
    } catch (err) {
      console.error(err); // TODO: want error component eventually
    }
  };

  const handleUpdate = async (productId, updatedProduct) => {
    try {
      console.log('updating product');
      const idx = products.findIndex(item => item._id === productId);
      const productsCopy = [...products];
      productsCopy[idx] = updatedProduct;
      setProducts(productsCopy);
    } catch (err) {
      console.error(err); // TODO: want error component eventually
    }
  }

  return (
    <main>
      <ListProducts products={products} onDelete={handleDelete} onUpdate={handleUpdate} />
      <AddProduct onSubmit={handleSubmit}/>
    </main>
  );
}



