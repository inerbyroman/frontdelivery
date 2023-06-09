import { createContext, useMemo, useState } from "react";
import { postOrderAPI } from "../api/api";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [selectedShopId, setSelectedShopId] = useState(null);
  const [shoppingCard, setShoppingCard] = useState({ foods: [], price: 0 });
  const [globalDiscount, setGlobalDiscount] = useState();
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const orderClickHandler = () => {
    console.log(value);
    // let copyShoppingCard = [...shoppingCard];
    console.log("GD", globalDiscount);
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
