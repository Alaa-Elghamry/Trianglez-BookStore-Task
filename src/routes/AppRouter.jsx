import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "../layouts/MainLayout/MainLayout";
// pages
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
