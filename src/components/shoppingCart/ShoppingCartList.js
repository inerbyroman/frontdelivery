import ShoppingCartItem from "./ShoppingCartItem";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const ShoppingCartList = () => {
  const { shoppingCard, setShoppingCard } = useContext(GlobalContext);

  const removeFoodFromCart = (food) => {
    let shoppingCardFoodsCopy = [...shoppingCard.foods];
    if (food.count === 1) {
      shoppingCardFoodsCopy = shoppingCard.foods.filter(
        ({ id }) => food.id !== id
      );
    } else {
      const idx = shoppingCardFoodsCopy.findIndex(({ id }) => id === food.id);
      shoppingCardFoodsCopy[idx].count -= 1;
    }

    setShoppingCard({
      foods: [...shoppingCardFoodsCopy],
      price: shoppingCard.price - food.price,
    });
  };

  const addFoodFromCart = (food) => {
    const shoppingCardFoodsCopy = [...shoppingCard.foods];
    const idx = shoppingCardFoodsCopy.findIndex(({ id }) => id === food.id);
    shoppingCardFoodsCopy[idx].count += 1;
    setShoppingCard({
      foods: [...shoppingCardFoodsCopy],
      price: shoppingCard.price + food.price,
    });
  };
  return (
    <div className="w-full">
      {shoppingCard.foods.map((item) => (
        <ShoppingCartItem
          key={item.id}
          title={item.title}
          price={item.price}
          count={item.count}
          addHandler={() => addFoodFromCart(item)}
          removeHandler={() => removeFoodFromCart(item)}
        />
      ))}
    </div>
  );
};

export default ShoppingCartList;
