
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
- Complete
- Start extracting provided `ui` into different components
- Populate the app with provided static data.
- View all products and cart items
- Make `Add Product` button toggle the `AddProductForm`
- Fetch products from server to display existing products
- Create Product
- Delete Product
- Make `Edit` button toggle the `EditProductForm`.
- Make `Cancel` button close `EditProductForm`

- In progress
- Edit Product

- Next 
- Add Product to Cart
- Fix 'new product' display bug on `AddProductForm`: entries stay after adding product
*/
