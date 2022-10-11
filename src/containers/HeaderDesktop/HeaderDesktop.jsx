import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { NavBarDesktop, TotalItemAdd } from "../../components";

export const HeaderDesktop = () => {
  return (
    <section className="headerDesktop">
      <div className="headerDesktop__title">
        <a href="/">DEV3CH</a>
      </div>
      <div className="headerDesktop__navBar">
        <NavBarDesktop />
      </div>
      <div className="headerDesktop__icon">
        <div className="headerDesktop__icon__totalItem">
          <TotalItemAdd />
        </div>
        <a href="/carrito">
          <IconContext.Provider value={{ color: "#ef5d5d", size: "45px" }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
        </a>
        <a href="/carrito">
          <IconContext.Provider value={{ color: "#ef5d5d", size: "45px" }}>
            <AiOutlineUser />
          </IconContext.Provider>
        </a>
      </div>
    </section>
  );
};
