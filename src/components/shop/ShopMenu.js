import ShopMenuItem from "./ShopMenuItem";
import { GlobalContext } from "../../context/GlobalContext";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getShopMenuAPI } from "../../api/api";

const ShopMenu = () => {
  const [menuItems, setMenuItems] = useState(null);

  const { selectedShopId, shoppingCard, setShoppingCard } =
    useContext(GlobalContext);

  const addFoodToCart = async (item) => {
    const shoppingCardFoodsCopy = [...shoppingCard.foods];
    const idx = shoppingCardFoodsCopy.findIndex(
      (selectedFood) => selectedFood.id === item.id
    );
    if (idx > -1) {
      shoppingCardFoodsCopy[idx].count += 1;
    } else {
      shoppingCardFoodsCopy.push({
        id: item.id,
        shopId: item.shopId,
        title: item.name,
        price: item.price,
        image: item.image,
        count: 1,
      });
    }
    await setShoppingCard({
      foods: [...shoppingCardFoodsCopy],
      price: (shoppingCard.price += item.price),
    });
  };

  const getShopMenu = useCallback(async () => {
    setMenuItems(null);
    try {
      const data = await getShopMenuAPI(selectedShopId);
      setMenuItems(data);
    } catch (err) {
      console.log(err);
    }
  }, [selectedShopId]);

  useEffect(() => {
    if (selectedShopId) {
      getShopMenu();
    }
  }, [selectedShopId, getShopMenu]);

  const content = useMemo(() => {
    let content;
    if (selectedShopId && !menuItems) {
    } else if (!selectedShopId) {
      content = <h3>Choose a store</h3>;
    } else if (menuItems) {
      content = (
        <div className="w-[80vw] h-[80vh] border rounded flex gap-5 flex-wrap p-10">
          {menuItems.map((item) => (
            <ShopMenuItem
              key={item.id}
              shopId={item.shopId}
              title={item.name}
              description={item.description}
              price={item.price}
              onSelectHandler={() => addFoodToCart(item)}
              image={item.image}
            />
          ))}
        </div>
      );
    }
    return content;
  }, [selectedShopId, menuItems, shoppingCard]);

  return <>{content}</>;
};

export default ShopMenu;
