import { NavBar } from "../components";
import { NavBarMobile } from "../components/NavBarMobile";

export default function Catalog() {
  document.title = "DEV3CH | Catálogo";
  return (
    <>
      <NavBar />
      <NavBarMobile />
    </>
  );
}
