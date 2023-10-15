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
import Category, { loader as categoryLoader } from "./Routes/Category";
import Product, { loader as productLoader } from "./Routes/Product";


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
      },
      {
        path: '/category/:category',
        element: <Category />,
        errorElement: <ErrorPage />,
        loader: categoryLoader
      },
      {
        path: '/products/:id',
        element: <Product />,
        errorElement: <ErrorPage />,
        loader: productLoader
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