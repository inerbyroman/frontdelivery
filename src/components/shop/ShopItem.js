const ShopItem = ({ title, onSelectHandler, disabled, isActive }) => (
  <div
    className={`${disabled ? "disabled" : ""} ${isActive ? "active" : ""}`}
    onClick={onSelectHandler}
    disabled={disabled}
  >
    {title}
  </div>
);

export default ShopItem;
