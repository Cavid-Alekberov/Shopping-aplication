import s from "./Home.module.scss";
import { Banner } from "../components/Banner";
import { useFetch } from "../api/useFetch";
import { Product } from "../components/Product";
import { useState } from "react";

export const Home = () => {
  const { items, loading, error } = useFetch(
    "https://main-shoppin-app-default-rtdb.firebaseio.com/items.json"
  );
  const sortProducts = [
    "A to Z",
    "Z to A",
    "Price high to low",
    "Price low to high",
  ];
  const [categorySelect, setCategorySelect] = useState("all");
  const [sortSelect, setSortSelect] = useState("");

  const opt = items.map((itm) => itm.category);
  let uniqueCategory = opt.filter((c, index) => {
    return opt.indexOf(c) === index;
  });
  const changeCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorySelect(e.target.value);
  };

  const sortProductsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortSelect(e.target.value);
  };

  let prp =
    categorySelect === "all"
      ? items
      : items.filter((itm) => itm.category === categorySelect);

  let prp2 = prp.sort((a, b) => a.title.localeCompare(b.title));

  if (sortSelect === "Z to A") {
    prp.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortSelect === "Price high to low") {
    prp.sort((a, b) => b.price - a.price);
  } else if (sortSelect === "Price low to high") {
    prp.sort((a, b) => a.price - b.price);
  }

  let products =
    items.length > 0 ? (
      prp2.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          category={item.category}
          image={item.image}
        />
      ))
    ) : (
      <p>No found items..</p>
    );

  if (error) {
    products = <p>An error occurred </p>;
  }
  if (loading) {
    products = <p>Loading....</p>;
  }

  const categorySelection = (
    <select onChange={changeCategoryHandler}>
      <option value="all">All</option>
      {uniqueCategory.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const sortSelection = (
    <select onChange={sortProductsHandler}>
      {sortProducts.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return (
    <div className={s.homeBox}>
      <Banner />
      <div className={s.productsBox}>
        <div className={s.productsOption}>
          {sortSelection}
          {categorySelection}
        </div>
        {products}
      </div>
    </div>
  );
};
