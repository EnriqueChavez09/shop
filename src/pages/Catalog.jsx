import { NavBar, NavBarMobile } from "../components";

export default function Catalog() {
  document.title = "DEV3CH | Catálogo";
  return (
    <>
      <NavBar />
      <NavBarMobile />
      <h1>Catálogo :)</h1>
    </>
  );
}
