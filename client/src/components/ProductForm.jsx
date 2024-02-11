import { useState } from "react";

export default function ProductForm(props) {
  const { 
    type, 
    productId,
    title,
    price, 
    quantity,
    hideForm,
    submitForm,
  } = props;

  const className   = type === "Add" ? "add-form.visible" : "edit-form";
  const headingName = type === "Add" ? "Add Product" : "Edit Product";
  const submitType  = type === "Add" ? "Add" : "Update";

  const [inputs, setInputs] = useState({
    "product-name":     title ? title : "",
    "product-price":    price ? price : "",
    "product-quantity": quantity ? quantity : "",
  });

  const updateInputs = (event) => {
    const newInputs = {...inputs};
    newInputs[event.target.name] = event.target.value;
    setInputs(newInputs);
  } 

  const resetForm = () => {
    setInputs({
      "product-name": "",
      "product-price": "",
      "product-quantity": "",
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title: inputs["product-name"], 
      price: inputs["product-price"], 
      quantity: inputs["product-quantity"],
    };

    if (type === "Add") submitForm(newProduct, resetForm);
    else                submitForm(productId, newProduct);
  }

  return (
    <div className={className}>
      <h3>{headingName}</h3>
      <form onSubmit={handleFormSubmit} action="">
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            onChange={updateInputs}
            id="product-name"
            name="product-name"
            value={inputs["product-name"]}
            aria-label="Product Name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            onChange={updateInputs}
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={inputs["product-price"]}
            aria-label="Product Price"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            onChange={updateInputs}
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={inputs["product-quantity"]}
            aria-label="Product Quantity"
            required
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">{submitType}</button>
          <button type="button" onClick={hideForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
