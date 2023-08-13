import React from "react";
import s from "./CartItems.module.scss";
import { IItems } from "../types";
import { MdDelete } from "react-icons/md";
import { useAppDispatch} from "../redux/hooks";
import { cartActions } from "../redux/CartProvider";
import { toast } from "react-toastify";

export const CartItems: React.FC<IItems> = ({
  id,
  title,
  quantity,
  price,
  totalPrice,
  image,
  category,
}) => {
  const dispatch = useAppDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
        image,
        category,
        quantity: 1,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart({ id, price, quantity }));
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteCartItem({ id, quantity })) &&
      toast.success(`${title} is removed from Cart`);
  };
  return (
    <div className={s.cartItem}>
      <div className={s.view}>
        <div className={s.img}>
          <img src={image} />
        </div>
        <div className={s.about}>
          <span className={s.name}>{title}</span>
          <span className={s.price}>{`$${price.toFixed(2)}`}</span>
        </div>
      </div>
      <div className={s.quantitys}>
        <div className={s.action}>
          <button onClick={removeItemHandler} className={s.btn}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={addItemHandler} className={s.btn}>
            +
          </button>
          <MdDelete onClick={deleteItemHandler} className={s.delete} />
        </div>
        <div className={s.total}>
          <span className={s.price}>{`$${totalPrice.toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
};
