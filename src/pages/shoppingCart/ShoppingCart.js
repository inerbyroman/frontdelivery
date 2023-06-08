import ShoppingCartForm from "../../components/shoppingCart/ShoppingCartForm";
import ShoppingCartList from "../../components/shoppingCart/ShoppingCartList";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { getCurrentCouponAPI } from "../../api/api";

const ShoppingCart = () => {
  const { shoppingCard, orderClickHandler } = useContext(GlobalContext);
  const [codeValue, setCodeValue] = useState();
  const [discount, setDiscount] = useState();

  const codeHandler = async (e) => {
    setDiscount(null);
    setCodeValue(e.target.value);

    let coupon;
    if (codeValue?.length > 3) {
      coupon = await getCurrentCouponAPI(e.target.value);
    }
    if (coupon) {
      const result = coupon[0]?.size.slice(0, -1) * 0.01;
      console.log(result);
      setDiscount(result);
    }
  };
  return (
    <div>
      <div className="mx-5 flex gap-5">
        <ShoppingCartForm />
        <div className="w-full overflow-y-auto h-[80vh] border rounded flex gap-5 flex-wrap p-10">
          <ShoppingCartList list={shoppingCard.foods} />
        </div>
      </div>

      <div className="flex justify-end mr-5 mt-5 gap-10 items-center">
        <input value={codeValue} onChange={codeHandler} />
        <p>
          Total price:
          {discount
            ? (shoppingCard.price - shoppingCard.price * discount).toFixed(2)
            : shoppingCard.price.toFixed(2)}
        </p>
        <button onClick={orderClickHandler} className="p-2 border rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
