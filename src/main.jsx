import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <ScrollToTop></ScrollToTop>
      </RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
