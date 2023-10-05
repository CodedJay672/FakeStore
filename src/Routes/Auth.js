import React, { useState } from "react";
import {
  Form,
  useNavigate,
  redirect,
} from "react-router-dom";
import { login } from "../utils/routeFunctions";

export async function action({request}) {
  event.preventDefault();
  const { email, password } = request.body;
  const user = await login({ email, password });
  if (!user) {
    throw new Error('Oops! Something went wrong');
  }
  sessionStorage.setItem('user', user);
  redirect('/'); // redirect to home page
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
    <div>
      <Form action="../utils/routeFunction" method="POST">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <input type="submit" value="Submit" />
        <input type="button" onClick={cancelLogin} value="Cancel" />
      </Form>
    </div>
  );
}