// Sign.jsx (React Component)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Register.css'

function Sign() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    console.log('Sending user data:', userData); 

    try {
      const response = await fetch(`https://mern-ecommerce-b5p1.onrender.com/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data);
        // Handle success (e.g., redirect to login page or show success message)
      } else {
        console.error('Registration failed:', data.error);
        // Handle error (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1 className='register-heading'>Register </h1>
      <form onSubmit={handleSubmit} className='regitser-form'>
        <div className="form-group  register-form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group register-form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group register-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-buttons">
          <button type="submit" className="btn btn-primary register-button">Login</button>
          <Link to='/login' className='btn btn-primary login-button'>Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Sign;
