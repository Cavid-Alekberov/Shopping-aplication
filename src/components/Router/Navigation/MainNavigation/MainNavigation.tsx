import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../../store/hooks";
import { searchActions } from "../../../../store/SearchProvider";
import { Inavigation } from "../../../../types";

import { GrSearch } from "@react-icons/all-files/gr/GrSearch";
import { FiShoppingBag } from "@react-icons/all-files/fi/FiShoppingBag";
import { GiSwordwoman } from "@react-icons/all-files/gi/GiSwordwoman";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

import s from "./MainNavigation.module.scss";

export const MainNavigation: React.FC<Inavigation> = () => {
  const dispatch = useAppDispatch();

  const showSearchHandler = () => {
    dispatch(searchActions.showSearchInput());
  };

  return (
    <header className={s.mainNav}>
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
      <div className={s.shopList}>
        <NavLink
          to="electronics"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Electronics
        </NavLink>
        <NavLink
          to="clothes"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Clothes
        </NavLink>
        <NavLink
          to="jwellery"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Jwellery
        </NavLink>
      </div>
      <div className={s.toolList}>
        <button onClick={showSearchHandler}>
          <GrSearch className={s.search} />
        </button>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          <GiSwordwoman className={s.profile} />
        </NavLink>
        <NavLink
          to="cart"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          <FiShoppingBag className={s.cart} />
        </NavLink>
      </div>
    </header>
  );
};
