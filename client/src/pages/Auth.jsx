import React , {useState} from 'react';
import "./Auth.css";

const Auth =()=>{
    const[mobile,setMobile]= useState("");
    const[error,setError]=useState("");
    const[success,setSuccess]=useState("");

    const handleChange=(e)=>{
        const value =e.target.value.replace(/\D/g,"");
        if (value.length <=10){
            setMobile(value);
        }
    };
    const handleSendOtp =()=>{
        setError("");
        setSuccess("");
        if (!/^[6-9]\d{9}$/.test(mobile)){
        setError("Mobile should be a 10-digit number starting with 6-9.");
        return;
        }
         setSuccess("OTP has been sent to " + mobile);

    };
    return(
        <div className="auth-container">
            <div className="auth-box">
                 <button className="close-btn">×</button>
        <h2>Welcome to</h2>
        <h1 className="brand">MEHTA CONSTRUCTION & SUPPLIERS</h1>
        <p>
          Login / Register with us to get latest updates and manage your orders
        </p>

        <input 
        type ="text"
        placeholder="Enter mobile number"
        value={mobile}
         maxLength="10"
         onChange={handleChange}
          className={`input-box ${error ? "input-error" : ""}`} />
          {error && <small className="error-text">{error}</small>}
        {success && <small className="success-text">{success}</small>}

           <button className="primary-btn-otp" onClick={handleSendOtp}>
          SEND OTP
        </button>

            </div>
        </div>
    )
   
      
}

export default Auth;