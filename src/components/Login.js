import React, { useState } from "react";
import "./Login.css"; 
import logo from "../assets/ttle.png";
import bg from "../assets/bg.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Auto-detect backend URL
  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://netflix-webapp-6oa5.onrender.com/api" // Render backend
      : "http://localhost:5000/api"; // Local backend

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/login`, {   
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("✅ Login Successful!");
          setError("");
        } else {
          setError(data.message || "❌ Login failed: Invalid credentials");
        }
      })
      .catch(() => {
        setError("⚠️ Server error. Try again later.");
      });
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-overlay"></div>

      {/* Logo */}
      <img src={logo} alt="Netflix Logo" className="login-logo" />

      {/* Form */}
      <div className="login-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
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

          {/* Show error if invalid */}
          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="/">Need Help?</a>
        </div>

        <p className="signup-text">
          New to Netflix? <a href="/">Sign up now</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
