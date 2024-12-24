import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { toast } from 'react-toastify'; // Ensure toastify is installed and configured

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    role: 'user',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      // Make a POST request with axios
      const response = await axios.post('http://localhost:3000/api/v1/users/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data)
      if (response.status === 201) {
        const data = response.data;
        console.log(data)
        toast.success('Registration successful!');

        // Navigate based on role
        if (data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/users');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSignup} className="form">
      <h2>Sign Up</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.passwordConfirm}
        onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
        required
      />
      <select name="" id=""  
      value={formData.role}
      onChange={(e) =>
    setFormData({ ...formData, role: e.target.value })
  }>
        <option value="">select role</option>
        <option value="user">user</option>
        <option value="admin">admin</option>

      </select>
      <button type="submit" className="submit-btn"><a href="/login">Sign Up</a></button>
    </form>
  );
}

export default Signup;












// import React, { useState } from 'react';
// import './Signup.css'

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '', 
//     confirmPassword:'',
//     role:''
//   });
//   const [confirmPassword, setConfirmPassword] = useState('');
//   // const [error, setError] = useState(null);
//   // const [loading, setLoading] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     e.preventDefault()
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,  // Update the corresponding field in formData
//     });
//   };

//   const handleSignup = async (formData) => {
//     // setIsLoading(true);
//     try {
//       // Make a POST request with axios
//       const response = await axios.post('http://localhost:5000/api/users/register', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       // Handle the response
//       const data = response.data;
  
//       if (response.status === 201) {
  
//         // Navigate based on role
//         if (data.role === 'admin') {
//           navigate('/admin');
//         } else {
//           navigate('/user');
//         }
//       } else {
//         throw new Error(data.message || 'Registration failed');
//       }
      
//     } catch (error) {
//       toast.error(error.response ? error.response.data.message : error.message);
//     } finally {
//       // setIsLoading(false);
//     }
//   };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (password !== confirmPassword) {
//   //     alert("Passwords do not match");
//   //     return;
//   //   }
    
//   //   console.log('Signup:', { name, phone, email, password });
//   // };

//   return (
//       <form onSubmit={handleSignup} className="form">
//       <h2>Sign Up</h2>
//       <input 
//         type="text" 
//         placeholder="Full Name" 
//         value={formData.name} 
//         onChange={(e)=>setFormData(e.target.value)} 
//         required 
//       />
//       <input 
//         type="tel" 
//         placeholder="Phone Number" 
//         value={formData.phone} 
//         onChange={(e)=>setFormData(e.target.value)} 
//         required 
//       />
//       <input 
//         type="email" 
//         placeholder="Email" 
//         value={formData.email} 
//         onChange={(e)=>setFormData(e.target.value)} 
//         required 
//       />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={formData.password} 
//         onChange={(e)=>setFormData(e.target.value)} 
//         required 
//       />
//       <input 
//         type="password" 
//         placeholder="Confirm Password" 
//         value={formData.confirmPassword} 
//         onChange={(e)=>setFormData(e.target.value)} 
//         required 
//       />
//       <button type="submit" className="submit-btn">Sign Up</button>
//     </form>
  
//   );
// }

// export default Signup;

