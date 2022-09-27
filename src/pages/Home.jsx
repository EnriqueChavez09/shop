import { NavBar, NavBarMobile } from "../components";

export default function Home() {
  return (
    <>
      <NavBar />
      <NavBarMobile />
      <section className="home-main">
        <section className="home-main__title">
          <h1>
            Bienvenido a <br /> E-COMMERCE DEV3CH
          </h1>
        </section>
        <section className="home-main__image">
          <img
            src="https://i.pinimg.com/564x/3d/d1/a5/3dd1a5820a67149ac258deb94ab36603.jpg"
            alt=""
          />
        </section>
      </section>
    </>
  );
}
