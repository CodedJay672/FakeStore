import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Routes/Auth";
import App from "./Routes/App";
import SignUp from "./Routes/SignUp";
import Carousel, { loader as indexLoader } from "./Routes/Carousel";


 // create a router to load the webpages
 const router = Router([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Carousel />,
        loader: indexLoader,
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorPage />
      }
    ]
  },
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);