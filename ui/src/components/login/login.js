import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
    var payload = {
    "username":username,
    "password":password
    }
  const response = await axios.post("http://localhost:5000/login",payload)
if(response.data.msg == 'Login Successful')toast.success("login success")
if(response.data.msg == 'Username does not exist' || response.data.msg == 'password mismatch')toast.error(response.data.msg)

} catch (error) {
toast.success("Error logging in")
}
  }

  return (
    <div className="login-container">
      <ToastContainer/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
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
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
