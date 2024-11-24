import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./login.css";

export const Regsiter = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = { email, username, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setLoggedInUser(newUser); // Automatically log in the user
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <section className="login">
      <div className="container">
        <form onSubmit={handleRegister}>
          <span>Email address *</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>Username *</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span>Password *</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>Confirm Password *</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="button">Register</button>
        </form>
      </div>
    </section>
  );
};
