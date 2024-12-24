// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';
import Login from './pages/LoginForm.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import UserPage from './pages/UserPage.jsx';
import Admin from './pages/Admin.jsx';
import BusinessRegistration from './pages/BusinessRegistration.jsx';
import SignupForm from './components/SignupForm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/users" element={<UserPage/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/business" element={<BusinessRegistration/>} />
      </Routes>
    </Router>
  );
}

// function AuthHandler() {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   const handleLogin = (email, password) => {
//     if (email === 'zackdaahir909@gmail.com' && password === 'admin123') {
//       navigate('/business-registration');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="overlay"></div> 
//       <div className="form-container">
//         {isLogin ? (
//           <Login handleLogin={handleLogin} />
//         ) : (
//           <Signup />
//         )}
//         <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
//         </button>
//       </div>
//     </div>
//   );
// }

export default App;
