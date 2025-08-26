import React,{useState} from 'react';
import axios from "axios";
import './Complaints.css'

const ComplaintForm = () => {
     const [formData , setFormData] = useState({
          name : "",
          email : "",
          phone : "",
          description : "",
          image: null,
          
     });

     const [status, setStatus] = useState("");
     const handleChange =(e) =>{
          const {name,value} = e.target;
          setFormData({...formData,[name]:value});
     };
     const handleFileChange =(e)=>{
          setFormData({...formData , image: e.target.files[0] });
     };
     const handleSubmit =(e)=> {
          e.preventDefault();
          setStatus("Complaint submitted successfully");
     };

     return (
          <div className="complaint-form-container">
               <h2>Submit a complaint</h2>
          <form className="complaint-form" onSumbit ={handleSubmit}>
               <input type = "text" name = "name" placeholder ="Your name" value = {formData.name} onChange= {handleChange} />
                <input type = "email" name = "email" placeholder ="Your email" value = {formData.email} onChange= {handleChange} />
                <input type = "tel" name = "phone" placeholder ="Your PhoneNumber" value = {formData.phone} onChange= {handleChange} />
                <textarea name="description" placeholder="Describe your issue" value={formData.description}  onChange={handleChange} />
               <input type = "file" name= "image" accept ="image/*" onChange ={handleFileChange} />
               <button type ="submit">Submit</button>    
               {status && <p>{status}</p>}                                    
          </form>
          </div>
     );
};

export default ComplaintForm;