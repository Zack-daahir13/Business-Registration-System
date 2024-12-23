import React, { useState } from 'react';


function Login({ handleLogin }) {
  const [email, setEmail] = useState('zackdaahir909@gmail.com');
  const [password, setPassword] = useState('admin123');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Log In</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit" className="submit-btn">Log In</button>
    </form>
  );
}

export default Login;
