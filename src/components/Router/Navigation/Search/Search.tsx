import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MdCancel } from "react-icons/md";
import s from "./Search.module.scss";
import { useAppDispatch } from "../../../../store/hooks";
import { searchActions } from "../../../../store/SearchProvider";
import { useFetch } from "../../../CustomHooks/useFetch";
import { SearchBar } from "./SearchBar";

export const Search = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const { items } = useFetch(
    "https://main-shoppin-app-default-rtdb.firebaseio.com/items.json"
  );

  const findeProduct = items.filter((item) =>
    item.title.toLowerCase().includes(searchProduct)
  );

  const finded = findeProduct.map((prod) => (
    <SearchBar
      key={prod.id}
      id={prod.id}
      image={prod.image}
      title={prod.title}
    />
  ));

  console.log(findeProduct);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value);
  };

  const dispatch = useAppDispatch();
  const cancelSerachHandler = () => {
    dispatch(searchActions.closeSearchInput());
  };

  return (
    <div className={s.searchMain}>
      <header className={s.searchHeader}>
        <div className={s.inputBox}>
          <input
            type="text"
            placeholder="serach items"
            value={searchProduct}
            onChange={changeSearch}
          />
          <span>
            <MdCancel onClick={cancelSerachHandler} className={s.cancel} />
          </span>
        </div>
        <div className={s.searchProducts}>{searchProduct && finded}</div>
      </header>
    </div>
  );
};
