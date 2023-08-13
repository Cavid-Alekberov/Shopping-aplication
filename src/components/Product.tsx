import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IData } from "../types";
import { FaHeart } from "react-icons/fa";
import s from "./Product.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { cartActions } from "../redux/CartProvider";
import { favoritsActions } from "../redux/FavoritsProvider";
import { toast } from "react-toastify";

export const Product: React.FC<IData> = ({
  id,
  image,
  title,
  price,
  category,
  description,
}) => {
  const dispatch = useAppDispatch();
  const favoritProducts = useAppSelector((state) => state.favorit.favorits);

  const heartedProduct = favoritProducts.find((favor) => favor.id === id);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        image,
        title,
        price,
        category,
        quantity: 1,
      })
    ) && toast.success(`${title} is added to Cart`);
  };

  const addFavoritItemHandler: React.MouseEventHandler = () => {
    dispatch(
      favoritsActions.addItemToFavorits({
        id,
        image,
        title,
        price,
        category,
      })
    ) && toast.success(`${title} is added to Favorit`);
  };

  const removeFavoritItemHandler: React.MouseEventHandler = () => {
    dispatch(
      favoritsActions.removeItemFromFavorits({
        id,
      })
    ) && toast.success(`${title} is removed from Favorit`);
  };

  return (
    <div className={s.itemBox}>
      <div className={s.itemImg}>
        <div className={s.rate}>
          <button
            onClick={
              heartedProduct ? removeFavoritItemHandler : addFavoritItemHandler
            }
          >
            <FaHeart className={` ${heartedProduct ? s.fillHeart : s.heart}`} />
          </button>
        </div>
        <Link target="_blank" to={`${id}`}>
          <img src={image} />
        </Link>
      </div>
      <div className={s.itemDecription}>
        <div>{title}</div>
        <span>{`$${price}`}</span>
        <span onClick={addToCartHandler}>Add to Cart &rarr;</span>
      </div>
    </div>
  );
};
