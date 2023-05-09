import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Navigation/Root";
import { Error } from "./Error";
import { Home } from "./Pages/Home/Home";
import { Electronics } from "./Pages/Electronics";
import { Clothes } from "./Pages/Clothes";
import { Jwellery } from "./Pages/Jwellery";
import { Profile } from "./Pages/Profile";
import { Cart } from "./Pages/Cart/Cart";
import { All } from "./Pages/All";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "all",
        element: <All />,
      },
      { path: "electronics", element: <Electronics /> },
      { path: "clothes", element: <Clothes /> },
      { path: "jwellery", element: <Jwellery /> },
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
