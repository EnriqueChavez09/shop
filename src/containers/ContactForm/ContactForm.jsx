import React from "react";
import { ContactFormInput, ContactFormTitle } from "../../components";

export const ContactForm = () => {
  return (
    <section id="ContactForm" className="contactForm">
      <ContactFormTitle />
      <ContactFormInput />
    </section>
  );
};
