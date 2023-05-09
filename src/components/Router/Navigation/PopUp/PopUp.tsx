import { useAppSelector } from "../../../../store/hooks";
import { GiCheckMark } from "react-icons/gi";
import s from "./Popup.module.scss";

export const PopUp = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className={s.popUpbox}>
      <span>{`${totalQuantity}  items added to cart `}</span>
      <span>
        <GiCheckMark />
      </span>
    </div>
  );
};
