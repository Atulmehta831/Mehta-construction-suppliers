import React,{useState}  from 'react';
import "./Poles.css";
import Toast from "../components/Toast";
import {useNavigate} from 'react-router-dom';

const Poles=({cart,setCart})=> {
  const[toastMessage ,setToastMessage] = useState("");
  const navigate = useNavigate();
  const polesData = [
    { id: 1, name: "Electric Pole - 10ft", price: 1500, img:"/images/pole1.jpeg" },
    { id: 2, name: "Electric Pole - 15ft", price: 2000, img: "/images/pole2.jpeg" },
    { id: 3, name: "Electric Pole - 20ft", price: 3000, img: "/images/pole4.jpeg" }, 
  ];

  const showToast =(msg)=>{
    setToastMessage (msg);
    setTimeout(() => setToastMessage(""), 2000);
  }

  const addToCart =(pole)=>{
        setCart([...cart,pole]);
        showToast (`${pole.name} added to cart !`)
  }
  const buyNow =(pole)=> {
    setCart([...cart,pole]);
    showToast(`Proceeding to buy :${pole.name} for ₹ ${pole.price} `);
  
    setTimeout(()=>{
      navigate("/cart");
    },1500);

  };
   return (
    <div className ="poles-container">
      <h1>Available Poles</h1>
      <div className ="poles-grid">
        {polesData.map((pole)=>{
          return<div key ={pole.id} className ="pole-card">
            <img src ={pole.img} alt = {pole.name} />
            <h3>{pole.name}</h3>
            <p>₹{pole.price}</p>
            <div className ="pole-buttons">
              <button className = "add-cart-btn" onClick ={()=> addToCart(pole)}>Add to cart</button>
              <button className = "buy-now-btn" onClick ={()=> buyNow(pole)}>BuyNow</button>
              
              
              </div>
            
            
             </div>

        })}
      </div>
            {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}


    </div>
    
   )
};


 
export default Poles;
