import { useState } from "react";

export default function ListProducts({ onDelete, products }) {

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(item => <Product item={item} onDelete={onDelete} key={item._id}/>)}
      </ul>
    </div>
  );
}

function Product({ item, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = (event) => {
    event.preventDefault();
    setShowEdit(true);
  };

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
          <button className="edit" onClick={handleShowEdit}>Edit</button>
          {showEdit ? <EditProductForm /> : null}
        </div>
        <button className="delete-button" onClick={handleDelete}><span>X</span></button>
      </div>
    </li>);
}

function EditProductForm() {
  return (
    <div className="edit-form">
    <h3>Edit Product</h3>
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          value="Apple 10.5-Inch iPad Pro"
          aria-label="Product Name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          id="product-price"
          value="649.99"
          aria-label="Product Price"
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="number"
          id="product-quantity"
          value="2"
          aria-label="Product Quantity"
        />
      </div>

      <div className="actions form-actions">
        <button type="submit">Update</button>
        <button type="button">Cancel</button>
      </div>
    </form>
    </div>
  );
}