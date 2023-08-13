import React from "react";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.footerBox}>
      <div className={s.footer1}>
        <div className={s.footer1Inner}>
          <div>Quick links</div>
          <div>Info</div>
          <div>Our mission</div>
        </div>
        <div>Subscribe to our email </div>
      </div>
      <div className={s.footer2}>
        <div>Country/region</div>
        <div>Pay method</div>
      </div>
    </div>
  );
};
