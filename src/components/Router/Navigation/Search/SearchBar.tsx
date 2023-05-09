import React from "react";
import s from "./SearchBar.module.scss";
import { ISearchBar } from "../../../../types";

export const SearchBar: React.FC<ISearchBar> = (props) => {
  return (
    <div key={props.id} className={s.products}>
      <div className={s.searchImg}>
        <img src={props.image} alt="Product Image" />
      </div>
      <div className={s.searchTitle}> {props.title}</div>
    </div>
  );
};
