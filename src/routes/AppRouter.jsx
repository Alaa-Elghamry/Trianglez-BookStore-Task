import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// layouts
import { useSelector } from "react-redux";
import MainLayout from "../layouts/MainLayout/MainLayout";
// pages
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import AddBookPage from "../pages/AddBookPage";
import BookDetails from "../pages/BookDetails";

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoggedIn = isAuthenticated;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-book",
        element: (
          <ProtectedRoute>
            <AddBookPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/book-details/:bookId",
        element: (
          <ProtectedRoute>
            <BookDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
