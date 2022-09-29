import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import options from "../../data/optionsNavBarMobile.json";
import { ItemList } from "../ItemList/ItemList";

export const NavBarMobile = () => {
  return (
    <section id="menu" className="navBarMobile">
      <section className="navBarMobileu__box navBarMobile__movedown">
        <a href="#close" className="navBarMobile__close">
          <IconContext.Provider value={{ color: "#FFFFFF", size: "35px" }}>
            <AiOutlineClose />
          </IconContext.Provider>
        </a>
        <ul className="navBarMobile__item">
          {options.map((item, index) => {
            return <ItemList key={index} item={item} />;
          })}
        </ul>
      </section>
    </section>
  );
};
