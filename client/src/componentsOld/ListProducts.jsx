import { useState } from "react";

export default function ListProducts({ products, onDelete, onUpdate }) {

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(item => <Product item={item} onDelete={onDelete} onUpdate={onUpdate} key={item._id}/>)}
      </ul>
    </div>
  );
}

function Product({ item, onDelete, onUpdate }) {
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
          {showEdit ? <EditProductForm item={item} setShowEdit={setShowEdit} onUpdate={onUpdate}/> : null}
        </div>
        <button className="delete-button" onClick={handleDelete}><span>X</span></button>
      </div>
    </li>);
}

function EditProductForm({ item, setShowEdit, onUpdate }) {
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleHideEdit = (event) => {
    event.preventDefault()
    setShowEdit(false);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedProduct = { title, price, quantity }
    onUpdate(item._id, updatedProduct);
  }

  return (
    <div className="edit-form">
    <h3>Edit Product</h3>
    <form onSubmit={handleUpdate} action="">
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          id="product-name"
          // value="Apple 10.5-Inch iPad Pro"
          aria-label="Product Name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          id="product-price"
          // value="649.99"
          aria-label="Product Price"
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          id="product-quantity"
          // value="2"
          aria-label="Product Quantity"
        />
      </div>

      <div className="actions form-actions">
        <button type="submit">Update</button>
        <button type="button" onClick={handleHideEdit}>Cancel</button>
      </div>
    </form>
    </div>
  );
}