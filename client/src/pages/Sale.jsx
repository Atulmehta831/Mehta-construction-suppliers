import React from 'react';
import "./Sale.css";

const Sale =()=>{
    const saleItems = [{
      id: 1,
      name: "Electric Pole",
      img: "/images/pole4.jpg",
      originalPrice: 5000,
      discountPrice: 4000,
      category: "Poles",

    },
    {
      id: 2,
      name: "Steel Pole",
      img: "/images/pole2.jpeg",
      originalPrice: 7000,
      discountPrice: 5600,
      category: "Poles",
    },
     {
      id: 3,
      name: "25kVA Transformer",
      img: "/images/Trans3.jpg",
      originalPrice: 45000,
      discountPrice: 38000,
      category: "Transformers",
    },
    {
      id: 4,
      name: "63kVA Transformer",
      img: "/images/Trans2.jpg",
      originalPrice: 72000,
      discountPrice: 62000,
      category: "Transformers",
    },
];
const getDiscountPercent = (orignal,discount) => 
    Math.round(((orignal - discount)/orignal)*100);
return(
    <div className = "sale-container">
         <h1>🔥 Mega Sale</h1>
        <p>Grab our discounted Poles and Transformers before stock runs out!</p>
  
    <div className="sale-grid">
        {saleItems.map((item)=>(
            <div className="sale-card" key={item.id}>
                <div className ="img-box">
                      <img src={item.img} alt={item.name} />
              <span className="sale-badge">
                -{getDiscountPercent(item.originalPrice, item.discountPrice)}%
              </span>
                    </div>

                    <h3>{item.name}</h3>
                    <p className="category">
                        {item.category}
                    </p>
                      <p className="price">
              <span className="original">₹{item.originalPrice}</span>
              <span className="discount">₹{item.discountPrice}</span>
            </p>
             <p className="discount-percent">
              Save {getDiscountPercent(item.originalPrice, item.discountPrice)}%
            </p>
            <div className="buttons">
              <button className="sale-bag-btn">🛒 Add to Bag</button>
              <button className="sale-buy-btn">⚡ Buy Now</button>
            </div>

                </div>
        ))}

    </div>
      </div>
)
}

export default Sale;