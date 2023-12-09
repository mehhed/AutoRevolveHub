import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import CategorisItems from "./pages/CategorisItems.jsx";
import Cart from "./pages/Cart.jsx";
import Details from "./Components/Details.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Authentication from "./Authentication/Authentication.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Update from "./pages/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("categori.json"),
      },
      {
        path: "/AddProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/categoris/:categori",
        element: <CategorisItems></CategorisItems>,
        loader: ({ params }) =>
          fetch(
            `https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/categoris/${params.categori}`
          ),
      },
      {
        path: "/MyCart",
        element: <Cart></Cart>,
      },
      {
        path: "/details/:_id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/details/${params._id}`
          ),
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateItems/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://auto-revolve-hub-server-a917p2u3u-mehheds-projects.vercel.app/cars/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router} />
    </Authentication>
  </React.StrictMode>
);
