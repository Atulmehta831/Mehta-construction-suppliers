import React from 'react';
import "./Store.css"
const Store =()=>{
  return (
    <div className ="store-container">
      <h1 className = "main-heading">Find a store</h1>

      <div className ="store-card main-office">
        <h2>Main Head Office</h2>
         <p><strong>Location:</strong> Pithoragarh, Uttarakhand</p>
        <p><strong>Phone:</strong> +91 9389475617</p>
      </div>

      <div className = "branch-list">
        <div className ="store-card">
            <h3>Gangolihat Branch</h3>
          <p><strong>Location:</strong> Gangolihat, Uttarakhand</p>
          <p><strong>Phone:</strong> +91 9456106874</p>
        </div>

         <div className="store-card">
          <h3>Berinag Branch</h3>
          <p><strong>Location:</strong> Berinag, Uttarakhand</p>
          <p><strong>Phone:</strong> +91 9988776655</p>
        </div>

      </div>
    </div>
  )

}

export default Store;
