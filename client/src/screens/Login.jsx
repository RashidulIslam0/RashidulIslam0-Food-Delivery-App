import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevgat = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/loginuser", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        // Authentication successful, you can redirect the user to the authenticated area of your application
        nevgat("/");

        // alert("Login successful!");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <Link to="/signup" className="m-3 btn btn-danger">
          I'm a user
        </Link>
      </form>
    </div>
  );
}

export default Login;
