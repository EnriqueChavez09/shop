export const FooterDesktop = () => {
  return (
    <section className="footerDesktop">
      <section className="footerDesktop__logo">
        <img src="/assets/logo.png" alt="" />
        <p className="footerDesktop__logo__title"> DEV3CH</p>
        <p className="footerDesktop__logo__subtitle"> E-commerce</p>
      </section>
      <section className="footerDesktop__social">
        <p className="footerDesktop__social__title">Redes Sociales</p>
      </section>
      <section className="footerDesktop__contact">
        <p className="footerDesktop__contact__title">Contactos</p>
        <p>+51 956 346 858</p>
        <p>rchavezs@uni.pe</p>
      </section>
      <section className="footerDesktop__newsletter">
        <p className="footerDesktop__newsletter__title">Newsletter</p>
      </section>
    </section>
  );
};
