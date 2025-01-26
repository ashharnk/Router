import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="logo">
          Fake Store
        </Link>
        <Link to="/cart" className="cart-link">
          Cart ({cart.length})
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<ProductPage cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
