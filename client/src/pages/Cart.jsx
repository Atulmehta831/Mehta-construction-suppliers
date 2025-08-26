import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
  {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-p">Your cart is empty<h4>Fill it up with new deals !</h4></p>
          <Link to="/poles">
            <button className="continue-btn">Continue Shopping</button> 
          </Link>
          <Link to ="/"> <button className="Login-btn">Login/Signup</button> </Link>
        </div>
      ): (
        <div className="cart-grid">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Product Image */}
              <img
                src={item.img}   
                alt={item.name}
                className="cart-item-image"
              />

              {/* Product Details */}
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity || 1}</p>
              </div>

              {/* Remove Button */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
               🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
