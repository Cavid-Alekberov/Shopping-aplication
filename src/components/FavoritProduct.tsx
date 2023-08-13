import React from "react";
import { IFavorits } from "../types";
import { CiCircleRemove } from "react-icons/ci";
import s from "./FavoritProduct.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { favoritsActions } from "../redux/FavoritsProvider";
import { toast } from "react-toastify";
///FireBase

export const FavoritProduct: React.FC<IFavorits> = ({
  id,
  image,
  title,
  price,
  category,
}) => {
  const dispatch = useAppDispatch();
  const removeFavoritProduct = () => {
    dispatch(favoritsActions.removeItemFromFavorits(id)) &&
      toast.success(`${title} is removed from Favorit`);
  };

  return (
    <div className={s.itemBox}>
      <div className={s.itemImg}>
        <div className={s.rate}>
          <button onClick={removeFavoritProduct}>
            <CiCircleRemove />
          </button>
        </div>
        <img src={image} />
      </div>
      <Link target="_blank" to={`${id}`}>
        <div className={s.itemDecription}>
          <div>{title}</div>
          <span>{`$${price}`}</span>
        </div>
      </Link>
    </div>
  );
};
