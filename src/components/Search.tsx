import { useState } from "react";
import { MdCancel } from "react-icons/md";
import s from "./Search.module.scss";
import { useAppDispatch } from "../redux/hooks";
import { searchActions } from "../redux/SearchProvider";
import { SearchBar } from "./SearchBar";
import { useFetch } from "../api/useFetch";

export const Search = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useAppDispatch();
  const { items, loading, error } = useFetch(
    "https://main-shoppin-app-default-rtdb.firebaseio.com/items.json"
  );

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value);
  };
  const cancelSerachHandler = () => {
    dispatch(searchActions.closeSearchInput());
  };

  const findeProduct = items.filter((item) =>
    item.title.toLowerCase().includes(searchProduct)
  );
  let finded: JSX.Element[] | JSX.Element = findeProduct.map((prod) => (
    <SearchBar
      key={prod.id}
      id={prod.id}
      image={prod.image}
      title={prod.title}
      cancelSerachHandler={cancelSerachHandler}
    />
  ));
  if (error) {
    finded = <p>An error occurred </p>;
  }
  if (loading) {
    finded = <p>Loading....</p>;
  }

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
