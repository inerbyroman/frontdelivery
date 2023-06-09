import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ShopItem = ({ shopId, title, onSelectHandler, disabled, isActive }) => {
  const { activeShopId } = useContext(GlobalContext);

  const clickHandler = () => {
    if (shopId === activeShopId || !activeShopId) {
      onSelectHandler();
    }
  };

  return (
    <div
      className={`${disabled ? "disabled" : ""} ${
        isActive ? "active bg-lime-500" : ""
      }  cursor-pointer w-full h-10 border border-black rounded flex justify-center items-center`}
      onClick={clickHandler}
    >
      {title}
    </div>
  );
};

export default ShopItem;
