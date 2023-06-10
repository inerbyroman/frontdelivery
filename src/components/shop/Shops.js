import ShopItem from "./ShopItem";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { getShopsAPI } from "../../api/api";

const Shops = () => {
  const [shops, setShops] = useState(null);
  const { selectedShopId, setSelectedShopId, shoppingCard } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const onSelectShopHandler = (shopId) => {
    if (shoppingCard.foods.length === 0) {
      setSelectedShopId(shopId);
      navigate(`/?shop=${shopId}`);
    }
  };

  useEffect(() => {
    const getShops = async () => {
      try {
        const data = await getShopsAPI();
        setShops(data);
      } catch (err) {
        console.log(err);
      }
    };
    getShops();
  }, []);

  return (
    <div className="flex-col w-[15vw] ml-5 p-5 border rounded">
      <h2 className="h-10 ">Shops:</h2>
      {!shops ? (
        "wait"
      ) : (
        <div className="flex flex-col gap-5">
          {shops.map((shop) => (
            <ShopItem
              key={shop.id}
              shopId={shop.id}
              onSelectHandler={() => onSelectShopHandler(shop.id)}
              title={shop.name}
              isActive={shop.id === selectedShopId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shops;
