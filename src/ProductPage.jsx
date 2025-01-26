import React, { useState, useEffect } from "react";
import "./ProductPage.css";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

const ProductPage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleCartToggle = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-page">
      <h1 className="heading">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">
              {product.description.substring(0, 50)}...
            </p>
            <button
              onClick={() => handleCartToggle(product)}
              className={`cart-button ${
                cart.find((item) => item.id === product.id) ? "remove" : "add"
              }`}
            >
              {cart.find((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
