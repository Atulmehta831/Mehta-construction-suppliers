import React, { useState } from "react";
import "./Transformer.css";
import Toast from "../components/Toast";
import {useNavigate} from "react-router-dom";

const TransformersData = [
  {
    id: 1,
    name: "25 kVA Transformer",
    description: "Ideal for small commercial areas.",
    img: "/images/Trans1.jpeg", 
    price: 45000,
    rating: 4,
  },
  {
    id: 2,
    name: "63 kVA Transformer",
    description: "Perfect for mid-sized buildings and townships.",
    img: "/images/Trans2.jpg",
    price: 85000,
    rating: 5,
  },
  {
    id: 3,
    name: "100 kVA Transformer",
    description: "High performance and durable.",
    img: "/images/Trans3.jpg",
    price: 135000,
    rating: 4,
  },
];

const Transformers = ({ cart, setCart }) => {
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000);
  };

  const addToCart = (transformer) => {
    setCart([...cart, transformer]);
    showToast(`${transformer.name} added to cart!`);
  };

  const buyNow = (transformer) => {
    setCart([...cart, transformer]);
    showToast(`Proceeding to buy: ${transformer.name} for ₹${transformer.price}`);
     setTimeout(()=>{
      navigate("/cart");
    },1500);
  };

  return (
    <div className="transformer-page">
      <h2>Our Transformers</h2>
      <div className="transformer-grid">
        {TransformersData.map((item) => (
          <div className="transformer-card" key={item.id}>
            <img src={item.img} alt={item.name} className="transformer-img" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price-trans">₹{item.price.toLocaleString()}</p>
            <div className="rating">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            <div className="transformer-buttons">
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
              <button className="buy-btn" onClick={() => buyNow(item)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

     
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default Transformers;
