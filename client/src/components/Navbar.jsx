import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  

  return (
    
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-links">
            
            <Link to="/transformers">Transformers</Link>
            <Link to="/poles">Poles</Link>
            <Link to="/maintenance">Maintenance</Link>
            <Link to="/store">Our Store</Link>
            <Link to="/complaints">Complaints</Link>
            <Link to="/sale" className="sale-link">SALE</Link>

            
            
            
          </div>
        </div>
      

        <div className="navbar-right">
        
          <button className="icon-btn cartIcon"> <Link to ="/cart">🛒</Link></button>
          <button className="icon-btn home">   <Link to="/"> 🏠 </Link></button>
          <button className="icon-btn contact">   <Link to="/contact"> 🎧 </Link></button>
          <button className="icon-btn userIcon"><Link to="/auth">👤</Link> </button>
        </div>
      </nav>

  );
};

export default Navbar;
