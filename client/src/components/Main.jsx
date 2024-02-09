import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
// import AddProduct from "./SrdAddProduct";
import productData from "../mockData/data"; 

export default function Main() {
  return (
    <main>
      <ListProducts products={productData} />
      <AddProduct />
    </main>
  );
}



