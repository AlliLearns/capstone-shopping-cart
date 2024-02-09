
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div id="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;

/* Goals
- Start extracting provided `ui` into different components
- Populate the app with provided static data.
- Make `Add Product` button toggle the `AddProductForm`

- Fetch products from server to display existing products
- Create Product
- Delete Product

- If I have time: 
- Make `Edit` button toggle the `EditProductForm`.
- Edit Product
- Add Product to Cart
- View all products and cart items
*/
