import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { NavBarMobile } from "../../components";

export const HeaderMobile = () => {
  return (
    <section className="headerMobile">
      <section className="headerMobile__section-title">
        <a href="/">
          DEV3CH
        </a>
      </section>
      <section className="headerMobile__section-icon">
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
      </section>
      <section className="headerMobile__section-navBar">
        <NavBarMobile />
      </section>
    </section>
  );
};
