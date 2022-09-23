import { CartWidget } from "./CartWidget";
import { MenuWidget } from "./MenuWidget";

export const NavBarMobile = () => {
  return (
    <>
      <nav className="nav-mobile">
        <a className="nav-mobile__logo" href="/">
          DEV3CH
        </a>
        <a className="nav-mobile__cart" href="/carrito">
          <CartWidget />
        </a>
        <a className="nav-mobile__menu" href="/carrito">
          <MenuWidget />
        </a>
      </nav>
    </>
  );
};
