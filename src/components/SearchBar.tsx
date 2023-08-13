import React from "react";
import s from "./SearchBar.module.scss";
import { ISearchBar } from "../types";
import { Link } from "react-router-dom";

export const SearchBar: React.FC<ISearchBar> = (props) => {
  const close = () => props.cancelSerachHandler();

  return (
    <div key={props.id} className={s.products}>
      <div className={s.searchImg}>
        <img src={props.image} alt="Product Image" />
      </div>
      <div className={s.searchTitle}>
        <Link to={`${props.id}`} onClick={close}>
          {props.title}
        </Link>
      </div>
    </div>
  );
};
