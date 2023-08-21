import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTwitter, FaCcVisa } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { GrAmex } from "react-icons/gr";
import { FaCcDiscover } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={s.footerBox}>
      <div className={s.footerPart1}>
        <div className={s.footerLinks}>
          <div className={s.footerQuicklinks}>
            <h3> Quick links</h3>
            <Link to="/home">Home</Link>
            <Link to="/favorit">Favorit</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </div>
          <div className={s.footerQuicklinks}>
            <h3> Info</h3>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/shipping">Shipping policy</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className={s.footerQuicklinks}>
            <h3> Our mission</h3>
            <p>
              Quality materials, good designs, craftsmanship and sustainability.
            </p>
          </div>
        </div>
        <div className={s.footerSubscribe}>
          <div className={s.footerEmailBox}>
            <h3>Subscribe to our email</h3>
            <div className={s.footerEmail}>
              <input type="email" />
              <label>Email</label>
              <span> &#8594;</span>
            </div>
          </div>
          <div className={s.footerSocial}>
            <AiFillFacebook className={s.footerSocialElement} />
            <AiFillInstagram className={s.footerSocialElement} />
            <AiFillYoutube className={s.footerSocialElement} />
            <FaTwitter className={s.footerSocialElement} />
          </div>
        </div>
      </div>
      <div className={s.footerPart2}>
        <div className={s.footerPay}>
          <div className={s.footerPaYRegion}>
            <h3>Country/region</h3>
            <select>
              <option>CAD $ | Canada</option>
              <option>AZN | Azerbaijan</option>
              <option>USD $ | United State</option>
            </select>
          </div>
          <div className={s.footerPayMethods}>
            <FaCcVisa className={s.footerPayElement} />
            <SiMastercard className={s.footerPayElement} />
            <GrAmex className={s.footerPayElement} />
            <BsPaypal className={s.footerPayElement} />
            <FaCcDiscover className={s.footerPayElement} />
          </div>
        </div>
      </div>
    </footer>
  );
};
