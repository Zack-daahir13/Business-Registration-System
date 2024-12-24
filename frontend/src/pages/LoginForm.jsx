import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login", // Your backend login endpoint
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Enable cookie handling
        }
      );

      // Extract user data from the response
      const { user } = response.data;

      // Redirect based on user role
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "user") {
        navigate("/home");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
      console.error("Login Error:", error.response?.data || error.message);
    }
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
      <button type="submit" className="submit-btn">
        Log In
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";  // Import js-cookie

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // To redirect after login

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/v1/users/login", // Your backend login endpoint
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       // Assuming the backend returns a token and user details
//       const { token, user } = response.data;

//       // Store the token in a cookie (instead of localStorage)
//       Cookies.set("authToken", token, { expires: 7 }); // Token expires in 7 days

//       // Navigate to a specific page based on the user's role
//       if (user.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/home");
//       }
//     } catch (error) {
//       setError(
//         error.response?.data?.message || "Login failed. Please try again."
//       );
//       console.error("Login Error:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <h2>Log In</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit" className="submit-btn">
//         Log In
//       </button>
//       {error && <p className="error-message">{error}</p>}
//     </form>
//   );
// }

// export default Login;
