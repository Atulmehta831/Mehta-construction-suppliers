import React from 'react';
import './Maintenance.css';

const Maintenance=()=>{
  return(

    <div className = " maintenance-container">
      <div className ="maintenance-card">
         <h1>🚧 Site Under Maintenance 🚧</h1>
        <p>
          Our website is currently undergoing scheduled maintenance.  
          We’ll be back shortly with a better experience for you.
        </p>
        <p className="contact">
          📞 For urgent queries, call us at <a href="tel:9389475617">9389475617</a>
        </p>
        <p className="thanks">Thank you for your patience 🙏</p>

      </div>
    </div>
  )
}



export default Maintenance;
