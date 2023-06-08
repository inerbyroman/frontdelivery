import { createContext, useCallback, useMemo, useState } from "react";
import { postOrderAPI } from "../api/api";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [selectedShopId, setSelectedShopId] = useState(null);
  const [shoppingCard, setShoppingCard] = useState({ foods: [], price: 0 });

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const orderClickHandler = useCallback(() => {
    console.log(value);
    const data = {
      shopId: selectedShopId,
      ...value,
      items: { ...shoppingCard },
    };
    postOrderAPI(data);
  });

  const globalContextValue = useMemo(
    () => ({
      shoppingCard,
      setShoppingCard,
      selectedShopId,
      setSelectedShopId,
      value,
      setValue,
      orderClickHandler,
    }),
    [shoppingCard, selectedShopId, value]
  );

  console.log(shoppingCard);

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
