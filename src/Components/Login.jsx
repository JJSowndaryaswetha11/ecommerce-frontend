import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector('form');

    try {
      const response = await fetch(`https://mern-ecommerce-b5p1.onrender.com/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log(result);

      if (result.message === 'Login successful') {
        navigate('/');
      } else {
        console.error('Login failed:', result);
        alert('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('Error during login. Please try again later.');
    }

    form.reset();
  };

  return (
    <div className="login">
      <h1 className='login-heading'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group login-form-group">
          <label htmlFor="exampleInputEmail1" className='login-email'>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group login-form-group">
          <label htmlFor="exampleInputPassword1" className='login-password'>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       <div className="login-buttons">
       <button type="submit" className="btn btn-primary">Register</button><br /><br />
       <Link to='/register' className='btn btn-primary register-button'>Login</Link>
       </div>
      </form>
    </div>
  );
}

export default Login; 