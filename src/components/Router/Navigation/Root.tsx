import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { MainNavigation } from "./MainNavigation/MainNavigation";
import { Search } from "./Search/Search";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { PopUp } from "./PopUp/PopUp";
import { cartActions } from "../../../store/CartProvider";

export const Root: React.FC = () => {
  const dispatch = useAppDispatch();
  const showSearch = useAppSelector((state) => state.search.showSearch);
  const pop = useAppSelector((state) => state.cart.popUp);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(cartActions.popUped(false));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showSearch && <Search />}
      <MainNavigation />
      {pop && <PopUp />}
      <Outlet />
    </>
  );
};
