import { useState } from "react";
import ProductForm from "./ProductForm";

export default function ListProducts(props) {
  console.log("list products run");
  const { products } = props;
  return (
    <div className="product-listing">
    <h2>Products</h2>
    <ul className="product-list">
      {products.map(item => <Product item={item} key={item._id}/>)}
    </ul>
  </div>
  );
}

function Product(props) {
  const { item } = props;
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = (event) => {
    event.preventDefault();
    setShowForm(prevState => !prevState);
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleFormToggle}>Edit</button>
          {!showForm ? 
            null : 
            <ProductForm 
              title={item.title} 
              price={item.price}
              quantity={item.quantity}
              hideForm={handleFormToggle}
            />
          }
        </div>
        {/* <button className="delete-button" onClick={handleDelete}><span>X</span></button> */}
      </div>
    </li>
  );
}