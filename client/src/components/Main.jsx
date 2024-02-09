import {
  getProducts,
  createProduct
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

  const handleSubmit = async(newProduct, handleReset) => {
    try {
      const product = await createProduct(newProduct);
      setProducts(products.concat(product));
      if (handleReset) handleReset();
    } catch (err) {
      console.error(err); // TODO: want error component eventually
    }
  };

  return (
    <main>
      <ListProducts products={products} />
      <AddProduct onSubmit={handleSubmit}/>
    </main>
  );
}



