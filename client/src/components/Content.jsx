import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
import { tryAction } from "../services/try";
import { useEffect, useState } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../services/products";

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
  };

  const handleEditOfExistingProduct = async (productId, updatedProduct) => {
    await tryAction(async () => {
      await updateProduct(productId, updatedProduct);
      const idx = products.findIndex(item => item._id === productId);
      const productsCopy = [...products];
      productsCopy[idx] = updatedProduct;
      setProducts(productsCopy);
    });
  };

  const handleDeletionOfExistingProduct = async (productId) => {
    await tryAction(async () => {
      await deleteProduct(productId);
      const idx = products.findIndex(item => item._id === productId);
      const productsCopy = [...products];
      productsCopy.splice(idx, 1);
      if (idx > -1) setProducts(productsCopy);
    });
  }

  return (
    <main>
      <ListProducts 
        products={products} 
        onSubmit={handleEditOfExistingProduct}
        onDelete={handleDeletionOfExistingProduct}
      />
      <AddProduct onSubmit={handleSubmitOfNewProduct}/>
    </main>
  );
}