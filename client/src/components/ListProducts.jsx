import { useState } from "react";

export default function ListProducts({ onDelete, products }) {
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
          if (!showEdit) return <Product item={item} onDelete={onDelete} key={item._id}/>
        })}
      </ul>
    </div>
  );
}

function Product({ item, onDelete }) {
  const handleDelete = (event) => {
    console.log(item);
    event.preventDefault();
    if (item._id) onDelete(item._id);
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
        <p className="quantity">{item.quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button" onClick={handleDelete}><span>X</span></button>
      </div>
    </li>);
}

function EditProductForm({ handleToggleEdit }) {
  return (
    <div className="edit-form"></div>
  );
}