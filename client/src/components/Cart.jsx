export default function Cart(props) {
  const { cartData } = props;

  if (cartData.length === 0) return <EmptyCart />;
  return <CartWithItems cartData={cartData} />;
}

function EmptyCart() {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
      <button className="checkout" disabled>Checkout</button>
    </div>
  );
}

function CartWithItems({ cartData }) {
  const sum = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
  const total = Intl.NumberFormat('en-US').format(sum);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map(item => <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>)}
        </tbody>
        <tfoot>
            <tr>
              <td colSpan="3" className="total">{`Total: $${total}`}</td>
            </tr>
          </tfoot>
      </table>
      <div className="checkout-button">
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}