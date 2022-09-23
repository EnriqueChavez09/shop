import { AccountWidget } from "./AccountWidget";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <a className="nav__logo" href="/">
          DEV3CH
        </a>
        <a className="nav__title" href="/catalogos">
          CATÁLOGO
        </a>
        <a className="nav__title" href="/contactanos">
          CONTÁCTANOS
        </a>
        <a className="nav__title" href="/blogs">
          BLOGS
        </a>
        <a className="nav__cart" href="/carrito">
          <CartWidget size={"45px"} />
        </a>
        <a className="nav__account" href="/carrito">
          <AccountWidget size={"45px"} />
        </a>
      </nav>
    </>
  );
};
