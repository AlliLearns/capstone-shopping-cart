import ProductForm from "./ProductForm";
import { useState } from "react";

export default function AddProduct(props) {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = (event) => {
    event.preventDefault();
    setShowForm(prevState => !prevState);
  }

  if (!showForm) return <AddProductButton showForm={handleFormToggle}/>
  return <ProductForm type={"Add"} hideForm={handleFormToggle}/>
}

function AddProductButton({ showForm }) {
  console.log('displaying add product button');
  return (
    <div className="add-form.visible">
      <p><button className="add-product-button" onClick={showForm}>Add A Product</button></p>
    </div>
  );
}