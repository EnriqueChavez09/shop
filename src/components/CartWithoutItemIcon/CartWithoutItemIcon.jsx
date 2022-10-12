import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const CartWithoutItemIcon = () => {
  return (
    <div className="cartWithoutItemIcon">
      <div className="cartWithoutItemIcon__totalItem">0</div>
      <IconContext.Provider value={{ color: "#ef5d5d", size: "80px" }}>
        <AiOutlineShoppingCart />
      </IconContext.Provider>
    </div>
  );
};
