import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"; // Context for managing user state
import "./login.css";
import back from "../../assets/images/my-account.jpg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedInUser } = useContext(UserContext); // Context to set the logged-in user
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      setLoggedInUser(user); // Save user details globally
      alert("Login successful!");
      navigate("/"); // Redirect to the homepage or dashboard
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="backImg">
          <img src={back} alt="" />
          <div className="text">
            <h3>Login</h3>
            <h1>My account</h1>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <span>Username or email address *</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>Password *</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button">Log in</button>
        </form>
      </div>
    </section>
  );
};
