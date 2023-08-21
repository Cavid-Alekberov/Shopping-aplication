import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { Error } from "../components/Error";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { ProductDetail } from "../components/ProductDetail";
import { Favorits } from "../pages/Favorits";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Shipping } from "../pages/Shipping";
import { Blog } from "../pages/Blog";

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
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "shipping", element: <Shipping /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
