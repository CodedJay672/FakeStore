import React, { useState } from "react";
import {
  useNavigate,
  NavLink,
  useOutletContext,
} from "react-router-dom";
import { login } from "../utils/routeFunctions";
import './Auth.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useOutletContext();
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const cancelLogin = () => {
    navigate(-1);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      username,
      password
    });
  }

  return (
    <div className="loginForm">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameChange}
          value={username}
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
          required
        />
        <div className="cta">
          <button type="submit">Login</button>
          <button type="button" onClick={cancelLogin}>Cancel</button>
        </div>
      </form>
      <p>Don't have an account? click <NavLink to="/signup">Here</NavLink> to create an account</p>
    </div>
  );
}