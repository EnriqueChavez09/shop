import { CartWidget } from "./CartWidget";
import { MenuItems } from "./MenuItems";
import { MenuWidget } from "./MenuWidget";

export const NavBarMobile = () => {
  return (
    <>
      <nav className="nav-mobile">
        <a className="nav-mobile__logo" href="/">
          DEV3CH
        </a>
        <a className="nav-mobile__cart" href="/carrito">
          <CartWidget size={"36px"} />
        </a>
        <a className="nav-mobile__menu" href="#menu">
          <MenuWidget size={"36px"} />
        </a>
      </nav>
      <MenuItems />
    </>
  );
};
