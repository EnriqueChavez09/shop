import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { NavBarMobile, TotalItemAdd } from "../../components";

export const HeaderMobile = () => {
  return (
    <section className="headerMobile">
      <div className="headerMobile__title">
        <a href="/">DEV3CH</a>
      </div>
      <div className="headerMobile__icon">
        <div className="headerMobile__icon__totalItem">
          <TotalItemAdd />
        </div>
        <a className="nav-mobile__cart" href="/carrito">
          <IconContext.Provider value={{ color: "#ef5d5d", size: "36px" }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
        </a>
        <a href="#menu">
          <IconContext.Provider value={{ color: "#ef5d5d", size: "36px" }}>
            <AiOutlineMenu />
          </IconContext.Provider>
        </a>
      </div>
      <div className="headerMobile__navBar">
        <NavBarMobile />
      </div>
    </section>
  );
};
