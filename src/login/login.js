import React, { useState } from "react";
import { createDirectus, rest, login } from '@directus/sdk';
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const client = createDirectus('http://192.168.90.131:8055/').with(rest());
   
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setError(''); // Clear any previous errors

        try {
            const result = await client.request(login(email, password));
            
            // If login successful, store the access token
            if (result && result.access_token) {
                localStorage.setItem('authToken', result.access_token);
                // Navigate to home page
                navigate('/home');
            }
        } catch (err) {
            setError('Invalid email or password');
            console.error('Login error:', err);
        }
    }
   
    return(
        <div className="login-container">
            <p className="title">TRG INVENTORY</p>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="input-container">
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="input-container">
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;