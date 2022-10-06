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
      </div>
      <div className="footerDesktop__contact">
        <p className="footerDesktop__contact__title">Contactos</p>
        <p>+51 956 346 858</p>
        <p>rchavezs@uni.pe</p>
      </div>
      <div className="footerDesktop__newsletter">
        <p className="footerDesktop__newsletter__title">Newsletter</p>
      </div>
    </section>
  );
};
