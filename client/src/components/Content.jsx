import AddProduct from "../components/AddProduct";
import { createProduct } from "../services/products";
import { tryAction } from "../services/try";
import { useState } from "react";

export default function Content() {
  const [products, setProducts] = useState([]);

  const handleSubmitOfNewProduct = async (newProduct, resetForm) => {
    await tryAction(async () => {
      const product = await createProduct(newProduct);
      setProducts(products.concat(product));
      if (typeof resetForm === "function") resetForm();
    });
  }

  return (
    <main>
      <AddProduct onSubmit={handleSubmitOfNewProduct}/>
    </main>
  );
}