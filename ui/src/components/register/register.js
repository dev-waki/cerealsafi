import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

import axios from 'axios'
import {toast,ToastContainer} from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState("");
 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


function registerHandler(){
var payload = {
"username":username,
'password':password
}

var resp = axios.post("http://localhost:5000/register",payload).then((data)=>console.log(data)).catch((err)=>console.log(err))


}




  return (
    <div className="register-container">
    <ToastContainer/>
      <h2>Register</h2>
      <div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
          
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>
       
   
        <button  onClick={registerHandler}>Register</button>
      </div>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
