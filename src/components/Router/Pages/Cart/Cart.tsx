import { useAppSelector } from "../../../../store/hooks";
import { CartItems } from "./CartItems";
import classes from "./Cart.module.scss";
import React from "react";

export const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const CartItem =
    totalQuantity > 0 ? (
      cartItems.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
          totalPrice={item.totalPrice}
          image={item.image}
        />
      ))
    ) : (
      <h1>No Added items</h1>
    );

  return <div className={classes.cart}>{CartItem}</div>;
};
