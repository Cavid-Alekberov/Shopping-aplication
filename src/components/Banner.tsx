import { useState } from "react";
import m from "../assets/mainImg.png";
import c1 from "../assets/clothes1.png";
import e1 from "../assets/electronics1.png";
import e2 from "../assets/electronics2.jpg";
import e3 from "../assets/electronics3.jpg";
import e4 from "../assets/electronics4.jpg";
import e5 from "../assets/electronics5.jpg";
import j1 from "../assets/jewelry1.jpg";
import j2 from "../assets/jewelry2.jpg";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import s from "./Banner.module.scss";

export const Banner = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const image = [m, c1, e1, e2, e3, e4, e5, j1, j2];

  const prevImgHandler = () => {
    setCurrentImg(currentImg === 0 ? 8 : (prev) => prev - 1);
  };
  const nextImgHandler = () => {
    setCurrentImg(currentImg === 8 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className={s.entranceBox}>
      <img src={image[currentImg]} alt="Products Publicity" />
      <div className={s.imageAction}>
        <div onClick={prevImgHandler} className={s.actionPN}>
          <AiOutlineArrowLeft />
        </div>
        <div onClick={nextImgHandler} className={s.actionPN}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};
