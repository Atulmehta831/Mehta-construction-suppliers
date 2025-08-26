import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer =()=>{
    return(
        <footer className = "footer">
            <div className ="footer-container">
                <div className ="footer-section">
                    <h4>Company</h4>
                    <ul>
                          <li><Link to="/Store">Our Store</Link></li>
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className ="footer-section">
                     <h4>Quick Links</h4>
                           <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/poles">Services</Link></li>
                              <li><Link to="/transformers">Products</Link></li>
                           </ul>
                </div>
                <div className ="footer-section">
                    <h4>Follow us</h4>
                       <div className="social-icons">
                          <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">📘</a>
                          <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">📸</a>
                          <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
                          <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">🐦</a>
                      </div>

                </div>
            </div>
                  <div className="footer-bottom">
                      <p>© {new Date().getFullYear()} Mehta Construction and Suppliers Ltd. All rights reserved.</p>
                 </div>
        </footer>   
    )
}


export default Footer;