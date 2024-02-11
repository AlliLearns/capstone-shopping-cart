import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
import { tryAction } from "../services/try";
import { useEffect, useState } from "react";
import { getProducts, createProduct } from "../services/products";

export default function Content() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await tryAction(async () => {
        const currProducts = await getProducts();
        setProducts(currProducts);
      });
    }

    fetchProducts();
  }, []);

  const handleSubmitOfNewProduct = async (newProduct, resetForm) => {
    await tryAction(async () => {
      const product = await createProduct(newProduct);
      setProducts(products.concat(product));
      if (typeof resetForm === "function") resetForm();
    });
  }

  return (
    <main>
      <ListProducts products={products}/>
      <AddProduct onSubmit={handleSubmitOfNewProduct}/>
    </main>
  );
}