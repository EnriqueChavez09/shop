import { NavBar, NavBarMobile } from "../components";

export default function Blog() {
  document.title = "DEV3CH | Blogs";
  return (
    <>
      <NavBar />
      <NavBarMobile />
      <h1>Blogs :)</h1>
    </>
  );
}
