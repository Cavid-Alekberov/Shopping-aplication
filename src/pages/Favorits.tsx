import { FavoritProduct } from "../components/FavoritProduct";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import s from "./Favorits.module.scss";
import { ToastContainer } from "react-toastify";

export const Favorits = () => {
  const favoritProducts = useAppSelector((state) => state.favorit.favorits);

  const content = favoritProducts ? (
    favoritProducts.map((item) => (
      <FavoritProduct
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        category={item.category}
      />
    ))
  ) : (
    <h1>No Added items</h1>
  );

  return (
    <div className={s.favoritBox}>
      <Link to=".." relative="path">
        &#8672; Back
      </Link>
      <div className={s.favoritProducts}>
        {content}
      </div>
    </div>
  );
};
