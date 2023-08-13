import { useParams } from "react-router-dom";
import s from "./ProductDetail.module.scss";
import { useFetch } from "../api/useFetch";
import { IData } from "../types";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { cartActions } from "../redux/CartProvider";

export const ProductDetail = () => {
  const { items, loading, error } = useFetch(
    "https://main-shoppin-app-default-rtdb.firebaseio.com/items.json"
  );
  const [count, setCount] = useState<number>(0);
  const { prodId } = useParams();
  const dispatch = useAppDispatch();

  const currentProd: IData[] = items?.filter((prod) => prod.id === prodId);

  const addItemHandler = () => {
    setCount((count) => count + 1);
  };

  const removeItemHandler = () => {
    if (count !== 0) {
      setCount((count) => count - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: currentProd[0].id,
        category: currentProd[0].category,
        image: currentProd[0].image,
        price: currentProd[0].price,
        title: currentProd[0].title,
        quantity: count,
      })
    );
  };

  const content = currentProd.map((prod) => (
    <div className={s.productBox} key={prod.id}>
      <div className={s.prodImg}>
        <img src={prod.image} alt="Product image" />
      </div>
      <div className={s.prodDeatils}>
        <span className={s.title}>{prod.title}</span>
        <span className={s.price}>{`$ ${prod.price}`}</span>
        <div className={s.action}>
          <button
            onClick={removeItemHandler}
            disabled={count === 0}
            className={s.btn}
          >
            -
          </button>
          <span>{count}</span>
          <button onClick={addItemHandler} className={s.btn}>
            +
          </button>
        </div>
        <button className={s.addCard} onClick={addToCartHandler}>
          Add to cart
        </button>
        <span className={s.description}>{prod.description}</span>
      </div>
    </div>
  ));

  return <div className={s.prodContainer}>{content}</div>;
};
