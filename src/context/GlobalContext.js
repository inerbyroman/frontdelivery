import { createContext, useEffect, useMemo, useState } from "react";
import { postOrderAPI } from "../api/api";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [shoppingCard, setShoppingCard] = useState(
    JSON.parse(localStorage.getItem("card")) || { foods: [], price: 0 }
  );
  const [selectedShopId, setSelectedShopId] = useState(
    shoppingCard.foods[0]?.shopId || null
  );
  const [globalDiscount, setGlobalDiscount] = useState();
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(shoppingCard));
  }, [shoppingCard]);

  const orderClickHandler = () => {
    if (globalDiscount) {
      shoppingCard.price =
        (shoppingCard.price - shoppingCard.price * globalDiscount).toFixed(2) +
        `(discount ${globalDiscount * 100}%)`;
    }
    const data = {
      shopId: selectedShopId,
      ...value,
      items: { ...shoppingCard },
    };
    postOrderAPI(data);
    setValue({ name: "", email: "", phone: "", address: "" });
    setShoppingCard({ foods: [], price: 0 });
  };

  const globalContextValue = useMemo(
    () => ({
      shoppingCard,
      setShoppingCard,
      selectedShopId,
      setSelectedShopId,
      value,
      setValue,
      orderClickHandler,
      setGlobalDiscount,
    }),
    [shoppingCard, selectedShopId, value]
  );

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
