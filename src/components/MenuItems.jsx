import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

export const MenuItems = () => {
  return (
    <section id="menu" className="menu">
      <section className="menu__box menu__movedown">
        <a href="#close" className="menu__close">
          <IconContext.Provider value={{ color: "#FFFFFF", size: "35px" }}>
            <AiOutlineClose />
          </IconContext.Provider>
        </a>
        <a className="menu__catalog" href="/catalogos">
          CATÁLOGO
        </a>
        <a className="menu__contact" href="/contactanos">
          CONTÁCTANOS
        </a>
        <a className="menu__blog" href="/blogs">
          BLOGS
        </a>
        <a className="menu__account" href="/micuenta">
          MI CUENTA
        </a>
      </section>
    </section>
  );
};
