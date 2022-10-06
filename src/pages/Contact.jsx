import { ContactForm } from "../containers";
import { BasicLayout } from "../layouts";

export default function Contact() {
  document.title = "DEV3CH | Contacto";
  return (
    <>
      <BasicLayout>
        <main>
          <ContactForm />
        </main>
      </BasicLayout>
    </>
  );
}
