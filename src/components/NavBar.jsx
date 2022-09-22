import React from "react";

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <a className="nav__title" href="/">HOME</a>
        <a className="nav__title" href="/catalogos">CATÁLOGO</a>
        <a className="nav__title" href="/contactanos">CONTÁCTANOS</a>
        <a className="nav__title" href="/blogs">BLOGS</a>
      </nav>
    </>
  );
};
