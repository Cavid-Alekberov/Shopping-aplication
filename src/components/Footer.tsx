import React from "react";
import s from "./Footer.module.scss";
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={s.footerBox}>
      <div className={s.footer1}>
        <div className={s.footer1Inner}>
          <div className={s.footerQuicklinks}>
            <h3> Quick links</h3>
            <Link to="/home">Home</Link>
            <Link to="/favorit">Favorit</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </div>
          <div className={s.footerQuicklinks}>
            <h3> Info</h3>
            <Link to="/home">About</Link>
            <Link to="/favorit">Contact us</Link>
            <Link to="/cart">Shipping policy</Link>
            <Link to="/profile">Blog</Link>
          </div>
          <div className={s.footerQuicklinks}>
            <h3> Our mission</h3>
            <Link to="/home">Quality materials, good designs, craftsmanship and sustainability.</Link>
          </div>
        </div>
        <div className={s.footerSubscribe}>
          <div className={s.footerEmail}>
            <h3>Subscribe to our email</h3>
            <input type="email" placeholder="Email" />
          </div>
          <div className={s.footerSocial}>
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className={s.footer2}>
        <div className={s.footerPay}>
          <div className={s.footerPaYRegion}>
            <h3>Country/region</h3>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className={s.footerPayMethods}>
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};
