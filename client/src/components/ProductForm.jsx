export default function ProductForm(props) {
  const { type, title, price, quantity } = props;
  const { hideForm } = props;

  const className = type === "Add" ? "add-form.visible" : "edit-form";
  const headingName = type === "Add" ? "Add Product" : "Edit Product";
  const submitType = type === "Add" ? "Add" : "Update";
  const productTitle = title ? title : "";
  const productPrice = price ? price : "";
  const productQuantity = quantity ? quantity : "";

  return (
    <div className={className}>
      <h3>{headingName}</h3>
      <form action="">
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            // label={productTitle}
            aria-label="Product Name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            // value={productPrice}
            aria-label="Product Price"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            // value={productQuantity}
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