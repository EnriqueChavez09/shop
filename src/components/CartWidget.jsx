import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const CartWidget = ({ size }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#ef5d5d", size: size }}>
        <AiOutlineShoppingCart />
      </IconContext.Provider>
    </>
  );
};
