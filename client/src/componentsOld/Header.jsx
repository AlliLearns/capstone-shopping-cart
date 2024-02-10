import Cart from "./Cart";
import cartData from "../mockData/data"; 
const emptyCart = []; // empty cart data mock

export default function Header() {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cartData={cartData} />
    </header>
  );
}

