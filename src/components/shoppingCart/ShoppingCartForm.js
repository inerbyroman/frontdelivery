import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ShoppingCartForm = () => {
  const { value, setValue } = useContext(GlobalContext);

  const onChangeHandler = (event, key) => {
    setValue((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <form className="flex w-full flex-col p-5 gap-[20px] border rounded h-[80vh]">
      <input
        className="p-2 border rounded"
        placeholder="Name"
        type="text"
        value={value.name}
        onChange={(e) => onChangeHandler(e, "name")}
      />
      <input
        className="p-2 border rounded"
        placeholder="Email"
        type="email"
        value={value.email}
        onChange={(e) => onChangeHandler(e, "email")}
      />
      <input
        className="p-2 border rounded"
        placeholder="Phone"
        type="tel"
        value={value.phone}
        onChange={(e) => onChangeHandler(e, "phone")}
      />
      <input
        className="p-2 border rounded"
        placeholder="Address"
        type="text"
        value={value.address}
        onChange={(e) => onChangeHandler(e, "address")}
      />
    </form>
  );
};

export default ShoppingCartForm;
