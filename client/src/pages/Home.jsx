import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mehta Construction & Suppliers</h1>
          <p>
            Government Certified Contractor | Trusted Infrastructure Partner | 
            Listed in <strong>National Cooperative Database (NCD)</strong>
          </p>
          <a href="tel:+919389475617" className="phone-link-home">
            📞 +91 9389475617
          </a>
        </div>
      </section>
      <section  className="sale-banner" >
        <div className="sale">
          <h2 className ="salle">🔥 Big Sale is Live!</h2>
           <Link to= "/sale"> <img src ="/images/sale.jpeg" className="image-sale" alt="sale-banner"></img> </Link>
           <p>"Get up to <strong>30% OFF</strong> on poles, transformers, and maintenance services."</p>
            {/* <button class="shop-bttn"><Link to="/poles">Shop Now</Link></button> */}
        </div>


      </section>
      <section  className="testimonials">
        <div className="testi">
          <h2>What our Clients say</h2>
          <div className ="testimonial-grid">
            <div className ="testimonial">
             <p>"Great service and on-time delivery. Highly recommended!"</p>
             <img src ="/images/atul2.jpeg" className="test1" alt="Atul2"></img>
             <h4>- Atul</h4>
             </div>
                 <div class="testimonial">
             <p>"Very professional team, satisfied with the construction quality."</p>
             <img src ="/images/mukul.jpeg" className="test2" alt="Mukul2"></img>
              <h4>- Mukul</h4>
              </div>
          </div>
        </div>
      </section>

      <section className = "ceo-message">
        <div className ="ceo-sec">
        <h2>Message from Our CEO</h2>
        <div className="ceo-content">
          <img src ="/images/papa.jpeg" className ="ceo-image" alt="CEO Dhan singh mehta"></img>
           <div>
             <h3>Dhan Singh Mehta</h3>
             <p>"At Mehta Construction and Suppliers Ltd, our mission is to deliver trust, 
               quality, and innovation in every project we take on."</p>
            </div>
        </div> </div>
       
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h2 className ="certif">Our Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <img className = "Ncdlogo" src="/images/companylogo.jpeg" alt="Government Certified" />
            <h3>Government Certified Contractor</h3>
            <p>Recognized for quality and compliance in all projects</p>
          </div>

          <div className="cert-card">
            <img className = "Ncdlogo" src="/images/Ncd.jpg" alt="NCD Listed" />
            <h3>National Cooperative Database (NCD)</h3>
            <p>Officially listed as a trusted cooperative contractor</p>
            <a className ="listing"
              href="https://cooperatives.gov.in/en/home/cooperative-list-reports/state/5?page=182"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Listing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
