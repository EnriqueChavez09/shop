import React from "react";

export const ContactFormInput = () => {
  return (
    <div className="contactFormInput">
      <form className="contactFormInput__form">
        <div className="contactFormInput__form__input">
          <p>Nombre y Apellido</p>
          <input type="text" placeholder="Enrique Chavez" />
        </div>
        <div className="contactFormInput__form__input">
          <p>Dirección de correo electrónico</p>
          <input type="email" placeholder="support@dev3ch.com" />
        </div>
        <div className="contactFormInput__form__input">
          <p>Celular</p>
          <input type="text" placeholder="987654321" />
        </div>
        <div className="contactFormInput__form__input">
          <p>¿Cómo podemos ayudarte?</p>
          <input type="text" placeholder="Escribe un comentario" />
        </div>
        <div className="contactFormInput__form__button">
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
};
