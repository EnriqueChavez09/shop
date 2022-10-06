import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { NavBarDesktop } from "../../components";

export const HeaderDesktop = () => {
  return (
    <section className="headerDesktop">
      <div className="headerDesktop__div-title">
        <a href="/">DEV3CH</a>
      </div>
      <div className="headerDesktop__div-navBar">
        <NavBarDesktop />
      </div>
      <div className="headerDesktop__div-icon">
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
