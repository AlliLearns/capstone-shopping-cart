import Cart from "./Cart";
import { tryAction } from "../services/try";
import { getCart } from "../services/products";
import { useState, useEffect } from "react";

export default function Header() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      await tryAction(async () => setCart(await getCart()));
    }

    fetchCart();
  }, []);

  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cartData={cart} />
    </header>
  );
}