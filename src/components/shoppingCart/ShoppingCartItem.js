const ShoppingCartItem = ({
  title,
  price,
  count,
  addHandler,
  removeHandler,
  image,
}) => {
  return (
    <div className="flex border w-full h-auto rounded p-5 gap-4">
      <div className="w-1/2 h-auto">
        <img className="w-full object-cover" src={`${image}`} />
      </div>
      <div className="flex flex-col text-center w-1/2">
        <h5>{title}</h5>
        <p>price: {price}</p>
        <div className="flex justify-center h-full items-center">
          <div className="border rounded flex">
            <h3 className="text-center p-3 px-5 border-e">{count}</h3>
            <div className="flex flex-col">
              <button
                className="border-b px-[2px]"
                type="button"
                onClick={addHandler}
              >
                +
              </button>

              <button
                className="px-[2px]"
                type="button"
                onClick={removeHandler}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
