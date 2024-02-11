import { useState } from "react";
import ProductForm from "./ProductForm";

export default function ListProducts(props) {
  const { products, onSubmit, onDelete } = props;
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(item => <Product 
          item={item} 
          handleEdit={onSubmit}
          handleDelete={onDelete}
          key={item._id}
        />)}
      </ul>
    </div>
  );
}

function Product(props) {
  const { item, handleEdit, handleDelete } = props;
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = (event) => {
    event.preventDefault();
    setShowForm(prevState => !prevState);
  }

  const handleProductDelete = (event) => {
    event.preventDefault();
    if (item._id) handleDelete(item._id);
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
              productId={item._id}
              title={item.title} 
              price={item.price}
              quantity={item.quantity}
              hideForm={handleFormToggle}
              submitForm={handleEdit}
            />
          }
        </div>
        <button className="delete-button" onClick={handleProductDelete}><span>X</span></button>
      </div>
    </li>
  );
}