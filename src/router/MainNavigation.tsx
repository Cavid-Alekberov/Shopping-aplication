import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Inavigation } from "../types";

import { GrSearch } from "@react-icons/all-files/gr/GrSearch";
import { BsBag } from "@react-icons/all-files/bs/BsBag";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { MdFavoriteBorder } from "@react-icons/all-files/md/MdFavoriteBorder";

import s from "./MainNavigation.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { searchActions } from "../redux/SearchProvider";

export const MainNavigation: React.FC<Inavigation> = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Show SearchBar
  const searchProductHandler = () => {
    dispatch(searchActions.showSearchInput());
  };

  return (
    <header className={`${s.mainNav} ${show && s.hidden}`}>
      <input type="checkbox" id={s.menue} className={s.checkMenu} />
      <label htmlFor={s.menue} className={s.checkLabel}>
        <GiHamburgerMenu className={s.menuIcon} />
      </label>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : undefined)}
        end
      >
        <h2>Shopping React</h2>
      </NavLink>
      <div className={s.toolList}>
        <GrSearch className={s.search} onClick={searchProductHandler} />
        <NavLink
          to="favorits"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          <MdFavoriteBorder />
        </NavLink>
        <NavLink
          to="cart"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          <BsBag className={s.cart} />
          <span className={s.totalQuantity}>{totalQuantity}</span>
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          <CgProfile />
        </NavLink>
      </div>
    </header>
  );
};
