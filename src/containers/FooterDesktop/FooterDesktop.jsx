import { FooterDesktopSocial } from "../../components";

export const FooterDesktop = () => {
  return (
    <section id="FooterDesktop" className="footerDesktop">
      <div className="footerDesktop__logo">
        <img src="/assets/logo.png" alt="" />
        <p className="footerDesktop__logo__title"> DEV3CH</p>
        <p className="footerDesktop__logo__subtitle"> E-commerce</p>
      </div>
      <div className="footerDesktop__social">
        <p className="footerDesktop__social__title">Redes Sociales</p>
        <FooterDesktopSocial />
      </div>
      <div className="footerDesktop__contact">
        <p className="footerDesktop__contact__title">Contactos</p>
        <p className="footerDesktop__contact__paragraph">
          Celular: +51 956346858
        </p>
        <p className="footerDesktop__contact__paragraph">
          Email: rchavezs@uni.pe
        </p>
      </div>
      <div className="footerDesktop__newsletter">
        <p className="footerDesktop__newsletter__title">Newsletter</p>
        <form className="footerDesktop__newsletter__form">
          <input type="email" placeholder="Enter e-mail" />
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};
