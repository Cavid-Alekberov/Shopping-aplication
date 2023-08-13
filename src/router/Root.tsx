import React from "react";
import { Outlet } from "react-router-dom";
import { MainNavigation } from "./MainNavigation";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../redux/hooks";
import { Search } from "../components/Search";
import { Footer } from "../components/Footer";

export const Root: React.FC = () => {
  const showSearch = useAppSelector((state) => state.search.showSearch);

  return (
    <>
      <MainNavigation />
      {showSearch && <Search />}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Outlet />
      <Footer />
    </>
  );
};
