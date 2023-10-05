import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import './ErrorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error">
    <h1>Oops!</h1>
    <p>{error.status || error.message}</p>
    <NavLink to="/">Go Back Home</NavLink>
    </div>
  )
}