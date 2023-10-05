import React, { useState } from "react";
import {
  Form,
  useNavigate,
  redirect,
  NavLink,
} from "react-router-dom";
import { login } from "../utils/routeFunctions";
import './Auth.css';

export async function action({ request }) {
  const formData = await request.formData();
  const object = Object.fromEntries(formData);
  try {
    const token = await login(object);
    sessionStorage.setItem('storeUser', token);
    return redirect('/');
  } catch (error) {
    consol.log(error);
  }
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const cancelLogin = () => {
    navigate(-1);
  }

  return (
    <div className="loginForm">
      <h1>Login</h1>
      <Form method="post">
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
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
      </Form>
      <p>Don't have an account? click <NavLink to="/signup">Here</NavLink> to create an account</p>
    </div>
  );
}