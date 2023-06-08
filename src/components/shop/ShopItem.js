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
        isActive ? "active" : ""
      }  cursor-pointer`}
      onClick={clickHandler}
    >
      {title}
    </div>
  );
};

export default ShopItem;
