import React, { useState } from "react";
import {
  Form,
  useNavigate,
  redirect,
  NavLink,
  useActionData,
  useOutletContext
} from "react-router-dom";
import { login } from "../utils/routeFunctions";
import { userContext } from "./App";
import './Auth.css';

export async function action({ request }) {
  const formData = await request.formData();
  const object = Object.fromEntries(formData);
  try {
    const token = await login(object);
    return token;
  } catch (error) {
    return redirect('/login');
  }
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useActionData();
  const { signIn } = useOutletContext(userContext);
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

  const handleSubmit = (token) => {
    signIn(token);
    navigate('/');
  }
  
  return (
    <div className="loginForm">
      <h1>Login</h1>
      <Form method="post" onSubmit={() => handleSubmit(token)}>
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