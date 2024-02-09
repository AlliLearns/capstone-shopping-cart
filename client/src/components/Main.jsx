// import AddProduct from "./AddProduct";
import AddProduct from "./SrdAddProduct";
import productData from "../mockData/data"; 
import { useState } from "react";

export default function Main() {
  return (
    <main>
      {/* <ListProducts products={productData} /> */}
      <AddProduct />
    </main>
  );
}

function ListProducts({ products }) {
  const [showEdit, toggleShowEdit] = useState(false);

  const handleToggleEdit = (event) => {
    event.preventDefault();
    toggleShowEdit((prevState) => !prevState);
  };

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(item => {
          if (!showEdit) return <Product products={products} />
        })}
      </ul>
    </div>
  );
}

function Product({ products }) {
  return (
    <li className="product" key={item.id}>
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
    </li>);
}

function EditProductForm({ handleToggleEdit }) {
  return (
    <div className="edit-form"></div>
  );
}

