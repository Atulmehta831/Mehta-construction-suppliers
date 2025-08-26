import React, {useState} from "react";
import './ContactForm.css'

const ContactForm =()=>{
    const [formData , setFormData]=useState({
        name : "",
        email : "",
        message :""
    });

    const [status , setStatus] = useState("");
    const handleChange= (e)=>{
        setFormData({ ...formData,[e.target.name]:e.target.value });

    };
    const handleSubmit = (e)=>{
        e.preventDefault();
         console.log("Form submitted:", formData);
    setStatus("✅ Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
    };
    return (
        <div className = "contact-form-body">
            <div className="contact-container">
                 <h2>Contact Us</h2>
        <p className ="para">
          Have questions? Call us at 📞 {" "}
          <a href="tel:9389475617" className="phone-link">
            9389475617
          </a>{" "}
          or fill out the form below.
        </p>
        <form onSubmit ={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className ="submitContact-btn" type="submit">Send Message</button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
};

export default ContactForm;