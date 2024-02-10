# Implement Features
- [ ] Display products (from static data)
- [x] Display cart (from static data)
- [ ] Display products (from database)
  - [x] Make function to retrieve products from database
- [ ] Display cart (from database)
  - [x] Make function to retrieve cart from database
- [ ] Display Add Product form from "add new product" button
- [ ] Hide Add Product form from "cancel" button
- [ ] Add a new product to database from form from "add" button
  - [x] Make function to add new product to database
- [ ] Show Edit Product form on each product from "edit" button
- [ ] Hide Edit Product form on each product from "cancel" button
- [ ] Update existing product in database from "update" button in Edit Product form
  - [x] Make function to edit existing product in database
- [ ] Delete existing product in database from "delete" button in product list
  - [x] Make function to delete existing product from database
- [ ] Add product to cart from "add to cart" buton
  - [x] Make function to add product to cart in database
- [ ] Implement "checkout" -> not sure what this is yet. 

# Shopping Cart
- Display existing products (grabbed from collection in database)
- Display existing cart (grabbed from collection in database)

- Control display of `AddNewProduct` form
  - "Add A Product" button is displayed when `AddNewProduct` form is hidden
  - "Add A Product" button is hidden when `AddNewProduct` form is displayed
  - Display `AddNewProduct` form when "Add A Product" button is pushed 
  - Hide `AddNewProduct` form when "Cancel" button is pushed

- Add a new product (`AddNewProduct` form is displayed)
  - Submit new product when user clicks "Add" button
  - Update database with new product
  - Update `AddNewProduct` form input values with empty strings
  - Re-render page with new product

- Delete existing product
- Edit existing product
- Add existing product to cart 
- Cart Checkout (whatever that plan is)

`AddNewProduct` form and `EditNewProduct` form the same component? `ProductForm`
(I'm having a really hard time thinking thorugh a plan for structure...)

# Components 
- Header
  - Empty cart
  - Cart with items

- Content
  - Product list 
    - product 
    - edit product form
  - Add product form 


# Path of Implementation
## Look at `api.js` and implement functionality for routes
- (how to test if they're working without the forms?)
- 