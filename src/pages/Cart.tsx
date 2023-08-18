import { useAppSelector } from "../redux/hooks";
import { CartItems } from "../components/CartItems";
import s from "./Cart.module.scss";
import React from "react";
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
  ) : (<div className={s.cartBoxEmpty}>
    <h1>Your Cart is Empty</h1>
    <Link to="/" >Continue Shopping</Link>
    <h2>Have an account?</h2>
    <h4><Link to="/profile">Log in</Link>  to check out faster.</h4>
  </div>

  );

  return (
    <div className={s.cartBox}>
      <Link to=".." relative="path">
        &#8672; Back
      </Link>
      {CartItem}
    </div>
  );
};
