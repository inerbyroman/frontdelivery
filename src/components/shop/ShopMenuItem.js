import { useState } from "react";

const ShopMenuItem = ({ title, description, onSelectHandler, price }) => {
  const [disabled, setDisabled] = useState(false);

  const onClickAddHandler = () => {
    setDisabled(true);

    onSelectHandler();
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <div className="w-[230px] h-fit p-5 border rounded">
      <div className="w-full h-[100px] bg-yellow-300">img</div>
      <h5 className="my-4">{title}</h5>
      <div className="flex justify-between items-center">
        <p>price: {price}</p>
        <button
          className={`${disabled ? "disabled" : ""} p-2 border rounded`}
          type="button"
          disabled={disabled}
          onClick={onClickAddHandler}
        >
          {disabled ? "wait" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ShopMenuItem;
