import React from "react";
import { FooterMobileSocial } from "../../components";

export const FooterMobile = () => {
  return (
    <section id="FooterMobile" className="footerMobile">
      <div className="footerMobile__social">
        <p className="footerMobile__social__title">Redes Sociales</p>
        <FooterMobileSocial />
      </div>
      <div className="footerMobile__contact">
        <p className="footerMobile__contact__title">Contactos</p>
        <p className="footerMobile__contact__paragraph">
          Celular: +51 956346858
        </p>
        <p className="footerMobile__contact__paragraph">
          Email: rchavezs@uni.pe
        </p>
      </div>
      <div className="footerMobile__newsletter">
        <p className="footerMobile__newsletter__title">Newsletter</p>
        <form className="footerMobile__newsletter__form">
          <input type="email" placeholder="Enter e-mail" />
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};
