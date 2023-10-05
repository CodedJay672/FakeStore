import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Routes/home";
import {
  createHashRouter as Router,
  RouterProvider
} from "react-router-dom";
import { loader as rootLoader } from "./Routes/home";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Routes/Auth";
import { action as loginAction} from "./Routes/Auth";


 // create a router to load the webpages
 const router = Router([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction,
    errorElement: <ErrorPage />
  }
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);