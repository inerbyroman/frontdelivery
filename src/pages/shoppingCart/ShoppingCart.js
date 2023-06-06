import ShoppingCartForm from "../../components/shoppingCart/ShoppingCartForm";
import ShoppingCartList from "../../components/shoppingCart/ShoppingCartList";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ShoppingCart = () => {
  const { shoppingCard } = useContext(GlobalContext);

  return (
    <div>
      <div className="mx-5 flex gap-5">
        <ShoppingCartForm />
        <div className="w-full h-[80vh] border rounded flex gap-5 flex-wrap p-10">
          <ShoppingCartList list={shoppingCard.foods} />
        </div>
      </div>
      <div className="flex justify-end mr-5 mt-5 gap-10 items-center">
        <p>Total price: {shoppingCard.price}</p>
        <button className="p-2 border rounded">Submit</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
