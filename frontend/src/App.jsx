<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard'; 

=======
// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/signUp';
import BusinessRegistration from './pages/BusinessRegistration';
>>>>>>> 0c0b18b6decb40bf9723bed5823accfa048d4fb4

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  ); 
}

export default App;
=======
      <Routes>
        <Route path="/" element={<AuthHandler />} />
        <Route path="/business-registration" element={<BusinessRegistration />} />
      </Routes>
    </Router>
  );
}

function AuthHandler() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    if (email === 'zackdaahir909@gmail.com' && password === 'admin123') {
      navigate('/business-registration');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <div className="overlay"></div> 
      <div className="form-container">
        {isLogin ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <Signup />
        )}
        <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
        </button>
      </div>
    </div>
  );
}

export default App;
>>>>>>> 0c0b18b6decb40bf9723bed5823accfa048d4fb4
