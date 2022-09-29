import React from "react";
import options from "../../data/optionsNavBarDesktop.json";
import { ItemList } from "../ItemList/ItemList";
export const NavBarDesktop = () => {
  return (
    <>
      <nav className="navBarDesktop">
        <ul className="navBarDesktop__item">
          {options.map((item, index) => {
            return <ItemList key={index} item={item} />;
          })}
        </ul>
      </nav>
    </>
  );
};
