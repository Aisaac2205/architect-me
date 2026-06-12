import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="section-title mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="section-subtitle">
            ¿Tienes una idea en mente? Me encantaría conocerla y ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;