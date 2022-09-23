import { NavBar } from "../components";
import { NavBarMobile } from "../components/NavBarMobile";

export default function Blog() {
  document.title = "DEV3CH | Blogs";
  return (
    <>
      <NavBar />
      <NavBarMobile />
    </>
  );
}
