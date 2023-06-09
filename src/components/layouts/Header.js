import { Link } from "react-router-dom";

const MENU_ITEMS = [
  {
    title: "Shop",
    href: "/",
  },
  {
    title: "Shopping cart",
    href: "/shopping-cart",
  },
  {
    title: "History",
    href: "/history",
  },
  {
    title: "Coupons",
    href: "/coupons",
  },
];

const Header = ({ children }) => {
  return (
    <>
      <div className="w-full h-[10vh] flex gap-[30px] mx-10">
        {MENU_ITEMS.map((item, index) => (
          <Link className="self-center " key={item.title} to={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </>
  );
};

export default Header;
