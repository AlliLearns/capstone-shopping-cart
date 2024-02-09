import {
  getProducts
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
        console.log(currProducts);
        setProducts(currProducts);
      } catch (err) {
        console.error(err); // TODO: want error component eventually
      }
    }

    fetchProducts();
  }, []);

  return (
    <main>
      <ListProducts products={products} />
      <AddProduct />
    </main>
  );
}



