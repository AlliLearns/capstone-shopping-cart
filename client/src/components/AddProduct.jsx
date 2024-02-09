import { useState } from "react";

export default function AddProduct({ onSubmit }) {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = (event) => {
    event.preventDefault();
    setShowForm((prevState) => !prevState);
  };

  if (!showForm) return <AddProductButton handleToggleForm={handleToggleForm}/>
  else return <AddProductForm onSubmit={onSubmit} handleToggleForm={handleToggleForm}/>
}

function AddProductButton({ handleToggleForm }) {
  return (
    <div className="add-form.visible">
      <p><button className="add-product-button" onClick={handleToggleForm}>Add A Product</button></p>
    </div>
  );
}

function AddProductForm({ onSubmit, handleToggleForm }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { title, price, quantity };
    onSubmit(newProduct, resetForm);
  };

  const resetForm = () => { // being invoked, but not currently working
    console.log('resetting form');
    setTitle("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="add-form.visible">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            id="product-name" 
            name="product-name" 
            required={true} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input 
            type="number" 
            onChange={(e) => setPrice(e.target.value)}
            id="product-price" 
            name="product-price" 
            min="0" step="0.01" 
            required={true} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input 
            type="number" 
            onChange={(e) => setQuantity(e.target.value)}
            id="product-quantity" 
            name="product-quantity" 
            min="0" 
            required={true} 
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleToggleForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
}