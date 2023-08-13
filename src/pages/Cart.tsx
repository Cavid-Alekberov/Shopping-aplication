import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { CartItems } from "../components/CartItems";
import classes from "./Cart.module.scss";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);



  const CartItem = totalQuantity ? (
    cartItems.map((item) => (
      <CartItems
        key={item.id}
        id={item.id}
        title={item.title}
        quantity={item.quantity}
        price={item.price}
        totalPrice={item.totalPrice}
        image={item.image}
        category={item.category}
      />
    ))
  ) : (
    <h1>No Added items</h1>
  );

  return (
    <div className={classes.cartBox}>
      <Link to=".." relative="path">
        &#8672; Back
      </Link>
      {CartItem}
    </div>
  );
};
