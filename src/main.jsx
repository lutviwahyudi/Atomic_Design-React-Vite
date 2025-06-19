import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css';
import { createBrowserRouter, RouterProvider, } from "react-router";
import ErrorPage from './pages/error';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: "hello world",
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
