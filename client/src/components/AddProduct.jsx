import { useState } from "react";

export default function AddProduct() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = (event) => {
    event.preventDefault();
    setShowForm((prevState) => !prevState);
  };

  if (!showForm) return <AddProductButton handleToggleForm={handleToggleForm}/>
  else return <AddProductForm handleToggleForm={handleToggleForm}/>
}

function AddProductButton({ handleToggleForm }) {
  return (
    <div className="add-form.visible">
      <p><button className="add-product-button" onClick={handleToggleForm}>Add A Product</button></p>
    </div>
  );
}

function AddProductForm({ handleToggleForm }) {
  return (
    <div className="add-form.visible">
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input type="text" id="product-name" name="product-name" required="true" />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input type="number" id="product-price" name="product-price" min="0" step="0.01" required />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input type="number" id="product-quantity" name="product-quantity" min="0" required />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleToggleForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
}