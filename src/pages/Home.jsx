import { NavBar, NavBarMobile } from "../components";

export default function Home() {
  return (
    <>
      <NavBar />
      <NavBarMobile />
      <section className="home__main">
        <section className="home__main__title">
          <h1>Bienvenido a E-commerce DEV3CH</h1>
        </section>
        <section >
          <img className="home__main__image" src="https://i.pinimg.com/564x/3d/d1/a5/3dd1a5820a67149ac258deb94ab36603.jpg" alt="" />
        </section>
      </section>
    </>
  );
}
