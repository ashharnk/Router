import React from "react";
import "./CartPage.css";

const CartPage = ({ cart, setCart }) => {
  const handleQuantityChange = (productId, delta) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = total * 0.1;
  const finalTotal = total - discount;

  return (
    <div className="cart-page">
      <h1 className="heading">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-price">
                    ${item.price} x {item.quantity} = ${" "}
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="item-controls">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="quantity-button"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      setCart(cart.filter((product) => product.id !== item.id))
                    }
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p className="summary-text">Subtotal: ${total.toFixed(2)}</p>
            <p className="summary-text">Discount: -${discount.toFixed(2)}</p>
            <p className="total">Total: ${finalTotal.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
