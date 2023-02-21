import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App, action } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: action,
  },
  {
    path: "/thankyou",
    element: <h1>Thank you for your submission.</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
