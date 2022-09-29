import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { NavBarDesktop } from "../../components";

export const HeaderDesktop = () => {
  return (
    <section className="headerDesktop">
      <section className="headerDesktop__section-title">
        <a href="/">
          DEV3CH
        </a>
      </section>
      <section className="headerDesktop__section-navBar">
        <NavBarDesktop />
      </section>
      <section className="headerDesktop__section-icon">
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
      </section>
    </section>
  );
};
