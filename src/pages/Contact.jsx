import { NavBar } from "../components";
import { NavBarMobile } from "../components/NavBarMobile";

export default function Contact() {
  document.title = "DEV3CH | Contáctanos";
  return (
    <>
      <NavBar />
      <NavBarMobile />
    </>
  );
}
