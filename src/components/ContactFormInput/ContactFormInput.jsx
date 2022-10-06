import React from "react";

export const ContactFormInput = () => {
  return (
    <div className="contactFormInput">
      <form>
        <div>
            <p>Nombre y Apellido</p>
            <input type="text" placeholder="Enrique Chavez"/>
        </div>
        <div>
            <p>Dirección de correo electrónico</p>
            <input type="email" placeholder="support@dev3ch.com"/>
        </div>
        <div>
            <p>Celular</p>
            <input type="text" placeholder="987654321" />
        </div>
        <div>
            <p>¿Cómo podemos ayudarte?</p>
            <input type="text" placeholder="Escribe un comentario"/>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};
