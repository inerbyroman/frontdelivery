import Shops from "../../components/shop/Shops";
import ShopMenu from "../../components/shop/ShopMenu";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect } from "react";
import { urlToObject } from "../../utils/helpers";

const Shop = () => {
  const { setSelectedShopId } = useContext(GlobalContext);

  useEffect(() => {
    const searchObj = urlToObject(window.location.search);
    if (searchObj.shop) {
      setSelectedShopId(Number(searchObj.shop));
    }
  }, [setSelectedShopId]);

  return (
    <div className="flex gap-5">
      <Shops />
      <ShopMenu />
    </div>
  );
};

export default Shop;
