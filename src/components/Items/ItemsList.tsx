import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cartActions } from "../../store/CartProvider";
import { IData } from "../../types";
import { CiHeart } from "react-icons/ci";
import classes from "./ItemsList.module.scss";

export const ItemsList: React.FC<IData> = ({
  id,
  category,
  image,
  title,
  price,
  description,
}) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        image,
        title,
        price,
      })
    );
    dispatch(cartActions.popUped(true))
  };

  return (
    <div className={classes.itemBox}>
      <div className={classes.itemImg}>
        <div className={classes.rate}>
          <button>
            <CiHeart className={classes.heart} />
          </button>
        </div>
        <img src={image} />
      </div>
      <div className={classes.itemDecription}>
        <div>{title}</div>
        <span>{`$${price}`}</span>
      </div>
      <div className={classes.action}>
        <button onClick={addToCartHandler} className={classes.btn}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
