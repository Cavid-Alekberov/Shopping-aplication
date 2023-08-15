import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { Error } from "../components/Error";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { ProductDetail } from "../components/ProductDetail";
import { Favorits } from "../pages/Favorits";
import { Login } from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "favorits", element: <Favorits /> },
      { path: "cart", element: <Cart /> },
      { path: "profile", element: <Login /> },
      { path: ":prodId", element: <ProductDetail /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
