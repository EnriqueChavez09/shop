import React, { useState } from "react";

export const HomeWelcome = () => {
  const [first, setfirst] = useState(0);
  const hiWorld = () => {
    setfirst(first + 1);
    console.log(first);
  };
  // useEffect(() => {
  //   setfirst(first + 1);
  // }, []);

  return (
    <>
      <section className="homeWelcome">
        <section className="homeWelcome__title">
          <h1 onClick={hiWorld}>Bienvenido a nuestra tienda DEV3CH</h1>
          <p>No busques más!, las mejores tecnologías los encuentras aquí</p>
        </section>
        <section className="homeWelcome__image">
          <img
            src="https://i.pinimg.com/564x/3d/d1/a5/3dd1a5820a67149ac258deb94ab36603.jpg"
            alt=""
          />
        </section>
      </section>
    </>
  );
};
